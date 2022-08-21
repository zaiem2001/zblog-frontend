import React from "react";
import { useLazyLoadQuery } from "react-relay";
// import { useLocation } from "react-router-dom";
import Header from "../../Components/header/Header";

import type { GetBlogsQuery } from "../../Queries/Blog/__generated__/GetBlogsQuery.graphql";

import Posts from "../../Components/posts/Posts";
import SidebarNav from "../../Components/sidebar/SideBarNav";
import UseDocumentTitle from "../../Hooks/UseDocumentTitle";
import { GetBlogs } from "../../Queries/Blog/GetBlogs";

import "./homepage.css";

const Homepage: React.FC = () => {
  // const location = useLocation();

  UseDocumentTitle("Z Blog - Homepage");

  const blogsRef = useLazyLoadQuery<GetBlogsQuery>(
    GetBlogs,
    { filter: {} },
    { fetchPolicy: "store-and-network" }
  );

  return (
    <>
      <Header />
      <div className="home">
        <Posts blogsRef={blogsRef} />
        <SidebarNav />
      </div>
    </>
  );
};

export default Homepage;
