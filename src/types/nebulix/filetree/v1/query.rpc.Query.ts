//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryFileTreeNodeRequest, QueryFileTreeNodeResponse, QueryFileTreePathsRequest, QueryFileTreePathsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** FileTreeNode Queries a list of FileTreeNode items. */
  fileTreeNode(request: QueryFileTreeNodeRequest): Promise<QueryFileTreeNodeResponse>;
  /** FileTreePaths Queries a list of FileTreePaths items. */
  fileTreePaths(request: QueryFileTreePathsRequest): Promise<QueryFileTreePathsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.fileTreeNode = this.fileTreeNode.bind(this);
    this.fileTreePaths = this.fileTreePaths.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("nebulix.filetree.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  fileTreeNode(request: QueryFileTreeNodeRequest): Promise<QueryFileTreeNodeResponse> {
    const data = QueryFileTreeNodeRequest.encode(request).finish();
    const promise = this.rpc.request("nebulix.filetree.v1.Query", "FileTreeNode", data);
    return promise.then(data => QueryFileTreeNodeResponse.decode(new BinaryReader(data)));
  }
  fileTreePaths(request: QueryFileTreePathsRequest): Promise<QueryFileTreePathsResponse> {
    const data = QueryFileTreePathsRequest.encode(request).finish();
    const promise = this.rpc.request("nebulix.filetree.v1.Query", "FileTreePaths", data);
    return promise.then(data => QueryFileTreePathsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    fileTreeNode(request: QueryFileTreeNodeRequest): Promise<QueryFileTreeNodeResponse> {
      return queryService.fileTreeNode(request);
    },
    fileTreePaths(request: QueryFileTreePathsRequest): Promise<QueryFileTreePathsResponse> {
      return queryService.fileTreePaths(request);
    }
  };
};