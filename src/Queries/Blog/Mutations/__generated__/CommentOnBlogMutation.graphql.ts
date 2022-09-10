/**
 * @generated SignedSource<<6139952d0529f63661c683177a4cb8cb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommentOnBlogMutation$variables = {
  blogId: string;
  comment: string;
};
export type CommentOnBlogMutation$data = {
  readonly blog: {
    readonly " $fragmentSpreads": FragmentRefs<"GetBlog_blog">;
  } | null;
};
export type CommentOnBlogMutation = {
  response: CommentOnBlogMutation$data;
  variables: CommentOnBlogMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "blogId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "comment"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "blogId",
    "variableName": "blogId"
  },
  {
    "kind": "Variable",
    "name": "comment",
    "variableName": "comment"
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
    "name": "CommentOnBlogMutation",
    "selections": [
      {
        "alias": "blog",
        "args": (v1/*: any*/),
        "concreteType": "Blog",
        "kind": "LinkedField",
        "name": "commentOnBlog",
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
    "name": "CommentOnBlogMutation",
    "selections": [
      {
        "alias": "blog",
        "args": (v1/*: any*/),
        "concreteType": "Blog",
        "kind": "LinkedField",
        "name": "commentOnBlog",
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
    "cacheID": "12e4bb5f6a39662177217a2d0de9a6a5",
    "id": null,
    "metadata": {},
    "name": "CommentOnBlogMutation",
    "operationKind": "mutation",
    "text": "mutation CommentOnBlogMutation(\n  $blogId: String!\n  $comment: String!\n) {\n  blog: commentOnBlog(blogId: $blogId, comment: $comment) {\n    ...GetBlog_blog\n    id\n  }\n}\n\nfragment GetBlog_blog on Blog {\n  id\n  image\n  categories\n  title\n  createdAt\n  description\n  user {\n    id\n    username\n    profilePicture\n  }\n  likes {\n    id\n    username\n  }\n  comments {\n    comment\n    user {\n      profilePicture\n      username\n      id\n    }\n    date\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "f8e31e7aec690f89b1cac626979322e7";

export default node;
