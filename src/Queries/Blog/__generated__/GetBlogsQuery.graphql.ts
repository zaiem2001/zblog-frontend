/**
 * @generated SignedSource<<e8054ca5f8bccd7143e7af45b555bf9f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilterInput = {
  categories?: ReadonlyArray<string> | null;
  user?: string | null;
};
export type GetBlogsQuery$variables = {
  filter?: FilterInput | null;
};
export type GetBlogsQuery$data = {
  readonly blogs: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"GetBlogs_blog">;
  }> | null;
};
export type GetBlogsQuery = {
  response: GetBlogsQuery$data;
  variables: GetBlogsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "filter"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GetBlogsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Blog",
        "kind": "LinkedField",
        "name": "blogs",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "GetBlogs_blog"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetBlogsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Blog",
        "kind": "LinkedField",
        "name": "blogs",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "image",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "categories",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
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
            "name": "description",
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
              (v2/*: any*/),
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
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "likes",
            "plural": true,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "475138b6fb615a848106b08f0668134b",
    "id": null,
    "metadata": {},
    "name": "GetBlogsQuery",
    "operationKind": "query",
    "text": "query GetBlogsQuery(\n  $filter: FilterInput\n) {\n  blogs(filter: $filter) {\n    ...GetBlogs_blog\n    id\n  }\n}\n\nfragment GetBlogs_blog on Blog {\n  id\n  image\n  categories\n  title\n  createdAt\n  description\n  user {\n    id\n    username\n    profilePicture\n  }\n  likes {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "17c58559a4468f412ef14fd17412abbb";

export default node;
