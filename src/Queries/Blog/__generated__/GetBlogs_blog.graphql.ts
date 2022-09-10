/**
 * @generated SignedSource<<0ddeab0a8e3d4a6492842a30687e48e0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetBlogs_blog$data = {
  readonly categories: ReadonlyArray<string> | null;
  readonly createdAt: string;
  readonly description: string;
  readonly id: string;
  readonly image: string;
  readonly likes: ReadonlyArray<{
    readonly id: string;
  }> | null;
  readonly title: string;
  readonly user: {
    readonly id: string;
    readonly profilePicture: string | null;
    readonly username: string;
  };
  readonly " $fragmentType": "GetBlogs_blog";
};
export type GetBlogs_blog$key = {
  readonly " $data"?: GetBlogs_blog$data;
  readonly " $fragmentSpreads": FragmentRefs<"GetBlogs_blog">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GetBlogs_blog",
  "selections": [
    (v0/*: any*/),
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
        (v0/*: any*/),
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
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Blog",
  "abstractKey": null
};
})();

(node as any).hash = "735a74eaa9a675290dfae6bf3588f5fa";

export default node;
