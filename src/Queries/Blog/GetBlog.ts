import { graphql } from "babel-plugin-relay/macro";

export const GetSingleBlog = graphql`
  query GetBlogByTitleQuery($id: ID) {
    blog(id: $id) {
      ...GetBlog_blog
    }
  }
`;
