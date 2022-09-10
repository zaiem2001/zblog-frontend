/**
 * @generated SignedSource<<2d0d5ac282bf3ad2c827ff3f6f5251ff>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AuthLoginMutation$variables = {
  email: string;
  password: string;
};
export type AuthLoginMutation$data = {
  readonly user: {
    readonly token: string | null;
    readonly user: {
      readonly blogs: ReadonlyArray<{
        readonly id: string;
      }> | null;
      readonly createdAt: string;
      readonly email: string;
      readonly id: string;
      readonly isAdmin: boolean;
      readonly profilePicture: string | null;
      readonly updatedAt: string;
      readonly username: string;
    } | null;
  } | null;
};
export type AuthLoginMutation = {
  response: AuthLoginMutation$data;
  variables: AuthLoginMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": "user",
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      }
    ],
    "concreteType": "LoginData",
    "kind": "LinkedField",
    "name": "login",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "profilePicture",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isAdmin",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatedAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Blog",
            "kind": "LinkedField",
            "name": "blogs",
            "plural": true,
            "selections": [
              (v1/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AuthLoginMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuthLoginMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "11173fa3ef3612ff066ad12a5593805c",
    "id": null,
    "metadata": {},
    "name": "AuthLoginMutation",
    "operationKind": "mutation",
    "text": "mutation AuthLoginMutation(\n  $email: String!\n  $password: String!\n) {\n  user: login(email: $email, password: $password) {\n    token\n    user {\n      id\n      username\n      profilePicture\n      email\n      isAdmin\n      createdAt\n      updatedAt\n      blogs {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "aa5b16f9be84447319446bf75ec06670";

export default node;
