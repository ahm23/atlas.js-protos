//@ts-nocheck
import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryProviderRequest, QueryProviderResponse, QueryProvidersRequest, QueryProvidersResponse, QueryFileRequest, QueryFileResponse, QueryFilesRequest, QueryFilesResponse, QuerySubscriptionRequest, QuerySubscriptionResponse, QuerySubscriptionsRequest, QuerySubscriptionsResponse, QueryChallengesRequest, QueryChallengesResponse } from "./query";
/**
 * Parameters queries the parameters of the module.
 * @name getParams
 * @package nebulix.storage.v1
 * @see proto service: nebulix.storage.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "nebulix.storage.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * Provider Queries a list of Provider items.
 * @name getProvider
 * @package nebulix.storage.v1
 * @see proto service: nebulix.storage.v1.Provider
 */
export const getProvider = buildQuery<QueryProviderRequest, QueryProviderResponse>({
  encode: QueryProviderRequest.encode,
  decode: QueryProviderResponse.decode,
  service: "nebulix.storage.v1.Query",
  method: "Provider",
  deps: [QueryProviderRequest, QueryProviderResponse]
});
/**
 * Providers Queries a list of Providers items.
 * @name getProviders
 * @package nebulix.storage.v1
 * @see proto service: nebulix.storage.v1.Providers
 */
export const getProviders = buildQuery<QueryProvidersRequest, QueryProvidersResponse>({
  encode: QueryProvidersRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "nebulix.storage.v1.Query",
  method: "Providers",
  deps: [QueryProvidersRequest, QueryProvidersResponse]
});
/**
 * File Queries a list of File items.
 * @name getFile
 * @package nebulix.storage.v1
 * @see proto service: nebulix.storage.v1.File
 */
export const getFile = buildQuery<QueryFileRequest, QueryFileResponse>({
  encode: QueryFileRequest.encode,
  decode: QueryFileResponse.decode,
  service: "nebulix.storage.v1.Query",
  method: "File",
  deps: [QueryFileRequest, QueryFileResponse]
});
/**
 * Files Queries a list of Files items.
 * @name getFiles
 * @package nebulix.storage.v1
 * @see proto service: nebulix.storage.v1.Files
 */
export const getFiles = buildQuery<QueryFilesRequest, QueryFilesResponse>({
  encode: QueryFilesRequest.encode,
  decode: QueryFilesResponse.decode,
  service: "nebulix.storage.v1.Query",
  method: "Files",
  deps: [QueryFilesRequest, QueryFilesResponse]
});
/**
 * Subscription Queries a list of Subscription items.
 * @name getSubscription
 * @package nebulix.storage.v1
 * @see proto service: nebulix.storage.v1.Subscription
 */
export const getSubscription = buildQuery<QuerySubscriptionRequest, QuerySubscriptionResponse>({
  encode: QuerySubscriptionRequest.encode,
  decode: QuerySubscriptionResponse.decode,
  service: "nebulix.storage.v1.Query",
  method: "Subscription",
  deps: [QuerySubscriptionRequest, QuerySubscriptionResponse]
});
/**
 * Subscriptions Queries a list of Subscriptions items.
 * @name getSubscriptions
 * @package nebulix.storage.v1
 * @see proto service: nebulix.storage.v1.Subscriptions
 */
export const getSubscriptions = buildQuery<QuerySubscriptionsRequest, QuerySubscriptionsResponse>({
  encode: QuerySubscriptionsRequest.encode,
  decode: QuerySubscriptionsResponse.decode,
  service: "nebulix.storage.v1.Query",
  method: "Subscriptions",
  deps: [QuerySubscriptionsRequest, QuerySubscriptionsResponse]
});
/**
 * Challenges Queries a list of Challenges items.
 * @name getChallenges
 * @package nebulix.storage.v1
 * @see proto service: nebulix.storage.v1.Challenges
 */
export const getChallenges = buildQuery<QueryChallengesRequest, QueryChallengesResponse>({
  encode: QueryChallengesRequest.encode,
  decode: QueryChallengesResponse.decode,
  service: "nebulix.storage.v1.Query",
  method: "Challenges",
  deps: [QueryChallengesRequest, QueryChallengesResponse]
});