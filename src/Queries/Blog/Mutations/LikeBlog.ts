import { graphql } from "babel-plugin-relay/macro";

export const LikeUnlikeBlog = graphql`
  mutation LikeBlogMutation($blogId: String!) {
    blog: likeUnlikeBlog(blogId: $blogId) {
      ...GetBlog_blog
    }
  }
`;
