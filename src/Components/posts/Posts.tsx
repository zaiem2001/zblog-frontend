import React, { useCallback } from "react";
import { usePaginationFragment } from "react-relay";

import { blogPaginationFragment } from "../../Queries/Blog/GetBlog.fragment";
import { GetBlogPagination_query$key } from "../../Queries/Blog/__generated__/GetBlogPagination_query.graphql";
import {
  GetBlogsPaginatedQuery,
  GetBlogsPaginatedQuery$data,
} from "../../Queries/Blog/__generated__/GetBlogsPaginatedQuery.graphql";
import { StyledInfiniteScrollContainer } from "../InfiniteScroll/infiniteScroll.styled";

import Post from "../post/Post";
import Spinner from "../Spinner/Spinner";
import "./posts.css";

interface Props {
  blogsRef: GetBlogsPaginatedQuery$data;
}

const Posts: React.FC<Props> = ({ blogsRef }) => {
  const { data, hasNext, isLoadingNext, loadNext } = usePaginationFragment<
    GetBlogsPaginatedQuery,
    GetBlogPagination_query$key
  >(blogPaginationFragment, blogsRef);

  const handleLoadMore = useCallback(
    (nodes: any) => {
      if (isLoadingNext) {
        return;
      }

      loadNext(nodes.length);
    },
    [isLoadingNext, loadNext]
  );

  return (
    <div className="posts">
      <StyledInfiniteScrollContainer
        loader={
          isLoadingNext ? (
            <Spinner size="large" data-spinner="spinner" loading />
          ) : (
            <></>
          )
        }
        loadMore={() => {
          handleLoadMore(data.blogs?.edges);
        }}
        hasMore={hasNext}
      >
        <div className="blogsContainer">
          {data.blogs?.edges &&
            data.blogs?.edges.map((item, index) => (
              <Post blog={item} key={index + Math.random()} />
            ))}
        </div>
      </StyledInfiniteScrollContainer>
    </div>
  );
};

export default Posts;
