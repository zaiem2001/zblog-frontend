import React, { useContext, useState } from "react";
import { useFragment, useMutation } from "react-relay";
import { Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { SingleBlogFragment } from "../../Queries/Blog/GetBlog.fragment";
import { LikeBlogMutation } from "../../Queries/Blog/Mutations/__generated__/LikeBlogMutation.graphql";
import { LikeUnlikeBlog } from "../../Queries/Blog/Mutations/LikeBlog";
import { DeleteBlog } from "../../Queries/Blog/Mutations/DeleteBlog";
import { CommentOnBlog } from "../../Queries/Blog/Mutations/Comment";
import { CommentOnBlogMutation } from "../../Queries/Blog/Mutations/__generated__/CommentOnBlogMutation.graphql";
import { DeleteBlogMutation } from "../../Queries/Blog/Mutations/__generated__/DeleteBlogMutation.graphql";

import Comment from "../Comment/Comment";
import { timeAgoFormat } from "../../Utils/helpers";
import { User } from "../../Constants/Interfaces";
import { UserContext } from "../../Context/AuthContext";
import "./singlePost.css";
import CustomModal from "../Modal/Modal";
import UseDocumentTitle from "../../Hooks/UseDocumentTitle";
import Message from "../Message/Message";

interface Props {
  blogRef: any;
}

const SinglePost: React.FC<Props> = ({ blogRef }) => {
  const { user, isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const blog = useFragment(SingleBlogFragment, blogRef.blog);
  const [commitLike, isLiking] = useMutation<LikeBlogMutation>(LikeUnlikeBlog);
  const [commitComment, isCommenting] =
    useMutation<CommentOnBlogMutation>(CommentOnBlog);

  const [commitDelet, isDeleting] = useMutation<DeleteBlogMutation>(DeleteBlog);

  UseDocumentTitle(`Z-${blog?.title}`);

  const [comment, setComment] = useState("");
  const [visible, setVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const alreadyLiked = isLoggedIn
    ? blog?.likes.some((like: any) => like.id === user.id)
    : false;

  const isBlogOwner = isLoggedIn ? blog.user.id === user.id : false;

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoggedIn) {
      setVisible(true);
      return;
    }

    if (isCommenting || !comment.trim()) return;

    commitComment({
      variables: {
        comment,
        blogId: blog.id,
      },
      onCompleted(response, errors) {
        if (response.blog) {
          setComment("");
        }
        if (errors?.length) {
          console.log(errors);
          setComment("");
        }
      },
    });
  };

  const handleLike = () => {
    if (!isLoggedIn) {
      setVisible(true);
      return;
    }

    if (isLiking) return;

    commitLike({
      variables: { blogId: blog?.id },
      onCompleted(_response, errors) {
        if (errors?.length) {
          console.log(errors);
        }
      },
    });
  };

  const handleOnOk = () => {
    setVisible(false);
    navigate("/login", { replace: true });
  };

  const handleCancel = () => {
    if (isDeleting) return;

    setDeleteModalVisible(false);
  };

  const handleDelete = () => {
    commitDelet({
      variables: { blogId: blog.id },
      onCompleted(response, errors) {
        if (errors?.length) {
          Message({ text: "Something went wrong!" });
          setDeleteModalVisible(false);
          return;
        }

        Message({ text: "Blog deleted successfully.", type: "success" });
        setDeleteModalVisible(false);
        navigate("/", { replace: true });
      },
    });
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={blog?.image} alt={blog?.title} />
        <h1 className="singlePostTitle">
          {blog?.title}
          <div className="singlePostEdit">
            <i
              onClick={handleLike}
              className={
                alreadyLiked
                  ? "singlePostIcon fas fa-heart"
                  : "singlePostIcon far fa-heart"
              }
            ></i>

            {isBlogOwner && (
              <>
                <i className="singlePostIcon far fa-edit"></i>

                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={() => setDeleteModalVisible((prev) => !prev)}
                ></i>
              </>
            )}
          </div>
        </h1>
        <div className="singlePostInfo">
          <div className="info-top">
            <span>
              Author:
              <b className="singlePostAuthor">
                <Link
                  className="link"
                  to={`/posts?username=${blog?.user?.username}`}
                >
                  {blog?.user?.username}
                </Link>
              </b>
            </span>

            <span className="likesCount">
              Likes:
              <b className="singlePostAuthor">{blog?.likes?.length}</b>
            </span>
          </div>
          <span>{timeAgoFormat(blog?.createdAt)}</span>
        </div>
        <div className="singlePostDesc">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blog?.description}
          </ReactMarkdown>
        </div>

        <div className="postCommentsWrapper">
          <h1 className="commentTitle">Comments</h1>
          <form onSubmit={handleComment}>
            <div className="commentInputBox">
              <input
                type="text"
                name="comment"
                placeholder="Comment Something..."
                className="commentInput"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
              />
            </div>
          </form>

          <div className="Postcomments">
            {blog?.comments.length ? (
              blog?.comments?.map(
                (comment: { user: User; comment: string; date: string }) => (
                  <Comment commentObj={comment} />
                )
              )
            ) : (
              <div className="noComments">
                <p>No Comments</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <CustomModal
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={handleOnOk}
        title="You are not Logged in."
      >
        <div className="loggedInModal">
          <p>Login to Like or Comment on the Blog.</p>
        </div>
      </CustomModal>

      <CustomModal
        title="This action is Irreversible!"
        visible={deleteModalVisible}
        onOk={handleDelete}
        confirmLoading={isDeleting}
        onCancel={handleCancel}
        okText="Delete"
      >
        <p>Are you sure you want to Delete the Blog ?</p>
      </CustomModal>
    </div>
  );
};

export default SinglePost;
