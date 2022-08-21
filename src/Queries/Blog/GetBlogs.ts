import { graphql } from "babel-plugin-relay/macro";

export const GetBlogs = graphql`
  query GetBlogsQuery($filter: FilterInput) {
    blogs(filter: $filter) {
      ...GetBlogs_blog
    }
  }
`;

export const BlogsFragment = graphql`
  fragment GetBlogs_blog on Blog {
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
    }
  }
`;
