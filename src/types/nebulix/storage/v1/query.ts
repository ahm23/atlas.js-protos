//@ts-nocheck
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Provider, ProviderSDKType } from "./provider";
import { File, FileSDKType } from "./file";
import { StorageSubscription, StorageSubscriptionSDKType } from "./subscription";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestSDKType
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryParamsRequest
 */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseSDKType
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryParamsResponse
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryProviderRequest defines the QueryProviderRequest message.
 * @name QueryProviderRequest
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryProviderRequest
 */
export interface QueryProviderRequest {
  address: string;
}
export interface QueryProviderRequestProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryProviderRequest";
  value: Uint8Array;
}
/**
 * QueryProviderRequest defines the QueryProviderRequest message.
 * @name QueryProviderRequestSDKType
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryProviderRequest
 */
export interface QueryProviderRequestSDKType {
  address: string;
}
/**
 * QueryProviderResponse defines the QueryProviderResponse message.
 * @name QueryProviderResponse
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryProviderResponse
 */
export interface QueryProviderResponse {
  provider?: Provider;
}
export interface QueryProviderResponseProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryProviderResponse";
  value: Uint8Array;
}
/**
 * QueryProviderResponse defines the QueryProviderResponse message.
 * @name QueryProviderResponseSDKType
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryProviderResponse
 */
export interface QueryProviderResponseSDKType {
  provider?: ProviderSDKType;
}
/**
 * QueryProvidersRequest defines the QueryProvidersRequest message.
 * @name QueryProvidersRequest
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryProvidersRequest
 */
export interface QueryProvidersRequest {}
export interface QueryProvidersRequestProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryProvidersRequest";
  value: Uint8Array;
}
/**
 * QueryProvidersRequest defines the QueryProvidersRequest message.
 * @name QueryProvidersRequestSDKType
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryProvidersRequest
 */
export interface QueryProvidersRequestSDKType {}
/**
 * QueryProvidersResponse defines the QueryProvidersResponse message.
 * @name QueryProvidersResponse
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryProvidersResponse
 */
export interface QueryProvidersResponse {
  providers: Provider[];
}
export interface QueryProvidersResponseProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryProvidersResponse";
  value: Uint8Array;
}
/**
 * QueryProvidersResponse defines the QueryProvidersResponse message.
 * @name QueryProvidersResponseSDKType
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryProvidersResponse
 */
export interface QueryProvidersResponseSDKType {
  providers: ProviderSDKType[];
}
/**
 * QueryFileRequest defines the QueryFileRequest message.
 * @name QueryFileRequest
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryFileRequest
 */
export interface QueryFileRequest {
  fid: string;
}
export interface QueryFileRequestProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryFileRequest";
  value: Uint8Array;
}
/**
 * QueryFileRequest defines the QueryFileRequest message.
 * @name QueryFileRequestSDKType
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryFileRequest
 */
export interface QueryFileRequestSDKType {
  fid: string;
}
/**
 * QueryFileResponse defines the QueryFileResponse message.
 * @name QueryFileResponse
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryFileResponse
 */
export interface QueryFileResponse {
  file?: File;
}
export interface QueryFileResponseProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryFileResponse";
  value: Uint8Array;
}
/**
 * QueryFileResponse defines the QueryFileResponse message.
 * @name QueryFileResponseSDKType
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryFileResponse
 */
export interface QueryFileResponseSDKType {
  file?: FileSDKType;
}
/**
 * QueryFilesRequest defines the QueryFilesRequest message.
 * @name QueryFilesRequest
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryFilesRequest
 */
export interface QueryFilesRequest {
  creator: string;
  subscription: string;
  pagination?: PageRequest;
}
export interface QueryFilesRequestProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryFilesRequest";
  value: Uint8Array;
}
/**
 * QueryFilesRequest defines the QueryFilesRequest message.
 * @name QueryFilesRequestSDKType
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryFilesRequest
 */
export interface QueryFilesRequestSDKType {
  creator: string;
  subscription: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryFilesResponse defines the QueryFilesResponse message.
 * @name QueryFilesResponse
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryFilesResponse
 */
export interface QueryFilesResponse {
  files: File[];
  pagination?: PageResponse;
}
export interface QueryFilesResponseProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryFilesResponse";
  value: Uint8Array;
}
/**
 * QueryFilesResponse defines the QueryFilesResponse message.
 * @name QueryFilesResponseSDKType
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryFilesResponse
 */
export interface QueryFilesResponseSDKType {
  files: FileSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QuerySubscriptionRequest defines the QuerySubscriptionRequest message.
 * @name QuerySubscriptionRequest
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QuerySubscriptionRequest
 */
export interface QuerySubscriptionRequest {
  subscriberAddress: string;
  subscriptionId: string;
}
export interface QuerySubscriptionRequestProtoMsg {
  typeUrl: "/nebulix.storage.v1.QuerySubscriptionRequest";
  value: Uint8Array;
}
/**
 * QuerySubscriptionRequest defines the QuerySubscriptionRequest message.
 * @name QuerySubscriptionRequestSDKType
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QuerySubscriptionRequest
 */
export interface QuerySubscriptionRequestSDKType {
  subscriber_address: string;
  subscription_id: string;
}
/**
 * QuerySubscriptionResponse defines the QuerySubscriptionResponse message.
 * @name QuerySubscriptionResponse
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QuerySubscriptionResponse
 */
export interface QuerySubscriptionResponse {
  subscription?: StorageSubscription;
}
export interface QuerySubscriptionResponseProtoMsg {
  typeUrl: "/nebulix.storage.v1.QuerySubscriptionResponse";
  value: Uint8Array;
}
/**
 * QuerySubscriptionResponse defines the QuerySubscriptionResponse message.
 * @name QuerySubscriptionResponseSDKType
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QuerySubscriptionResponse
 */
export interface QuerySubscriptionResponseSDKType {
  subscription?: StorageSubscriptionSDKType;
}
/**
 * QuerySubscriptionsRequest defines the QuerySubscriptionsRequest message.
 * @name QuerySubscriptionsRequest
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QuerySubscriptionsRequest
 */
export interface QuerySubscriptionsRequest {
  subscriberAddress: string;
  pagination?: PageRequest;
}
export interface QuerySubscriptionsRequestProtoMsg {
  typeUrl: "/nebulix.storage.v1.QuerySubscriptionsRequest";
  value: Uint8Array;
}
/**
 * QuerySubscriptionsRequest defines the QuerySubscriptionsRequest message.
 * @name QuerySubscriptionsRequestSDKType
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QuerySubscriptionsRequest
 */
export interface QuerySubscriptionsRequestSDKType {
  subscriber_address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QuerySubscriptionsResponse defines the QuerySubscriptionsResponse message.
 * @name QuerySubscriptionsResponse
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QuerySubscriptionsResponse
 */
export interface QuerySubscriptionsResponse {
  subscriptions: StorageSubscription[];
  pagination?: PageResponse;
}
export interface QuerySubscriptionsResponseProtoMsg {
  typeUrl: "/nebulix.storage.v1.QuerySubscriptionsResponse";
  value: Uint8Array;
}
/**
 * QuerySubscriptionsResponse defines the QuerySubscriptionsResponse message.
 * @name QuerySubscriptionsResponseSDKType
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QuerySubscriptionsResponse
 */
export interface QuerySubscriptionsResponseSDKType {
  subscriptions: StorageSubscriptionSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/nebulix.storage.v1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/nebulix.storage.v1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryParamsResponse.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryProviderRequest(): QueryProviderRequest {
  return {
    address: ""
  };
}
/**
 * QueryProviderRequest defines the QueryProviderRequest message.
 * @name QueryProviderRequest
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryProviderRequest
 */
export const QueryProviderRequest = {
  typeUrl: "/nebulix.storage.v1.QueryProviderRequest",
  is(o: any): o is QueryProviderRequest {
    return o && (o.$typeUrl === QueryProviderRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryProviderRequestSDKType {
    return o && (o.$typeUrl === QueryProviderRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryProviderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryProviderRequest>): QueryProviderRequest {
    const message = createBaseQueryProviderRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromProtoMsg(message: QueryProviderRequestProtoMsg): QueryProviderRequest {
    return QueryProviderRequest.decode(message.value);
  },
  toProto(message: QueryProviderRequest): Uint8Array {
    return QueryProviderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderRequest): QueryProviderRequestProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.QueryProviderRequest",
      value: QueryProviderRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(QueryProviderRequest.typeUrl, QueryProviderRequest);
function createBaseQueryProviderResponse(): QueryProviderResponse {
  return {
    provider: undefined
  };
}
/**
 * QueryProviderResponse defines the QueryProviderResponse message.
 * @name QueryProviderResponse
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryProviderResponse
 */
export const QueryProviderResponse = {
  typeUrl: "/nebulix.storage.v1.QueryProviderResponse",
  is(o: any): o is QueryProviderResponse {
    return o && o.$typeUrl === QueryProviderResponse.typeUrl;
  },
  isSDK(o: any): o is QueryProviderResponseSDKType {
    return o && o.$typeUrl === QueryProviderResponse.typeUrl;
  },
  encode(message: QueryProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== undefined) {
      Provider.encode(message.provider, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = Provider.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryProviderResponse>): QueryProviderResponse {
    const message = createBaseQueryProviderResponse();
    message.provider = object.provider !== undefined && object.provider !== null ? Provider.fromPartial(object.provider) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryProviderResponseProtoMsg): QueryProviderResponse {
    return QueryProviderResponse.decode(message.value);
  },
  toProto(message: QueryProviderResponse): Uint8Array {
    return QueryProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderResponse): QueryProviderResponseProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.QueryProviderResponse",
      value: QueryProviderResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryProviderResponse.typeUrl)) {
      return;
    }
    Provider.registerTypeUrl();
  }
};
GlobalDecoderRegistry.register(QueryProviderResponse.typeUrl, QueryProviderResponse);
function createBaseQueryProvidersRequest(): QueryProvidersRequest {
  return {};
}
/**
 * QueryProvidersRequest defines the QueryProvidersRequest message.
 * @name QueryProvidersRequest
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryProvidersRequest
 */
export const QueryProvidersRequest = {
  typeUrl: "/nebulix.storage.v1.QueryProvidersRequest",
  is(o: any): o is QueryProvidersRequest {
    return o && o.$typeUrl === QueryProvidersRequest.typeUrl;
  },
  isSDK(o: any): o is QueryProvidersRequestSDKType {
    return o && o.$typeUrl === QueryProvidersRequest.typeUrl;
  },
  encode(_: QueryProvidersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProvidersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProvidersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryProvidersRequest>): QueryProvidersRequest {
    const message = createBaseQueryProvidersRequest();
    return message;
  },
  fromProtoMsg(message: QueryProvidersRequestProtoMsg): QueryProvidersRequest {
    return QueryProvidersRequest.decode(message.value);
  },
  toProto(message: QueryProvidersRequest): Uint8Array {
    return QueryProvidersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProvidersRequest): QueryProvidersRequestProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.QueryProvidersRequest",
      value: QueryProvidersRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(QueryProvidersRequest.typeUrl, QueryProvidersRequest);
function createBaseQueryProvidersResponse(): QueryProvidersResponse {
  return {
    providers: []
  };
}
/**
 * QueryProvidersResponse defines the QueryProvidersResponse message.
 * @name QueryProvidersResponse
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryProvidersResponse
 */
export const QueryProvidersResponse = {
  typeUrl: "/nebulix.storage.v1.QueryProvidersResponse",
  is(o: any): o is QueryProvidersResponse {
    return o && (o.$typeUrl === QueryProvidersResponse.typeUrl || Array.isArray(o.providers) && (!o.providers.length || Provider.is(o.providers[0])));
  },
  isSDK(o: any): o is QueryProvidersResponseSDKType {
    return o && (o.$typeUrl === QueryProvidersResponse.typeUrl || Array.isArray(o.providers) && (!o.providers.length || Provider.isSDK(o.providers[0])));
  },
  encode(message: QueryProvidersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.providers) {
      Provider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProvidersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProvidersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(Provider.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryProvidersResponse>): QueryProvidersResponse {
    const message = createBaseQueryProvidersResponse();
    message.providers = object.providers?.map(e => Provider.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: QueryProvidersResponseProtoMsg): QueryProvidersResponse {
    return QueryProvidersResponse.decode(message.value);
  },
  toProto(message: QueryProvidersResponse): Uint8Array {
    return QueryProvidersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProvidersResponse): QueryProvidersResponseProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.QueryProvidersResponse",
      value: QueryProvidersResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryProvidersResponse.typeUrl)) {
      return;
    }
    Provider.registerTypeUrl();
  }
};
GlobalDecoderRegistry.register(QueryProvidersResponse.typeUrl, QueryProvidersResponse);
function createBaseQueryFileRequest(): QueryFileRequest {
  return {
    fid: ""
  };
}
/**
 * QueryFileRequest defines the QueryFileRequest message.
 * @name QueryFileRequest
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryFileRequest
 */
export const QueryFileRequest = {
  typeUrl: "/nebulix.storage.v1.QueryFileRequest",
  is(o: any): o is QueryFileRequest {
    return o && (o.$typeUrl === QueryFileRequest.typeUrl || typeof o.fid === "string");
  },
  isSDK(o: any): o is QueryFileRequestSDKType {
    return o && (o.$typeUrl === QueryFileRequest.typeUrl || typeof o.fid === "string");
  },
  encode(message: QueryFileRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fid !== "") {
      writer.uint32(10).string(message.fid);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFileRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFileRequest>): QueryFileRequest {
    const message = createBaseQueryFileRequest();
    message.fid = object.fid ?? "";
    return message;
  },
  fromProtoMsg(message: QueryFileRequestProtoMsg): QueryFileRequest {
    return QueryFileRequest.decode(message.value);
  },
  toProto(message: QueryFileRequest): Uint8Array {
    return QueryFileRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFileRequest): QueryFileRequestProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.QueryFileRequest",
      value: QueryFileRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(QueryFileRequest.typeUrl, QueryFileRequest);
function createBaseQueryFileResponse(): QueryFileResponse {
  return {
    file: undefined
  };
}
/**
 * QueryFileResponse defines the QueryFileResponse message.
 * @name QueryFileResponse
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryFileResponse
 */
export const QueryFileResponse = {
  typeUrl: "/nebulix.storage.v1.QueryFileResponse",
  is(o: any): o is QueryFileResponse {
    return o && o.$typeUrl === QueryFileResponse.typeUrl;
  },
  isSDK(o: any): o is QueryFileResponseSDKType {
    return o && o.$typeUrl === QueryFileResponse.typeUrl;
  },
  encode(message: QueryFileResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.file !== undefined) {
      File.encode(message.file, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFileResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file = File.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFileResponse>): QueryFileResponse {
    const message = createBaseQueryFileResponse();
    message.file = object.file !== undefined && object.file !== null ? File.fromPartial(object.file) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryFileResponseProtoMsg): QueryFileResponse {
    return QueryFileResponse.decode(message.value);
  },
  toProto(message: QueryFileResponse): Uint8Array {
    return QueryFileResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFileResponse): QueryFileResponseProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.QueryFileResponse",
      value: QueryFileResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryFileResponse.typeUrl)) {
      return;
    }
    File.registerTypeUrl();
  }
};
GlobalDecoderRegistry.register(QueryFileResponse.typeUrl, QueryFileResponse);
function createBaseQueryFilesRequest(): QueryFilesRequest {
  return {
    creator: "",
    subscription: "",
    pagination: undefined
  };
}
/**
 * QueryFilesRequest defines the QueryFilesRequest message.
 * @name QueryFilesRequest
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryFilesRequest
 */
export const QueryFilesRequest = {
  typeUrl: "/nebulix.storage.v1.QueryFilesRequest",
  is(o: any): o is QueryFilesRequest {
    return o && (o.$typeUrl === QueryFilesRequest.typeUrl || typeof o.creator === "string" && typeof o.subscription === "string");
  },
  isSDK(o: any): o is QueryFilesRequestSDKType {
    return o && (o.$typeUrl === QueryFilesRequest.typeUrl || typeof o.creator === "string" && typeof o.subscription === "string");
  },
  encode(message: QueryFilesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.subscription !== "") {
      writer.uint32(18).string(message.subscription);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFilesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFilesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.subscription = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFilesRequest>): QueryFilesRequest {
    const message = createBaseQueryFilesRequest();
    message.creator = object.creator ?? "";
    message.subscription = object.subscription ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryFilesRequestProtoMsg): QueryFilesRequest {
    return QueryFilesRequest.decode(message.value);
  },
  toProto(message: QueryFilesRequest): Uint8Array {
    return QueryFilesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFilesRequest): QueryFilesRequestProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.QueryFilesRequest",
      value: QueryFilesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryFilesRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
GlobalDecoderRegistry.register(QueryFilesRequest.typeUrl, QueryFilesRequest);
function createBaseQueryFilesResponse(): QueryFilesResponse {
  return {
    files: [],
    pagination: undefined
  };
}
/**
 * QueryFilesResponse defines the QueryFilesResponse message.
 * @name QueryFilesResponse
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryFilesResponse
 */
export const QueryFilesResponse = {
  typeUrl: "/nebulix.storage.v1.QueryFilesResponse",
  is(o: any): o is QueryFilesResponse {
    return o && (o.$typeUrl === QueryFilesResponse.typeUrl || Array.isArray(o.files) && (!o.files.length || File.is(o.files[0])));
  },
  isSDK(o: any): o is QueryFilesResponseSDKType {
    return o && (o.$typeUrl === QueryFilesResponse.typeUrl || Array.isArray(o.files) && (!o.files.length || File.isSDK(o.files[0])));
  },
  encode(message: QueryFilesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.files) {
      File.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFilesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFilesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.files.push(File.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFilesResponse>): QueryFilesResponse {
    const message = createBaseQueryFilesResponse();
    message.files = object.files?.map(e => File.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryFilesResponseProtoMsg): QueryFilesResponse {
    return QueryFilesResponse.decode(message.value);
  },
  toProto(message: QueryFilesResponse): Uint8Array {
    return QueryFilesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFilesResponse): QueryFilesResponseProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.QueryFilesResponse",
      value: QueryFilesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryFilesResponse.typeUrl)) {
      return;
    }
    File.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
GlobalDecoderRegistry.register(QueryFilesResponse.typeUrl, QueryFilesResponse);
function createBaseQuerySubscriptionRequest(): QuerySubscriptionRequest {
  return {
    subscriberAddress: "",
    subscriptionId: ""
  };
}
/**
 * QuerySubscriptionRequest defines the QuerySubscriptionRequest message.
 * @name QuerySubscriptionRequest
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QuerySubscriptionRequest
 */
export const QuerySubscriptionRequest = {
  typeUrl: "/nebulix.storage.v1.QuerySubscriptionRequest",
  is(o: any): o is QuerySubscriptionRequest {
    return o && (o.$typeUrl === QuerySubscriptionRequest.typeUrl || typeof o.subscriberAddress === "string" && typeof o.subscriptionId === "string");
  },
  isSDK(o: any): o is QuerySubscriptionRequestSDKType {
    return o && (o.$typeUrl === QuerySubscriptionRequest.typeUrl || typeof o.subscriber_address === "string" && typeof o.subscription_id === "string");
  },
  encode(message: QuerySubscriptionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriberAddress !== "") {
      writer.uint32(10).string(message.subscriberAddress);
    }
    if (message.subscriptionId !== "") {
      writer.uint32(18).string(message.subscriptionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubscriptionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscriptionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriberAddress = reader.string();
          break;
        case 2:
          message.subscriptionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySubscriptionRequest>): QuerySubscriptionRequest {
    const message = createBaseQuerySubscriptionRequest();
    message.subscriberAddress = object.subscriberAddress ?? "";
    message.subscriptionId = object.subscriptionId ?? "";
    return message;
  },
  fromProtoMsg(message: QuerySubscriptionRequestProtoMsg): QuerySubscriptionRequest {
    return QuerySubscriptionRequest.decode(message.value);
  },
  toProto(message: QuerySubscriptionRequest): Uint8Array {
    return QuerySubscriptionRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriptionRequest): QuerySubscriptionRequestProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.QuerySubscriptionRequest",
      value: QuerySubscriptionRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(QuerySubscriptionRequest.typeUrl, QuerySubscriptionRequest);
function createBaseQuerySubscriptionResponse(): QuerySubscriptionResponse {
  return {
    subscription: undefined
  };
}
/**
 * QuerySubscriptionResponse defines the QuerySubscriptionResponse message.
 * @name QuerySubscriptionResponse
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QuerySubscriptionResponse
 */
export const QuerySubscriptionResponse = {
  typeUrl: "/nebulix.storage.v1.QuerySubscriptionResponse",
  is(o: any): o is QuerySubscriptionResponse {
    return o && o.$typeUrl === QuerySubscriptionResponse.typeUrl;
  },
  isSDK(o: any): o is QuerySubscriptionResponseSDKType {
    return o && o.$typeUrl === QuerySubscriptionResponse.typeUrl;
  },
  encode(message: QuerySubscriptionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscription !== undefined) {
      StorageSubscription.encode(message.subscription, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubscriptionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscriptionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscription = StorageSubscription.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySubscriptionResponse>): QuerySubscriptionResponse {
    const message = createBaseQuerySubscriptionResponse();
    message.subscription = object.subscription !== undefined && object.subscription !== null ? StorageSubscription.fromPartial(object.subscription) : undefined;
    return message;
  },
  fromProtoMsg(message: QuerySubscriptionResponseProtoMsg): QuerySubscriptionResponse {
    return QuerySubscriptionResponse.decode(message.value);
  },
  toProto(message: QuerySubscriptionResponse): Uint8Array {
    return QuerySubscriptionResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriptionResponse): QuerySubscriptionResponseProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.QuerySubscriptionResponse",
      value: QuerySubscriptionResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QuerySubscriptionResponse.typeUrl)) {
      return;
    }
    StorageSubscription.registerTypeUrl();
  }
};
GlobalDecoderRegistry.register(QuerySubscriptionResponse.typeUrl, QuerySubscriptionResponse);
function createBaseQuerySubscriptionsRequest(): QuerySubscriptionsRequest {
  return {
    subscriberAddress: "",
    pagination: undefined
  };
}
/**
 * QuerySubscriptionsRequest defines the QuerySubscriptionsRequest message.
 * @name QuerySubscriptionsRequest
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QuerySubscriptionsRequest
 */
export const QuerySubscriptionsRequest = {
  typeUrl: "/nebulix.storage.v1.QuerySubscriptionsRequest",
  is(o: any): o is QuerySubscriptionsRequest {
    return o && (o.$typeUrl === QuerySubscriptionsRequest.typeUrl || typeof o.subscriberAddress === "string");
  },
  isSDK(o: any): o is QuerySubscriptionsRequestSDKType {
    return o && (o.$typeUrl === QuerySubscriptionsRequest.typeUrl || typeof o.subscriber_address === "string");
  },
  encode(message: QuerySubscriptionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriberAddress !== "") {
      writer.uint32(10).string(message.subscriberAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubscriptionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscriptionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriberAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySubscriptionsRequest>): QuerySubscriptionsRequest {
    const message = createBaseQuerySubscriptionsRequest();
    message.subscriberAddress = object.subscriberAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QuerySubscriptionsRequestProtoMsg): QuerySubscriptionsRequest {
    return QuerySubscriptionsRequest.decode(message.value);
  },
  toProto(message: QuerySubscriptionsRequest): Uint8Array {
    return QuerySubscriptionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriptionsRequest): QuerySubscriptionsRequestProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.QuerySubscriptionsRequest",
      value: QuerySubscriptionsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QuerySubscriptionsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
GlobalDecoderRegistry.register(QuerySubscriptionsRequest.typeUrl, QuerySubscriptionsRequest);
function createBaseQuerySubscriptionsResponse(): QuerySubscriptionsResponse {
  return {
    subscriptions: [],
    pagination: undefined
  };
}
/**
 * QuerySubscriptionsResponse defines the QuerySubscriptionsResponse message.
 * @name QuerySubscriptionsResponse
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QuerySubscriptionsResponse
 */
export const QuerySubscriptionsResponse = {
  typeUrl: "/nebulix.storage.v1.QuerySubscriptionsResponse",
  is(o: any): o is QuerySubscriptionsResponse {
    return o && (o.$typeUrl === QuerySubscriptionsResponse.typeUrl || Array.isArray(o.subscriptions) && (!o.subscriptions.length || StorageSubscription.is(o.subscriptions[0])));
  },
  isSDK(o: any): o is QuerySubscriptionsResponseSDKType {
    return o && (o.$typeUrl === QuerySubscriptionsResponse.typeUrl || Array.isArray(o.subscriptions) && (!o.subscriptions.length || StorageSubscription.isSDK(o.subscriptions[0])));
  },
  encode(message: QuerySubscriptionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subscriptions) {
      StorageSubscription.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubscriptionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscriptionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptions.push(StorageSubscription.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySubscriptionsResponse>): QuerySubscriptionsResponse {
    const message = createBaseQuerySubscriptionsResponse();
    message.subscriptions = object.subscriptions?.map(e => StorageSubscription.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromProtoMsg(message: QuerySubscriptionsResponseProtoMsg): QuerySubscriptionsResponse {
    return QuerySubscriptionsResponse.decode(message.value);
  },
  toProto(message: QuerySubscriptionsResponse): Uint8Array {
    return QuerySubscriptionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriptionsResponse): QuerySubscriptionsResponseProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.QuerySubscriptionsResponse",
      value: QuerySubscriptionsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QuerySubscriptionsResponse.typeUrl)) {
      return;
    }
    StorageSubscription.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
GlobalDecoderRegistry.register(QuerySubscriptionsResponse.typeUrl, QuerySubscriptionsResponse);