import React from "react";
import { useFragment } from "react-relay";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { timeAgoFormat } from "../../Utils/helpers";
import { SingleBlogFragment } from "../../Queries/Blog/GetBlog.fragment";
import "./post.css";

interface PostProps {
  blog: any;
}

const getFormattedURL = (url: string) => {
  return url.replaceAll(" ", "-");
};

const Post: React.FC<PostProps> = ({ blog }) => {
  const fragmentData = useFragment(SingleBlogFragment, blog.node);

  return (
    <div className="post">
      <Link
        to={`/post/${getFormattedURL(fragmentData.title)}/${fragmentData.id}`}
      >
        <img className="postImg" src={fragmentData?.image} alt="" />
      </Link>

      <div className="postInfo">
        <div className="postCats">
          {fragmentData?.categories?.map((category: string) => (
            <span className="postCat" key={category}>
              {category}
            </span>
          ))}
        </div>

        <span className="postTitle">
          <Link
            to={`/post/${getFormattedURL(fragmentData.title)}/${
              fragmentData.id
            }`}
            className="link"
          >
            {fragmentData?.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {timeAgoFormat(fragmentData?.createdAt)}
        </span>
      </div>
      <p className="postDesc">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {fragmentData?.description}
        </ReactMarkdown>
      </p>
    </div>
  );
};

export default Post;
