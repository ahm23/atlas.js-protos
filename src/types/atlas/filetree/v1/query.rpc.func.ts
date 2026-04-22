//@ts-nocheck
import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryFileNodeRequest, QueryFileNodeResponse, QueryFileTreePathsRequest, QueryFileTreePathsResponse, QueryFileNodeChildrenRequest, QueryFileNodeChildrenResponse } from "./query";
/**
 * Parameters queries the parameters of the module.
 * @name getParams
 * @package nebulix.filetree.v1
 * @see proto service: nebulix.filetree.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "nebulix.filetree.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * FileNode Queries a list of FileNode items.
 * @name getFileNode
 * @package nebulix.filetree.v1
 * @see proto service: nebulix.filetree.v1.FileNode
 */
export const getFileNode = buildQuery<QueryFileNodeRequest, QueryFileNodeResponse>({
  encode: QueryFileNodeRequest.encode,
  decode: QueryFileNodeResponse.decode,
  service: "nebulix.filetree.v1.Query",
  method: "FileNode",
  deps: [QueryFileNodeRequest, QueryFileNodeResponse]
});
/**
 * FileTreePaths Queries a list of FileTreePaths items.
 * @name getFileTreePaths
 * @package nebulix.filetree.v1
 * @see proto service: nebulix.filetree.v1.FileTreePaths
 */
export const getFileTreePaths = buildQuery<QueryFileTreePathsRequest, QueryFileTreePathsResponse>({
  encode: QueryFileTreePathsRequest.encode,
  decode: QueryFileTreePathsResponse.decode,
  service: "nebulix.filetree.v1.Query",
  method: "FileTreePaths",
  deps: [QueryFileTreePathsRequest, QueryFileTreePathsResponse]
});
/**
 * FileNodeChildren Queries a list of FileNodeChildren items.
 * @name getFileNodeChildren
 * @package nebulix.filetree.v1
 * @see proto service: nebulix.filetree.v1.FileNodeChildren
 */
export const getFileNodeChildren = buildQuery<QueryFileNodeChildrenRequest, QueryFileNodeChildrenResponse>({
  encode: QueryFileNodeChildrenRequest.encode,
  decode: QueryFileNodeChildrenResponse.decode,
  service: "nebulix.filetree.v1.Query",
  method: "FileNodeChildren",
  deps: [QueryFileNodeChildrenRequest, QueryFileNodeChildrenResponse]
});