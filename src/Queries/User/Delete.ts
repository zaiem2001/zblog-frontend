import { graphql } from "babel-plugin-relay/macro";

export const DeleteUser = graphql`
  mutation DeleteUserMutation($id: ID) {
    user: delete(id: $id) {
      id
      username
      profilePicture
      email
      isAdmin
      createdAt
      updatedAt
      blogs {
        id
      }
    }
  }
`;
