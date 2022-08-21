import { graphql } from "babel-plugin-relay/macro";

export const CreateUserBlogMutation = graphql`
  mutation CreateBlogMutation($input: createBlogInput!) {
    createBlog(input: $input) {
      id
      title
      ...GetBlog_blog
    }
  }
`;
