import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { StorageSubscription, StorageSubscriptionAmino, StorageSubscriptionSDKType } from "./subscription";
import { Provider, ProviderAmino, ProviderSDKType } from "./provider";
import { File, FileAmino, FileSDKType } from "./file";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/nebulix.storage.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/nebulix.storage.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryGetSubscriptionInfoRequest defines the QueryGetSubscriptionInfoRequest message. */
export interface QueryGetSubscriptionInfoRequest {
  subscriberAddress: string;
  subscriptionId: string;
}
export interface QueryGetSubscriptionInfoRequestProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryGetSubscriptionInfoRequest";
  value: Uint8Array;
}
/**
 * QueryGetSubscriptionInfoRequest defines the QueryGetSubscriptionInfoRequest message.
 * @name QueryGetSubscriptionInfoRequestAmino
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryGetSubscriptionInfoRequest
 */
export interface QueryGetSubscriptionInfoRequestAmino {
  subscriber_address?: string;
  subscription_id?: string;
}
export interface QueryGetSubscriptionInfoRequestAminoMsg {
  type: "/nebulix.storage.v1.QueryGetSubscriptionInfoRequest";
  value: QueryGetSubscriptionInfoRequestAmino;
}
/** QueryGetSubscriptionInfoRequest defines the QueryGetSubscriptionInfoRequest message. */
export interface QueryGetSubscriptionInfoRequestSDKType {
  subscriber_address: string;
  subscription_id: string;
}
/** QueryGetSubscriptionInfoResponse defines the QueryGetSubscriptionInfoResponse message. */
export interface QueryGetSubscriptionInfoResponse {
  subscription?: StorageSubscription;
}
export interface QueryGetSubscriptionInfoResponseProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryGetSubscriptionInfoResponse";
  value: Uint8Array;
}
/**
 * QueryGetSubscriptionInfoResponse defines the QueryGetSubscriptionInfoResponse message.
 * @name QueryGetSubscriptionInfoResponseAmino
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryGetSubscriptionInfoResponse
 */
export interface QueryGetSubscriptionInfoResponseAmino {
  subscription?: StorageSubscriptionAmino;
}
export interface QueryGetSubscriptionInfoResponseAminoMsg {
  type: "/nebulix.storage.v1.QueryGetSubscriptionInfoResponse";
  value: QueryGetSubscriptionInfoResponseAmino;
}
/** QueryGetSubscriptionInfoResponse defines the QueryGetSubscriptionInfoResponse message. */
export interface QueryGetSubscriptionInfoResponseSDKType {
  subscription?: StorageSubscriptionSDKType;
}
/** QueryProviderRequest defines the QueryProviderRequest message. */
export interface QueryProviderRequest {
  address: string;
}
export interface QueryProviderRequestProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryProviderRequest";
  value: Uint8Array;
}
/**
 * QueryProviderRequest defines the QueryProviderRequest message.
 * @name QueryProviderRequestAmino
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryProviderRequest
 */
export interface QueryProviderRequestAmino {
  address?: string;
}
export interface QueryProviderRequestAminoMsg {
  type: "/nebulix.storage.v1.QueryProviderRequest";
  value: QueryProviderRequestAmino;
}
/** QueryProviderRequest defines the QueryProviderRequest message. */
export interface QueryProviderRequestSDKType {
  address: string;
}
/** QueryProviderResponse defines the QueryProviderResponse message. */
export interface QueryProviderResponse {
  provider?: Provider;
}
export interface QueryProviderResponseProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryProviderResponse";
  value: Uint8Array;
}
/**
 * QueryProviderResponse defines the QueryProviderResponse message.
 * @name QueryProviderResponseAmino
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryProviderResponse
 */
export interface QueryProviderResponseAmino {
  provider?: ProviderAmino;
}
export interface QueryProviderResponseAminoMsg {
  type: "/nebulix.storage.v1.QueryProviderResponse";
  value: QueryProviderResponseAmino;
}
/** QueryProviderResponse defines the QueryProviderResponse message. */
export interface QueryProviderResponseSDKType {
  provider?: ProviderSDKType;
}
/** QueryProvidersRequest defines the QueryProvidersRequest message. */
export interface QueryProvidersRequest {}
export interface QueryProvidersRequestProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryProvidersRequest";
  value: Uint8Array;
}
/**
 * QueryProvidersRequest defines the QueryProvidersRequest message.
 * @name QueryProvidersRequestAmino
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryProvidersRequest
 */
export interface QueryProvidersRequestAmino {}
export interface QueryProvidersRequestAminoMsg {
  type: "/nebulix.storage.v1.QueryProvidersRequest";
  value: QueryProvidersRequestAmino;
}
/** QueryProvidersRequest defines the QueryProvidersRequest message. */
export interface QueryProvidersRequestSDKType {}
/** QueryProvidersResponse defines the QueryProvidersResponse message. */
export interface QueryProvidersResponse {
  providers: Provider[];
}
export interface QueryProvidersResponseProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryProvidersResponse";
  value: Uint8Array;
}
/**
 * QueryProvidersResponse defines the QueryProvidersResponse message.
 * @name QueryProvidersResponseAmino
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryProvidersResponse
 */
export interface QueryProvidersResponseAmino {
  providers?: ProviderAmino[];
}
export interface QueryProvidersResponseAminoMsg {
  type: "/nebulix.storage.v1.QueryProvidersResponse";
  value: QueryProvidersResponseAmino;
}
/** QueryProvidersResponse defines the QueryProvidersResponse message. */
export interface QueryProvidersResponseSDKType {
  providers: ProviderSDKType[];
}
/** QueryFileRequest defines the QueryFileRequest message. */
export interface QueryFileRequest {
  fid: string;
}
export interface QueryFileRequestProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryFileRequest";
  value: Uint8Array;
}
/**
 * QueryFileRequest defines the QueryFileRequest message.
 * @name QueryFileRequestAmino
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryFileRequest
 */
export interface QueryFileRequestAmino {
  fid?: string;
}
export interface QueryFileRequestAminoMsg {
  type: "/nebulix.storage.v1.QueryFileRequest";
  value: QueryFileRequestAmino;
}
/** QueryFileRequest defines the QueryFileRequest message. */
export interface QueryFileRequestSDKType {
  fid: string;
}
/** QueryFileResponse defines the QueryFileResponse message. */
export interface QueryFileResponse {
  file?: File;
}
export interface QueryFileResponseProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryFileResponse";
  value: Uint8Array;
}
/**
 * QueryFileResponse defines the QueryFileResponse message.
 * @name QueryFileResponseAmino
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryFileResponse
 */
export interface QueryFileResponseAmino {
  file?: FileAmino;
}
export interface QueryFileResponseAminoMsg {
  type: "/nebulix.storage.v1.QueryFileResponse";
  value: QueryFileResponseAmino;
}
/** QueryFileResponse defines the QueryFileResponse message. */
export interface QueryFileResponseSDKType {
  file?: FileSDKType;
}
/** QueryFilesRequest defines the QueryFilesRequest message. */
export interface QueryFilesRequest {
  pagination?: PageRequest;
}
export interface QueryFilesRequestProtoMsg {
  typeUrl: "/nebulix.storage.v1.QueryFilesRequest";
  value: Uint8Array;
}
/**
 * QueryFilesRequest defines the QueryFilesRequest message.
 * @name QueryFilesRequestAmino
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryFilesRequest
 */
export interface QueryFilesRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryFilesRequestAminoMsg {
  type: "/nebulix.storage.v1.QueryFilesRequest";
  value: QueryFilesRequestAmino;
}
/** QueryFilesRequest defines the QueryFilesRequest message. */
export interface QueryFilesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryFilesResponse defines the QueryFilesResponse message. */
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
 * @name QueryFilesResponseAmino
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.QueryFilesResponse
 */
export interface QueryFilesResponseAmino {
  files?: FileAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryFilesResponseAminoMsg {
  type: "/nebulix.storage.v1.QueryFilesResponse";
  value: QueryFilesResponseAmino;
}
/** QueryFilesResponse defines the QueryFilesResponse message. */
export interface QueryFilesResponseSDKType {
  files: FileSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/nebulix.storage.v1.QueryParamsRequest",
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
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
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
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/nebulix.storage.v1.QueryParamsResponse",
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
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
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
  }
};
function createBaseQueryGetSubscriptionInfoRequest(): QueryGetSubscriptionInfoRequest {
  return {
    subscriberAddress: "",
    subscriptionId: ""
  };
}
export const QueryGetSubscriptionInfoRequest = {
  typeUrl: "/nebulix.storage.v1.QueryGetSubscriptionInfoRequest",
  encode(message: QueryGetSubscriptionInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriberAddress !== "") {
      writer.uint32(10).string(message.subscriberAddress);
    }
    if (message.subscriptionId !== "") {
      writer.uint32(18).string(message.subscriptionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSubscriptionInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSubscriptionInfoRequest();
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
  fromPartial(object: Partial<QueryGetSubscriptionInfoRequest>): QueryGetSubscriptionInfoRequest {
    const message = createBaseQueryGetSubscriptionInfoRequest();
    message.subscriberAddress = object.subscriberAddress ?? "";
    message.subscriptionId = object.subscriptionId ?? "";
    return message;
  },
  fromAmino(object: QueryGetSubscriptionInfoRequestAmino): QueryGetSubscriptionInfoRequest {
    const message = createBaseQueryGetSubscriptionInfoRequest();
    if (object.subscriber_address !== undefined && object.subscriber_address !== null) {
      message.subscriberAddress = object.subscriber_address;
    }
    if (object.subscription_id !== undefined && object.subscription_id !== null) {
      message.subscriptionId = object.subscription_id;
    }
    return message;
  },
  toAmino(message: QueryGetSubscriptionInfoRequest): QueryGetSubscriptionInfoRequestAmino {
    const obj: any = {};
    obj.subscriber_address = message.subscriberAddress === "" ? undefined : message.subscriberAddress;
    obj.subscription_id = message.subscriptionId === "" ? undefined : message.subscriptionId;
    return obj;
  },
  fromAminoMsg(object: QueryGetSubscriptionInfoRequestAminoMsg): QueryGetSubscriptionInfoRequest {
    return QueryGetSubscriptionInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSubscriptionInfoRequestProtoMsg): QueryGetSubscriptionInfoRequest {
    return QueryGetSubscriptionInfoRequest.decode(message.value);
  },
  toProto(message: QueryGetSubscriptionInfoRequest): Uint8Array {
    return QueryGetSubscriptionInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSubscriptionInfoRequest): QueryGetSubscriptionInfoRequestProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.QueryGetSubscriptionInfoRequest",
      value: QueryGetSubscriptionInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetSubscriptionInfoResponse(): QueryGetSubscriptionInfoResponse {
  return {
    subscription: undefined
  };
}
export const QueryGetSubscriptionInfoResponse = {
  typeUrl: "/nebulix.storage.v1.QueryGetSubscriptionInfoResponse",
  encode(message: QueryGetSubscriptionInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscription !== undefined) {
      StorageSubscription.encode(message.subscription, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSubscriptionInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSubscriptionInfoResponse();
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
  fromPartial(object: Partial<QueryGetSubscriptionInfoResponse>): QueryGetSubscriptionInfoResponse {
    const message = createBaseQueryGetSubscriptionInfoResponse();
    message.subscription = object.subscription !== undefined && object.subscription !== null ? StorageSubscription.fromPartial(object.subscription) : undefined;
    return message;
  },
  fromAmino(object: QueryGetSubscriptionInfoResponseAmino): QueryGetSubscriptionInfoResponse {
    const message = createBaseQueryGetSubscriptionInfoResponse();
    if (object.subscription !== undefined && object.subscription !== null) {
      message.subscription = StorageSubscription.fromAmino(object.subscription);
    }
    return message;
  },
  toAmino(message: QueryGetSubscriptionInfoResponse): QueryGetSubscriptionInfoResponseAmino {
    const obj: any = {};
    obj.subscription = message.subscription ? StorageSubscription.toAmino(message.subscription) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSubscriptionInfoResponseAminoMsg): QueryGetSubscriptionInfoResponse {
    return QueryGetSubscriptionInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSubscriptionInfoResponseProtoMsg): QueryGetSubscriptionInfoResponse {
    return QueryGetSubscriptionInfoResponse.decode(message.value);
  },
  toProto(message: QueryGetSubscriptionInfoResponse): Uint8Array {
    return QueryGetSubscriptionInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSubscriptionInfoResponse): QueryGetSubscriptionInfoResponseProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.QueryGetSubscriptionInfoResponse",
      value: QueryGetSubscriptionInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProviderRequest(): QueryProviderRequest {
  return {
    address: ""
  };
}
export const QueryProviderRequest = {
  typeUrl: "/nebulix.storage.v1.QueryProviderRequest",
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
  fromAmino(object: QueryProviderRequestAmino): QueryProviderRequest {
    const message = createBaseQueryProviderRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryProviderRequest): QueryProviderRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryProviderRequestAminoMsg): QueryProviderRequest {
    return QueryProviderRequest.fromAmino(object.value);
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
  }
};
function createBaseQueryProviderResponse(): QueryProviderResponse {
  return {
    provider: undefined
  };
}
export const QueryProviderResponse = {
  typeUrl: "/nebulix.storage.v1.QueryProviderResponse",
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
  fromAmino(object: QueryProviderResponseAmino): QueryProviderResponse {
    const message = createBaseQueryProviderResponse();
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = Provider.fromAmino(object.provider);
    }
    return message;
  },
  toAmino(message: QueryProviderResponse): QueryProviderResponseAmino {
    const obj: any = {};
    obj.provider = message.provider ? Provider.toAmino(message.provider) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProviderResponseAminoMsg): QueryProviderResponse {
    return QueryProviderResponse.fromAmino(object.value);
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
  }
};
function createBaseQueryProvidersRequest(): QueryProvidersRequest {
  return {};
}
export const QueryProvidersRequest = {
  typeUrl: "/nebulix.storage.v1.QueryProvidersRequest",
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
  fromAmino(_: QueryProvidersRequestAmino): QueryProvidersRequest {
    const message = createBaseQueryProvidersRequest();
    return message;
  },
  toAmino(_: QueryProvidersRequest): QueryProvidersRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryProvidersRequestAminoMsg): QueryProvidersRequest {
    return QueryProvidersRequest.fromAmino(object.value);
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
  }
};
function createBaseQueryProvidersResponse(): QueryProvidersResponse {
  return {
    providers: []
  };
}
export const QueryProvidersResponse = {
  typeUrl: "/nebulix.storage.v1.QueryProvidersResponse",
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
  fromAmino(object: QueryProvidersResponseAmino): QueryProvidersResponse {
    const message = createBaseQueryProvidersResponse();
    message.providers = object.providers?.map(e => Provider.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryProvidersResponse): QueryProvidersResponseAmino {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toAmino(e) : undefined);
    } else {
      obj.providers = message.providers;
    }
    return obj;
  },
  fromAminoMsg(object: QueryProvidersResponseAminoMsg): QueryProvidersResponse {
    return QueryProvidersResponse.fromAmino(object.value);
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
  }
};
function createBaseQueryFileRequest(): QueryFileRequest {
  return {
    fid: ""
  };
}
export const QueryFileRequest = {
  typeUrl: "/nebulix.storage.v1.QueryFileRequest",
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
  fromAmino(object: QueryFileRequestAmino): QueryFileRequest {
    const message = createBaseQueryFileRequest();
    if (object.fid !== undefined && object.fid !== null) {
      message.fid = object.fid;
    }
    return message;
  },
  toAmino(message: QueryFileRequest): QueryFileRequestAmino {
    const obj: any = {};
    obj.fid = message.fid === "" ? undefined : message.fid;
    return obj;
  },
  fromAminoMsg(object: QueryFileRequestAminoMsg): QueryFileRequest {
    return QueryFileRequest.fromAmino(object.value);
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
  }
};
function createBaseQueryFileResponse(): QueryFileResponse {
  return {
    file: undefined
  };
}
export const QueryFileResponse = {
  typeUrl: "/nebulix.storage.v1.QueryFileResponse",
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
  fromAmino(object: QueryFileResponseAmino): QueryFileResponse {
    const message = createBaseQueryFileResponse();
    if (object.file !== undefined && object.file !== null) {
      message.file = File.fromAmino(object.file);
    }
    return message;
  },
  toAmino(message: QueryFileResponse): QueryFileResponseAmino {
    const obj: any = {};
    obj.file = message.file ? File.toAmino(message.file) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFileResponseAminoMsg): QueryFileResponse {
    return QueryFileResponse.fromAmino(object.value);
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
  }
};
function createBaseQueryFilesRequest(): QueryFilesRequest {
  return {
    pagination: undefined
  };
}
export const QueryFilesRequest = {
  typeUrl: "/nebulix.storage.v1.QueryFilesRequest",
  encode(message: QueryFilesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFilesRequestAmino): QueryFilesRequest {
    const message = createBaseQueryFilesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFilesRequest): QueryFilesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFilesRequestAminoMsg): QueryFilesRequest {
    return QueryFilesRequest.fromAmino(object.value);
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
  }
};
function createBaseQueryFilesResponse(): QueryFilesResponse {
  return {
    files: [],
    pagination: undefined
  };
}
export const QueryFilesResponse = {
  typeUrl: "/nebulix.storage.v1.QueryFilesResponse",
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
  fromAmino(object: QueryFilesResponseAmino): QueryFilesResponse {
    const message = createBaseQueryFilesResponse();
    message.files = object.files?.map(e => File.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFilesResponse): QueryFilesResponseAmino {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map(e => e ? File.toAmino(e) : undefined);
    } else {
      obj.files = message.files;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFilesResponseAminoMsg): QueryFilesResponse {
    return QueryFilesResponse.fromAmino(object.value);
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
  }
};