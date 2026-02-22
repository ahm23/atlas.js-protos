//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryProviderRequest, QueryProviderResponse, QueryProvidersRequest, QueryProvidersResponse, QueryFileRequest, QueryFileResponse, QueryFilesRequest, QueryFilesResponse, QuerySubscriptionRequest, QuerySubscriptionResponse, QuerySubscriptionsRequest, QuerySubscriptionsResponse, QueryChallengesRequest, QueryChallengesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Provider Queries a list of Provider items. */
  provider(request: QueryProviderRequest): Promise<QueryProviderResponse>;
  /** Providers Queries a list of Providers items. */
  providers(request?: QueryProvidersRequest): Promise<QueryProvidersResponse>;
  /** File Queries a list of File items. */
  file(request: QueryFileRequest): Promise<QueryFileResponse>;
  /** Files Queries a list of Files items. */
  files(request: QueryFilesRequest): Promise<QueryFilesResponse>;
  /** Subscription Queries a list of Subscription items. */
  subscription(request: QuerySubscriptionRequest): Promise<QuerySubscriptionResponse>;
  /** Subscriptions Queries a list of Subscriptions items. */
  subscriptions(request: QuerySubscriptionsRequest): Promise<QuerySubscriptionsResponse>;
  /** Challenges Queries a list of Challenges items. */
  challenges(request: QueryChallengesRequest): Promise<QueryChallengesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.provider = this.provider.bind(this);
    this.providers = this.providers.bind(this);
    this.file = this.file.bind(this);
    this.files = this.files.bind(this);
    this.subscription = this.subscription.bind(this);
    this.subscriptions = this.subscriptions.bind(this);
    this.challenges = this.challenges.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("nebulix.storage.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
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
  files(request: QueryFilesRequest): Promise<QueryFilesResponse> {
    const data = QueryFilesRequest.encode(request).finish();
    const promise = this.rpc.request("nebulix.storage.v1.Query", "Files", data);
    return promise.then(data => QueryFilesResponse.decode(new BinaryReader(data)));
  }
  subscription(request: QuerySubscriptionRequest): Promise<QuerySubscriptionResponse> {
    const data = QuerySubscriptionRequest.encode(request).finish();
    const promise = this.rpc.request("nebulix.storage.v1.Query", "Subscription", data);
    return promise.then(data => QuerySubscriptionResponse.decode(new BinaryReader(data)));
  }
  subscriptions(request: QuerySubscriptionsRequest): Promise<QuerySubscriptionsResponse> {
    const data = QuerySubscriptionsRequest.encode(request).finish();
    const promise = this.rpc.request("nebulix.storage.v1.Query", "Subscriptions", data);
    return promise.then(data => QuerySubscriptionsResponse.decode(new BinaryReader(data)));
  }
  challenges(request: QueryChallengesRequest): Promise<QueryChallengesResponse> {
    const data = QueryChallengesRequest.encode(request).finish();
    const promise = this.rpc.request("nebulix.storage.v1.Query", "Challenges", data);
    return promise.then(data => QueryChallengesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
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
    files(request: QueryFilesRequest): Promise<QueryFilesResponse> {
      return queryService.files(request);
    },
    subscription(request: QuerySubscriptionRequest): Promise<QuerySubscriptionResponse> {
      return queryService.subscription(request);
    },
    subscriptions(request: QuerySubscriptionsRequest): Promise<QuerySubscriptionsResponse> {
      return queryService.subscriptions(request);
    },
    challenges(request: QueryChallengesRequest): Promise<QueryChallengesResponse> {
      return queryService.challenges(request);
    }
  };
};