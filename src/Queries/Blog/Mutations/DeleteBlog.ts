import { graphql } from "babel-plugin-relay/macro";

export const DeleteBlog = graphql`
  mutation DeleteBlogMutation($blogId: ID!) {
    deleteBlog(blogId: $blogId) {
      ...GetBlog_blog
    }
  }
`;
