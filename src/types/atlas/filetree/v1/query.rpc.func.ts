//@ts-nocheck
import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryTreeNodeRequest, QueryTreeNodeResponse, QueryFileTreePathsRequest, QueryFileTreePathsResponse, QueryTreeNodeChildrenRequest, QueryTreeNodeChildrenResponse } from "./query";
/**
 * Parameters queries the parameters of the module.
 * @name getParams
 * @package atlas.filetree.v1
 * @see proto service: atlas.filetree.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "atlas.filetree.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * TreeNode Queries a list of TreeNode items.
 * @name getTreeNode
 * @package atlas.filetree.v1
 * @see proto service: atlas.filetree.v1.TreeNode
 */
export const getTreeNode = buildQuery<QueryTreeNodeRequest, QueryTreeNodeResponse>({
  encode: QueryTreeNodeRequest.encode,
  decode: QueryTreeNodeResponse.decode,
  service: "atlas.filetree.v1.Query",
  method: "TreeNode",
  deps: [QueryTreeNodeRequest, QueryTreeNodeResponse]
});
/**
 * FileTreePaths Queries a list of FileTreePaths items.
 * @name getFileTreePaths
 * @package atlas.filetree.v1
 * @see proto service: atlas.filetree.v1.FileTreePaths
 */
export const getFileTreePaths = buildQuery<QueryFileTreePathsRequest, QueryFileTreePathsResponse>({
  encode: QueryFileTreePathsRequest.encode,
  decode: QueryFileTreePathsResponse.decode,
  service: "atlas.filetree.v1.Query",
  method: "FileTreePaths",
  deps: [QueryFileTreePathsRequest, QueryFileTreePathsResponse]
});
/**
 * TreeNodeChildren Queries a list of TreeNodeChildren items.
 * @name getTreeNodeChildren
 * @package atlas.filetree.v1
 * @see proto service: atlas.filetree.v1.TreeNodeChildren
 */
export const getTreeNodeChildren = buildQuery<QueryTreeNodeChildrenRequest, QueryTreeNodeChildrenResponse>({
  encode: QueryTreeNodeChildrenRequest.encode,
  decode: QueryTreeNodeChildrenResponse.decode,
  service: "atlas.filetree.v1.Query",
  method: "TreeNodeChildren",
  deps: [QueryTreeNodeChildrenRequest, QueryTreeNodeChildrenResponse]
});