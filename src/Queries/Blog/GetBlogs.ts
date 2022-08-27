import { graphql } from "babel-plugin-relay/macro";

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
