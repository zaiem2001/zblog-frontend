// src/components/Foo.tsx
import { graphql } from "babel-plugin-relay/macro";

export const UpdateMutation = graphql`
  mutation UpdateUserMutation($input: UpdateUserInput!) {
    user: update(input: $input) {
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
