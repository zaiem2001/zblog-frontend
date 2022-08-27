import { graphql } from "babel-plugin-relay/macro";

export const SingleBlogFragment = graphql`
  fragment GetBlog_blog on Blog {
    id
    image
    categories
    title
    createdAt
    description
    user {
      id
      username
      profilePicture
    }
    likes {
      id
      username
    }
    comments {
      comment
      user {
        profilePicture
        username
      }
      date
      id
    }
  }
`;

export const blogPaginationFragment = graphql`
  fragment GetBlogPagination_query on Query
  @refetchable(queryName: "GetBlogsPaginatedQuery") {
    blogs(after: $after, first: $first, filter: $filter, sortBy: $sortBy)
      @connection(key: "Blogs_query_user_blogs") {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
      edges {
        node {
          ...GetBlog_blog
        }
      }
    }
  }
`;
