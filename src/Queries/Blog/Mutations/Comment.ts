import { graphql } from "babel-plugin-relay/macro";

export const CommentOnBlog = graphql`
  mutation CommentOnBlogMutation($blogId: String!, $comment: String!) {
    blog: commentOnBlog(blogId: $blogId, comment: $comment) {
      ...GetBlog_blog
    }
  }
`;
