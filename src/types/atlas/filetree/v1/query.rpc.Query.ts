//@ts-nocheck
import { TxRpc } from "../../../types";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryTreeNodeRequest, QueryTreeNodeResponse, QueryFileTreePathsRequest, QueryFileTreePathsResponse, QueryTreeNodeChildrenRequest, QueryTreeNodeChildrenResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** TreeNode Queries a list of TreeNode items. */
  treeNode(request: QueryTreeNodeRequest): Promise<QueryTreeNodeResponse>;
  /** FileTreePaths Queries a list of FileTreePaths items. */
  fileTreePaths(request: QueryFileTreePathsRequest): Promise<QueryFileTreePathsResponse>;
  /** TreeNodeChildren Queries a list of TreeNodeChildren items. */
  treeNodeChildren(request: QueryTreeNodeChildrenRequest): Promise<QueryTreeNodeChildrenResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.treeNode = this.treeNode.bind(this);
    this.fileTreePaths = this.fileTreePaths.bind(this);
    this.treeNodeChildren = this.treeNodeChildren.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("atlas.filetree.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  treeNode(request: QueryTreeNodeRequest): Promise<QueryTreeNodeResponse> {
    const data = QueryTreeNodeRequest.encode(request).finish();
    const promise = this.rpc.request("atlas.filetree.v1.Query", "TreeNode", data);
    return promise.then(data => QueryTreeNodeResponse.decode(new _m0.Reader(data)));
  }
  fileTreePaths(request: QueryFileTreePathsRequest): Promise<QueryFileTreePathsResponse> {
    const data = QueryFileTreePathsRequest.encode(request).finish();
    const promise = this.rpc.request("atlas.filetree.v1.Query", "FileTreePaths", data);
    return promise.then(data => QueryFileTreePathsResponse.decode(new _m0.Reader(data)));
  }
  treeNodeChildren(request: QueryTreeNodeChildrenRequest): Promise<QueryTreeNodeChildrenResponse> {
    const data = QueryTreeNodeChildrenRequest.encode(request).finish();
    const promise = this.rpc.request("atlas.filetree.v1.Query", "TreeNodeChildren", data);
    return promise.then(data => QueryTreeNodeChildrenResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    treeNode(request: QueryTreeNodeRequest): Promise<QueryTreeNodeResponse> {
      return queryService.treeNode(request);
    },
    fileTreePaths(request: QueryFileTreePathsRequest): Promise<QueryFileTreePathsResponse> {
      return queryService.fileTreePaths(request);
    },
    treeNodeChildren(request: QueryTreeNodeChildrenRequest): Promise<QueryTreeNodeChildrenResponse> {
      return queryService.treeNodeChildren(request);
    }
  };
};