import React from "react";

import type { GetBlogsQuery$data } from "../../Queries/Blog/__generated__/GetBlogsQuery.graphql";

import Post from "../post/Post";
import "./posts.css";

interface Props {
  blogsRef: GetBlogsQuery$data;
}

const Posts: React.FC<Props> = ({ blogsRef }) => {
  return (
    <div className="posts">
      {blogsRef?.blogs?.map((item, index) => (
        <Post blog={item} key={index + Math.random()} />
      ))}
    </div>
  );
};

export default Posts;
