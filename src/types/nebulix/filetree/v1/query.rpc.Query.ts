//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryFileNodeRequest, QueryFileNodeResponse, QueryFileTreePathsRequest, QueryFileTreePathsResponse, QueryFileNodeChildrenRequest, QueryFileNodeChildrenResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** FileNode Queries a list of FileNode items. */
  fileNode(request: QueryFileNodeRequest): Promise<QueryFileNodeResponse>;
  /** FileTreePaths Queries a list of FileTreePaths items. */
  fileTreePaths(request: QueryFileTreePathsRequest): Promise<QueryFileTreePathsResponse>;
  /** FileNodeChildren Queries a list of FileNodeChildren items. */
  fileNodeChildren(request: QueryFileNodeChildrenRequest): Promise<QueryFileNodeChildrenResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.fileNode = this.fileNode.bind(this);
    this.fileTreePaths = this.fileTreePaths.bind(this);
    this.fileNodeChildren = this.fileNodeChildren.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("nebulix.filetree.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  fileNode(request: QueryFileNodeRequest): Promise<QueryFileNodeResponse> {
    const data = QueryFileNodeRequest.encode(request).finish();
    const promise = this.rpc.request("nebulix.filetree.v1.Query", "FileNode", data);
    return promise.then(data => QueryFileNodeResponse.decode(new BinaryReader(data)));
  }
  fileTreePaths(request: QueryFileTreePathsRequest): Promise<QueryFileTreePathsResponse> {
    const data = QueryFileTreePathsRequest.encode(request).finish();
    const promise = this.rpc.request("nebulix.filetree.v1.Query", "FileTreePaths", data);
    return promise.then(data => QueryFileTreePathsResponse.decode(new BinaryReader(data)));
  }
  fileNodeChildren(request: QueryFileNodeChildrenRequest): Promise<QueryFileNodeChildrenResponse> {
    const data = QueryFileNodeChildrenRequest.encode(request).finish();
    const promise = this.rpc.request("nebulix.filetree.v1.Query", "FileNodeChildren", data);
    return promise.then(data => QueryFileNodeChildrenResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    fileNode(request: QueryFileNodeRequest): Promise<QueryFileNodeResponse> {
      return queryService.fileNode(request);
    },
    fileTreePaths(request: QueryFileTreePathsRequest): Promise<QueryFileTreePathsResponse> {
      return queryService.fileTreePaths(request);
    },
    fileNodeChildren(request: QueryFileNodeChildrenRequest): Promise<QueryFileNodeChildrenResponse> {
      return queryService.fileNodeChildren(request);
    }
  };
};