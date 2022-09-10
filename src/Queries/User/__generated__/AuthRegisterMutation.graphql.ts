/**
 * @generated SignedSource<<e35ae5aca79feffad2011fdef887df77>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type createUserInput = {
  email: string;
  password: string;
  profilePicture?: string | null;
  username: string;
};
export type AuthRegisterMutation$variables = {
  input: createUserInput;
};
export type AuthRegisterMutation$data = {
  readonly register: {
    readonly email: string;
    readonly id: string;
    readonly username: string;
  } | null;
};
export type AuthRegisterMutation = {
  response: AuthRegisterMutation$data;
  variables: AuthRegisterMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "register",
    "plural": false,
    "selections": [
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
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "name": "AuthRegisterMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuthRegisterMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "089cd5353301ee9f860fec0c878afe92",
    "id": null,
    "metadata": {},
    "name": "AuthRegisterMutation",
    "operationKind": "mutation",
    "text": "mutation AuthRegisterMutation(\n  $input: createUserInput!\n) {\n  register(input: $input) {\n    username\n    email\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "0152ab578759dfea31f3a48bf732987c";

export default node;
