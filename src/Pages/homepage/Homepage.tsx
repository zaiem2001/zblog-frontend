import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import Header from "../../Components/header/Header";

import { GetBlogsPaginatedQuery } from "../../Queries/Blog/__generated__/GetBlogsPaginatedQuery.graphql";

import UseDocumentTitle from "../../Hooks/UseDocumentTitle";
import Posts from "../../Components/posts/Posts";
import "./homepage.css";

const Homepage: React.FC = () => {
  UseDocumentTitle("Z Blog - Homepage");

  const blogsRef = useLazyLoadQuery<GetBlogsPaginatedQuery>(
    graphql`
      query HomepageQuery(
        $after: String
        $first: Int
        $filter: FilterInput
        $sortBy: SortInput
      ) {
        ...GetBlogPagination_query
      }
    `,
    {
      filter: {},
      first: 6,
    },
    { fetchPolicy: "store-and-network" }
  );

  return (
    <>
      <Header />
      <div className="home">
        <Posts blogsRef={blogsRef} />
      </div>
    </>
  );
};

export default Homepage;
