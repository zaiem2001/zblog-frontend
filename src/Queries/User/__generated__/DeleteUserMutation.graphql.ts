/**
 * @generated SignedSource<<e22b8a2447a10fe02eccbf560a25df54>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteUserMutation$variables = {
  id?: string | null;
};
export type DeleteUserMutation$data = {
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
export type DeleteUserMutation = {
  response: DeleteUserMutation$data;
  variables: DeleteUserMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
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
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "delete",
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
    "name": "DeleteUserMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteUserMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "fbffd8d13ecd7a7c8de5fd7310f78324",
    "id": null,
    "metadata": {},
    "name": "DeleteUserMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteUserMutation(\n  $id: ID\n) {\n  user: delete(id: $id) {\n    id\n    username\n    profilePicture\n    email\n    isAdmin\n    createdAt\n    updatedAt\n    blogs {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "294b9eed8460e53fc29868fdd39e0b63";

export default node;
