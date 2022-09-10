/**
 * @generated SignedSource<<14a8d518ae0a31edd963207a90f466ba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LikeBlogMutation$variables = {
  blogId: string;
};
export type LikeBlogMutation$data = {
  readonly blog: {
    readonly " $fragmentSpreads": FragmentRefs<"GetBlog_blog">;
  } | null;
};
export type LikeBlogMutation = {
  response: LikeBlogMutation$data;
  variables: LikeBlogMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "blogId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "blogId",
    "variableName": "blogId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "profilePicture",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LikeBlogMutation",
    "selections": [
      {
        "alias": "blog",
        "args": (v1/*: any*/),
        "concreteType": "Blog",
        "kind": "LinkedField",
        "name": "likeUnlikeBlog",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "GetBlog_blog"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LikeBlogMutation",
    "selections": [
      {
        "alias": "blog",
        "args": (v1/*: any*/),
        "concreteType": "Blog",
        "kind": "LinkedField",
        "name": "likeUnlikeBlog",
        "plural": false,
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
              (v3/*: any*/),
              (v4/*: any*/)
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
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "kind": "LinkedField",
            "name": "comments",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "comment",
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
                  (v4/*: any*/),
                  (v3/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "date",
                "storageKey": null
              },
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
    "cacheID": "ef189a5b0dc38ac36f1275cd4c467a3d",
    "id": null,
    "metadata": {},
    "name": "LikeBlogMutation",
    "operationKind": "mutation",
    "text": "mutation LikeBlogMutation(\n  $blogId: String!\n) {\n  blog: likeUnlikeBlog(blogId: $blogId) {\n    ...GetBlog_blog\n    id\n  }\n}\n\nfragment GetBlog_blog on Blog {\n  id\n  image\n  categories\n  title\n  createdAt\n  description\n  user {\n    id\n    username\n    profilePicture\n  }\n  likes {\n    id\n    username\n  }\n  comments {\n    comment\n    user {\n      profilePicture\n      username\n      id\n    }\n    date\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "130e9daf013d6cfd5f7b4c8ee45fb8f9";

export default node;
