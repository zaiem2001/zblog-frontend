/**
 * @generated SignedSource<<8fc13b3789d2420b723d731767f64cdc>>
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
export type registerMutation$variables = {
  input: createUserInput;
};
export type registerMutation$data = {
  readonly register: {
    readonly email: string;
    readonly id: string;
    readonly username: string;
  } | null;
};
export type registerMutation = {
  response: registerMutation$data;
  variables: registerMutation$variables;
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
    "name": "registerMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "registerMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7cfea5dc5265272870dc2700c4da9c9f",
    "id": null,
    "metadata": {},
    "name": "registerMutation",
    "operationKind": "mutation",
    "text": "mutation registerMutation(\n  $input: createUserInput!\n) {\n  register(input: $input) {\n    username\n    email\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "ad135351e80bf750916601f87eea5d5f";

export default node;
