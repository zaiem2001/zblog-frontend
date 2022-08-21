// src/components/Foo.tsx
import { graphql } from "babel-plugin-relay/macro";

export const registerMutation = graphql`
  mutation AuthRegisterMutation($input: createUserInput!) {
    register(input: $input) {
      username
      email
      id
    }
  }
`;

export const LoginMutation = graphql`
  mutation AuthLoginMutation($email: String!, $password: String!) {
    user: login(email: $email, password: $password) {
      token
      user {
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
  }
`;
