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
