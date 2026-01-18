//@ts-nocheck
import { Params, ParamsSDKType } from "./params";
import { FileNode, FileNodeSDKType } from "./tree";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/nebulix.filetree.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestSDKType
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryParamsRequest
 */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/nebulix.filetree.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseSDKType
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryParamsResponse
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryFileNodeRequest defines the QueryFileNodeRequest message.
 * @name QueryFileNodeRequest
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryFileNodeRequest
 */
export interface QueryFileNodeRequest {
  owner: string;
  path: string;
}
export interface QueryFileNodeRequestProtoMsg {
  typeUrl: "/nebulix.filetree.v1.QueryFileNodeRequest";
  value: Uint8Array;
}
/**
 * QueryFileNodeRequest defines the QueryFileNodeRequest message.
 * @name QueryFileNodeRequestSDKType
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryFileNodeRequest
 */
export interface QueryFileNodeRequestSDKType {
  owner: string;
  path: string;
}
/**
 * QueryFileNodeResponse defines the QueryFileNodeResponse message.
 * @name QueryFileNodeResponse
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryFileNodeResponse
 */
export interface QueryFileNodeResponse {
  node?: FileNode;
}
export interface QueryFileNodeResponseProtoMsg {
  typeUrl: "/nebulix.filetree.v1.QueryFileNodeResponse";
  value: Uint8Array;
}
/**
 * QueryFileNodeResponse defines the QueryFileNodeResponse message.
 * @name QueryFileNodeResponseSDKType
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryFileNodeResponse
 */
export interface QueryFileNodeResponseSDKType {
  node?: FileNodeSDKType;
}
/**
 * QueryFileTreePathsRequest defines the QueryFileTreePathsRequest message.
 * @name QueryFileTreePathsRequest
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryFileTreePathsRequest
 */
export interface QueryFileTreePathsRequest {
  owner: string;
  basepath: string;
}
export interface QueryFileTreePathsRequestProtoMsg {
  typeUrl: "/nebulix.filetree.v1.QueryFileTreePathsRequest";
  value: Uint8Array;
}
/**
 * QueryFileTreePathsRequest defines the QueryFileTreePathsRequest message.
 * @name QueryFileTreePathsRequestSDKType
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryFileTreePathsRequest
 */
export interface QueryFileTreePathsRequestSDKType {
  owner: string;
  basepath: string;
}
/**
 * QueryFileTreePathsResponse defines the QueryFileTreePathsResponse message.
 * @name QueryFileTreePathsResponse
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryFileTreePathsResponse
 */
export interface QueryFileTreePathsResponse {
  paths: string[];
}
export interface QueryFileTreePathsResponseProtoMsg {
  typeUrl: "/nebulix.filetree.v1.QueryFileTreePathsResponse";
  value: Uint8Array;
}
/**
 * QueryFileTreePathsResponse defines the QueryFileTreePathsResponse message.
 * @name QueryFileTreePathsResponseSDKType
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryFileTreePathsResponse
 */
export interface QueryFileTreePathsResponseSDKType {
  paths: string[];
}
/**
 * QueryFileNodeChildrenRequest defines the QueryFileNodeChildrenRequest message.
 * @name QueryFileNodeChildrenRequest
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryFileNodeChildrenRequest
 */
export interface QueryFileNodeChildrenRequest {
  owner: string;
  path: string;
}
export interface QueryFileNodeChildrenRequestProtoMsg {
  typeUrl: "/nebulix.filetree.v1.QueryFileNodeChildrenRequest";
  value: Uint8Array;
}
/**
 * QueryFileNodeChildrenRequest defines the QueryFileNodeChildrenRequest message.
 * @name QueryFileNodeChildrenRequestSDKType
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryFileNodeChildrenRequest
 */
export interface QueryFileNodeChildrenRequestSDKType {
  owner: string;
  path: string;
}
/**
 * QueryFileNodeChildrenResponse defines the QueryFileNodeChildrenResponse message.
 * @name QueryFileNodeChildrenResponse
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryFileNodeChildrenResponse
 */
export interface QueryFileNodeChildrenResponse {
  nodes: FileNode[];
}
export interface QueryFileNodeChildrenResponseProtoMsg {
  typeUrl: "/nebulix.filetree.v1.QueryFileNodeChildrenResponse";
  value: Uint8Array;
}
/**
 * QueryFileNodeChildrenResponse defines the QueryFileNodeChildrenResponse message.
 * @name QueryFileNodeChildrenResponseSDKType
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryFileNodeChildrenResponse
 */
export interface QueryFileNodeChildrenResponseSDKType {
  nodes: FileNodeSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/nebulix.filetree.v1.QueryParamsRequest",
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
      typeUrl: "/nebulix.filetree.v1.QueryParamsRequest",
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
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/nebulix.filetree.v1.QueryParamsResponse",
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
      typeUrl: "/nebulix.filetree.v1.QueryParamsResponse",
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
function createBaseQueryFileNodeRequest(): QueryFileNodeRequest {
  return {
    owner: "",
    path: ""
  };
}
/**
 * QueryFileNodeRequest defines the QueryFileNodeRequest message.
 * @name QueryFileNodeRequest
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryFileNodeRequest
 */
export const QueryFileNodeRequest = {
  typeUrl: "/nebulix.filetree.v1.QueryFileNodeRequest",
  is(o: any): o is QueryFileNodeRequest {
    return o && (o.$typeUrl === QueryFileNodeRequest.typeUrl || typeof o.owner === "string" && typeof o.path === "string");
  },
  isSDK(o: any): o is QueryFileNodeRequestSDKType {
    return o && (o.$typeUrl === QueryFileNodeRequest.typeUrl || typeof o.owner === "string" && typeof o.path === "string");
  },
  encode(message: QueryFileNodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFileNodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFileNodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFileNodeRequest>): QueryFileNodeRequest {
    const message = createBaseQueryFileNodeRequest();
    message.owner = object.owner ?? "";
    message.path = object.path ?? "";
    return message;
  },
  fromProtoMsg(message: QueryFileNodeRequestProtoMsg): QueryFileNodeRequest {
    return QueryFileNodeRequest.decode(message.value);
  },
  toProto(message: QueryFileNodeRequest): Uint8Array {
    return QueryFileNodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFileNodeRequest): QueryFileNodeRequestProtoMsg {
    return {
      typeUrl: "/nebulix.filetree.v1.QueryFileNodeRequest",
      value: QueryFileNodeRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(QueryFileNodeRequest.typeUrl, QueryFileNodeRequest);
function createBaseQueryFileNodeResponse(): QueryFileNodeResponse {
  return {
    node: undefined
  };
}
/**
 * QueryFileNodeResponse defines the QueryFileNodeResponse message.
 * @name QueryFileNodeResponse
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryFileNodeResponse
 */
export const QueryFileNodeResponse = {
  typeUrl: "/nebulix.filetree.v1.QueryFileNodeResponse",
  is(o: any): o is QueryFileNodeResponse {
    return o && o.$typeUrl === QueryFileNodeResponse.typeUrl;
  },
  isSDK(o: any): o is QueryFileNodeResponseSDKType {
    return o && o.$typeUrl === QueryFileNodeResponse.typeUrl;
  },
  encode(message: QueryFileNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.node !== undefined) {
      FileNode.encode(message.node, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFileNodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFileNodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.node = FileNode.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFileNodeResponse>): QueryFileNodeResponse {
    const message = createBaseQueryFileNodeResponse();
    message.node = object.node !== undefined && object.node !== null ? FileNode.fromPartial(object.node) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryFileNodeResponseProtoMsg): QueryFileNodeResponse {
    return QueryFileNodeResponse.decode(message.value);
  },
  toProto(message: QueryFileNodeResponse): Uint8Array {
    return QueryFileNodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFileNodeResponse): QueryFileNodeResponseProtoMsg {
    return {
      typeUrl: "/nebulix.filetree.v1.QueryFileNodeResponse",
      value: QueryFileNodeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryFileNodeResponse.typeUrl)) {
      return;
    }
    FileNode.registerTypeUrl();
  }
};
GlobalDecoderRegistry.register(QueryFileNodeResponse.typeUrl, QueryFileNodeResponse);
function createBaseQueryFileTreePathsRequest(): QueryFileTreePathsRequest {
  return {
    owner: "",
    basepath: ""
  };
}
/**
 * QueryFileTreePathsRequest defines the QueryFileTreePathsRequest message.
 * @name QueryFileTreePathsRequest
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryFileTreePathsRequest
 */
export const QueryFileTreePathsRequest = {
  typeUrl: "/nebulix.filetree.v1.QueryFileTreePathsRequest",
  is(o: any): o is QueryFileTreePathsRequest {
    return o && (o.$typeUrl === QueryFileTreePathsRequest.typeUrl || typeof o.owner === "string" && typeof o.basepath === "string");
  },
  isSDK(o: any): o is QueryFileTreePathsRequestSDKType {
    return o && (o.$typeUrl === QueryFileTreePathsRequest.typeUrl || typeof o.owner === "string" && typeof o.basepath === "string");
  },
  encode(message: QueryFileTreePathsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.basepath !== "") {
      writer.uint32(18).string(message.basepath);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFileTreePathsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFileTreePathsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.basepath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFileTreePathsRequest>): QueryFileTreePathsRequest {
    const message = createBaseQueryFileTreePathsRequest();
    message.owner = object.owner ?? "";
    message.basepath = object.basepath ?? "";
    return message;
  },
  fromProtoMsg(message: QueryFileTreePathsRequestProtoMsg): QueryFileTreePathsRequest {
    return QueryFileTreePathsRequest.decode(message.value);
  },
  toProto(message: QueryFileTreePathsRequest): Uint8Array {
    return QueryFileTreePathsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFileTreePathsRequest): QueryFileTreePathsRequestProtoMsg {
    return {
      typeUrl: "/nebulix.filetree.v1.QueryFileTreePathsRequest",
      value: QueryFileTreePathsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(QueryFileTreePathsRequest.typeUrl, QueryFileTreePathsRequest);
function createBaseQueryFileTreePathsResponse(): QueryFileTreePathsResponse {
  return {
    paths: []
  };
}
/**
 * QueryFileTreePathsResponse defines the QueryFileTreePathsResponse message.
 * @name QueryFileTreePathsResponse
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryFileTreePathsResponse
 */
export const QueryFileTreePathsResponse = {
  typeUrl: "/nebulix.filetree.v1.QueryFileTreePathsResponse",
  is(o: any): o is QueryFileTreePathsResponse {
    return o && (o.$typeUrl === QueryFileTreePathsResponse.typeUrl || Array.isArray(o.paths) && (!o.paths.length || typeof o.paths[0] === "string"));
  },
  isSDK(o: any): o is QueryFileTreePathsResponseSDKType {
    return o && (o.$typeUrl === QueryFileTreePathsResponse.typeUrl || Array.isArray(o.paths) && (!o.paths.length || typeof o.paths[0] === "string"));
  },
  encode(message: QueryFileTreePathsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.paths) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFileTreePathsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFileTreePathsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paths.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFileTreePathsResponse>): QueryFileTreePathsResponse {
    const message = createBaseQueryFileTreePathsResponse();
    message.paths = object.paths?.map(e => e) || [];
    return message;
  },
  fromProtoMsg(message: QueryFileTreePathsResponseProtoMsg): QueryFileTreePathsResponse {
    return QueryFileTreePathsResponse.decode(message.value);
  },
  toProto(message: QueryFileTreePathsResponse): Uint8Array {
    return QueryFileTreePathsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFileTreePathsResponse): QueryFileTreePathsResponseProtoMsg {
    return {
      typeUrl: "/nebulix.filetree.v1.QueryFileTreePathsResponse",
      value: QueryFileTreePathsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(QueryFileTreePathsResponse.typeUrl, QueryFileTreePathsResponse);
function createBaseQueryFileNodeChildrenRequest(): QueryFileNodeChildrenRequest {
  return {
    owner: "",
    path: ""
  };
}
/**
 * QueryFileNodeChildrenRequest defines the QueryFileNodeChildrenRequest message.
 * @name QueryFileNodeChildrenRequest
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryFileNodeChildrenRequest
 */
export const QueryFileNodeChildrenRequest = {
  typeUrl: "/nebulix.filetree.v1.QueryFileNodeChildrenRequest",
  is(o: any): o is QueryFileNodeChildrenRequest {
    return o && (o.$typeUrl === QueryFileNodeChildrenRequest.typeUrl || typeof o.owner === "string" && typeof o.path === "string");
  },
  isSDK(o: any): o is QueryFileNodeChildrenRequestSDKType {
    return o && (o.$typeUrl === QueryFileNodeChildrenRequest.typeUrl || typeof o.owner === "string" && typeof o.path === "string");
  },
  encode(message: QueryFileNodeChildrenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFileNodeChildrenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFileNodeChildrenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFileNodeChildrenRequest>): QueryFileNodeChildrenRequest {
    const message = createBaseQueryFileNodeChildrenRequest();
    message.owner = object.owner ?? "";
    message.path = object.path ?? "";
    return message;
  },
  fromProtoMsg(message: QueryFileNodeChildrenRequestProtoMsg): QueryFileNodeChildrenRequest {
    return QueryFileNodeChildrenRequest.decode(message.value);
  },
  toProto(message: QueryFileNodeChildrenRequest): Uint8Array {
    return QueryFileNodeChildrenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFileNodeChildrenRequest): QueryFileNodeChildrenRequestProtoMsg {
    return {
      typeUrl: "/nebulix.filetree.v1.QueryFileNodeChildrenRequest",
      value: QueryFileNodeChildrenRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(QueryFileNodeChildrenRequest.typeUrl, QueryFileNodeChildrenRequest);
function createBaseQueryFileNodeChildrenResponse(): QueryFileNodeChildrenResponse {
  return {
    nodes: []
  };
}
/**
 * QueryFileNodeChildrenResponse defines the QueryFileNodeChildrenResponse message.
 * @name QueryFileNodeChildrenResponse
 * @package nebulix.filetree.v1
 * @see proto type: nebulix.filetree.v1.QueryFileNodeChildrenResponse
 */
export const QueryFileNodeChildrenResponse = {
  typeUrl: "/nebulix.filetree.v1.QueryFileNodeChildrenResponse",
  is(o: any): o is QueryFileNodeChildrenResponse {
    return o && (o.$typeUrl === QueryFileNodeChildrenResponse.typeUrl || Array.isArray(o.nodes) && (!o.nodes.length || FileNode.is(o.nodes[0])));
  },
  isSDK(o: any): o is QueryFileNodeChildrenResponseSDKType {
    return o && (o.$typeUrl === QueryFileNodeChildrenResponse.typeUrl || Array.isArray(o.nodes) && (!o.nodes.length || FileNode.isSDK(o.nodes[0])));
  },
  encode(message: QueryFileNodeChildrenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.nodes) {
      FileNode.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFileNodeChildrenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFileNodeChildrenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodes.push(FileNode.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFileNodeChildrenResponse>): QueryFileNodeChildrenResponse {
    const message = createBaseQueryFileNodeChildrenResponse();
    message.nodes = object.nodes?.map(e => FileNode.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: QueryFileNodeChildrenResponseProtoMsg): QueryFileNodeChildrenResponse {
    return QueryFileNodeChildrenResponse.decode(message.value);
  },
  toProto(message: QueryFileNodeChildrenResponse): Uint8Array {
    return QueryFileNodeChildrenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFileNodeChildrenResponse): QueryFileNodeChildrenResponseProtoMsg {
    return {
      typeUrl: "/nebulix.filetree.v1.QueryFileNodeChildrenResponse",
      value: QueryFileNodeChildrenResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryFileNodeChildrenResponse.typeUrl)) {
      return;
    }
    FileNode.registerTypeUrl();
  }
};
GlobalDecoderRegistry.register(QueryFileNodeChildrenResponse.typeUrl, QueryFileNodeChildrenResponse);