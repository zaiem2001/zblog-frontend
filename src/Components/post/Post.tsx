import React from "react";
import { useFragment } from "react-relay";
import { Link } from "react-router-dom";

import { GetBlogs_blog$key } from "../../Queries/Blog/__generated__/GetBlogs_blog.graphql";

import { BlogsFragment } from "../../Queries/Blog/GetBlogs";
import "./post.css";
import { timeAgoFormat } from "../../Utils/helpers";

interface PostProps {
  blog: GetBlogs_blog$key;
}

const getFormattedURL = (url: string) => {
  return url.replaceAll(" ", "-");
};

const Post: React.FC<PostProps> = ({ blog }) => {
  const fragmentData = useFragment(BlogsFragment, blog);

  return (
    <div className="post">
      <Link
        to={`/post/${getFormattedURL(fragmentData.title)}/${fragmentData.id}`}
      >
        <img className="postImg" src={fragmentData?.image} alt="" />
      </Link>

      <div className="postInfo">
        <div className="postCats">
          {fragmentData?.categories?.map((category) => (
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
      <p
        className="postDesc"
        dangerouslySetInnerHTML={{
          __html: fragmentData?.description,
        }}
      ></p>
    </div>
  );
};

export default Post;
