import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetSubscriptionInfoRequest, QueryGetSubscriptionInfoResponse, QueryProviderRequest, QueryProviderResponse, QueryProvidersRequest, QueryProvidersResponse, QueryFileRequest, QueryFileResponse, QueryFilesRequest, QueryFilesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** GetSubscriptionInfo Queries a list of GetSubscriptionInfo items. */
  getSubscriptionInfo(request: QueryGetSubscriptionInfoRequest): Promise<QueryGetSubscriptionInfoResponse>;
  /** Provider Queries a list of Provider items. */
  provider(request: QueryProviderRequest): Promise<QueryProviderResponse>;
  /** Providers Queries a list of Providers items. */
  providers(request?: QueryProvidersRequest): Promise<QueryProvidersResponse>;
  /** File Queries a list of File items. */
  file(request: QueryFileRequest): Promise<QueryFileResponse>;
  /** Files Queries a list of Files items. */
  files(request?: QueryFilesRequest): Promise<QueryFilesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.getSubscriptionInfo = this.getSubscriptionInfo.bind(this);
    this.provider = this.provider.bind(this);
    this.providers = this.providers.bind(this);
    this.file = this.file.bind(this);
    this.files = this.files.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("nebulix.storage.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  getSubscriptionInfo(request: QueryGetSubscriptionInfoRequest): Promise<QueryGetSubscriptionInfoResponse> {
    const data = QueryGetSubscriptionInfoRequest.encode(request).finish();
    const promise = this.rpc.request("nebulix.storage.v1.Query", "GetSubscriptionInfo", data);
    return promise.then(data => QueryGetSubscriptionInfoResponse.decode(new BinaryReader(data)));
  }
  provider(request: QueryProviderRequest): Promise<QueryProviderResponse> {
    const data = QueryProviderRequest.encode(request).finish();
    const promise = this.rpc.request("nebulix.storage.v1.Query", "Provider", data);
    return promise.then(data => QueryProviderResponse.decode(new BinaryReader(data)));
  }
  providers(request: QueryProvidersRequest = {}): Promise<QueryProvidersResponse> {
    const data = QueryProvidersRequest.encode(request).finish();
    const promise = this.rpc.request("nebulix.storage.v1.Query", "Providers", data);
    return promise.then(data => QueryProvidersResponse.decode(new BinaryReader(data)));
  }
  file(request: QueryFileRequest): Promise<QueryFileResponse> {
    const data = QueryFileRequest.encode(request).finish();
    const promise = this.rpc.request("nebulix.storage.v1.Query", "File", data);
    return promise.then(data => QueryFileResponse.decode(new BinaryReader(data)));
  }
  files(request: QueryFilesRequest = {
    pagination: undefined
  }): Promise<QueryFilesResponse> {
    const data = QueryFilesRequest.encode(request).finish();
    const promise = this.rpc.request("nebulix.storage.v1.Query", "Files", data);
    return promise.then(data => QueryFilesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    getSubscriptionInfo(request: QueryGetSubscriptionInfoRequest): Promise<QueryGetSubscriptionInfoResponse> {
      return queryService.getSubscriptionInfo(request);
    },
    provider(request: QueryProviderRequest): Promise<QueryProviderResponse> {
      return queryService.provider(request);
    },
    providers(request?: QueryProvidersRequest): Promise<QueryProvidersResponse> {
      return queryService.providers(request);
    },
    file(request: QueryFileRequest): Promise<QueryFileResponse> {
      return queryService.file(request);
    },
    files(request?: QueryFilesRequest): Promise<QueryFilesResponse> {
      return queryService.files(request);
    }
  };
};