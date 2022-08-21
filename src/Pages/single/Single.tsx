import React from "react";
import { useLazyLoadQuery } from "react-relay";
import { useParams } from "react-router-dom";

import { GetSingleBlog } from "../../Queries/Blog/GetBlog";
import { GetBlogByTitleQuery } from "../../Queries/Blog/__generated__/GetBlogByTitleQuery.graphql";

import SidebarNav from "../../Components/sidebar/SideBarNav";
import SinglePost from "../../Components/singlePost/SinglePost";

import "./single.css";

const Single: React.FC = () => {
  const { id } = useParams();

  const singleBlogRef = useLazyLoadQuery<GetBlogByTitleQuery>(
    GetSingleBlog,
    {
      id,
    },
    {
      fetchPolicy: "store-and-network",
    }
  );

  return (
    <div className="single">
      <SinglePost blogRef={singleBlogRef} />
      <SidebarNav />
    </div>
  );
};

export default Single;
