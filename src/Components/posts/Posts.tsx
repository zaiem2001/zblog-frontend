import React, { useCallback } from "react";
import { usePaginationFragment } from "react-relay";
import { v4 as uuidv4 } from "uuid";

import { blogPaginationFragment } from "../../Queries/Blog/GetBlog.fragment";
import { GetBlogPagination_query$key } from "../../Queries/Blog/__generated__/GetBlogPagination_query.graphql";
import {
  GetBlogsPaginatedQuery,
  GetBlogsPaginatedQuery$data,
} from "../../Queries/Blog/__generated__/GetBlogsPaginatedQuery.graphql";

import { StyledInfiniteScrollContainer } from "../InfiniteScroll/infiniteScroll.styled";
import Post from "../post/Post";
import Spinner from "../Spinner/Spinner";
import { StyledBlogsContainer, StyledContainer } from "./Post.styled";

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
    <StyledContainer>
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
        <StyledBlogsContainer>
          {data.blogs?.edges &&
            data.blogs?.edges.map((item) => (
              <Post blog={item} key={uuidv4()} />
            ))}
        </StyledBlogsContainer>
      </StyledInfiniteScrollContainer>
    </StyledContainer>
  );
};

export default Posts;
