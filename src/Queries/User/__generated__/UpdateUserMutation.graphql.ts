/**
 * @generated SignedSource<<bb0a70920bb70829be625cf7d07be1af>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateUserInput = {
  email?: string | null;
  profilePicture?: string | null;
  username?: string | null;
};
export type UpdateUserMutation$variables = {
  input: UpdateUserInput;
};
export type UpdateUserMutation$data = {
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
};
export type UpdateUserMutation = {
  response: UpdateUserMutation$data;
  variables: UpdateUserMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
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
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "update",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateUserMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateUserMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "cca1e5eceecac251d6fd41a7ece7fd91",
    "id": null,
    "metadata": {},
    "name": "UpdateUserMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateUserMutation(\n  $input: UpdateUserInput!\n) {\n  user: update(input: $input) {\n    id\n    username\n    profilePicture\n    email\n    isAdmin\n    createdAt\n    updatedAt\n    blogs {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "71ee2ed538a2e7c5e4fa2ed86b0bf0e9";

export default node;
