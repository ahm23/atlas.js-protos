//@ts-nocheck
import { Params, ParamsSDKType } from "./params";
import { TreeNode, TreeNodeSDKType } from "./tree";
import * as _m0 from "protobufjs/minimal";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/atlas.filetree.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestSDKType
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryParamsRequest
 */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/atlas.filetree.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseSDKType
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryParamsResponse
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryTreeNodeRequest defines the QueryTreeNodeRequest message.
 * @name QueryTreeNodeRequest
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryTreeNodeRequest
 */
export interface QueryTreeNodeRequest {
  owner: string;
  path: string;
}
export interface QueryTreeNodeRequestProtoMsg {
  typeUrl: "/atlas.filetree.v1.QueryTreeNodeRequest";
  value: Uint8Array;
}
/**
 * QueryTreeNodeRequest defines the QueryTreeNodeRequest message.
 * @name QueryTreeNodeRequestSDKType
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryTreeNodeRequest
 */
export interface QueryTreeNodeRequestSDKType {
  owner: string;
  path: string;
}
/**
 * QueryTreeNodeResponse defines the QueryTreeNodeResponse message.
 * @name QueryTreeNodeResponse
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryTreeNodeResponse
 */
export interface QueryTreeNodeResponse {
  node?: TreeNode;
}
export interface QueryTreeNodeResponseProtoMsg {
  typeUrl: "/atlas.filetree.v1.QueryTreeNodeResponse";
  value: Uint8Array;
}
/**
 * QueryTreeNodeResponse defines the QueryTreeNodeResponse message.
 * @name QueryTreeNodeResponseSDKType
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryTreeNodeResponse
 */
export interface QueryTreeNodeResponseSDKType {
  node?: TreeNodeSDKType;
}
/**
 * QueryFileTreePathsRequest defines the QueryFileTreePathsRequest message.
 * @name QueryFileTreePathsRequest
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryFileTreePathsRequest
 */
export interface QueryFileTreePathsRequest {
  owner: string;
  basepath: string;
}
export interface QueryFileTreePathsRequestProtoMsg {
  typeUrl: "/atlas.filetree.v1.QueryFileTreePathsRequest";
  value: Uint8Array;
}
/**
 * QueryFileTreePathsRequest defines the QueryFileTreePathsRequest message.
 * @name QueryFileTreePathsRequestSDKType
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryFileTreePathsRequest
 */
export interface QueryFileTreePathsRequestSDKType {
  owner: string;
  basepath: string;
}
/**
 * QueryFileTreePathsResponse defines the QueryFileTreePathsResponse message.
 * @name QueryFileTreePathsResponse
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryFileTreePathsResponse
 */
export interface QueryFileTreePathsResponse {
  paths: string[];
}
export interface QueryFileTreePathsResponseProtoMsg {
  typeUrl: "/atlas.filetree.v1.QueryFileTreePathsResponse";
  value: Uint8Array;
}
/**
 * QueryFileTreePathsResponse defines the QueryFileTreePathsResponse message.
 * @name QueryFileTreePathsResponseSDKType
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryFileTreePathsResponse
 */
export interface QueryFileTreePathsResponseSDKType {
  paths: string[];
}
/**
 * QueryTreeNodeChildrenRequest defines the QueryTreeNodeChildrenRequest message.
 * @name QueryTreeNodeChildrenRequest
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryTreeNodeChildrenRequest
 */
export interface QueryTreeNodeChildrenRequest {
  owner: string;
  path: string;
}
export interface QueryTreeNodeChildrenRequestProtoMsg {
  typeUrl: "/atlas.filetree.v1.QueryTreeNodeChildrenRequest";
  value: Uint8Array;
}
/**
 * QueryTreeNodeChildrenRequest defines the QueryTreeNodeChildrenRequest message.
 * @name QueryTreeNodeChildrenRequestSDKType
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryTreeNodeChildrenRequest
 */
export interface QueryTreeNodeChildrenRequestSDKType {
  owner: string;
  path: string;
}
/**
 * QueryTreeNodeChildrenResponse defines the QueryTreeNodeChildrenResponse message.
 * @name QueryTreeNodeChildrenResponse
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryTreeNodeChildrenResponse
 */
export interface QueryTreeNodeChildrenResponse {
  nodes: TreeNode[];
}
export interface QueryTreeNodeChildrenResponseProtoMsg {
  typeUrl: "/atlas.filetree.v1.QueryTreeNodeChildrenResponse";
  value: Uint8Array;
}
/**
 * QueryTreeNodeChildrenResponse defines the QueryTreeNodeChildrenResponse message.
 * @name QueryTreeNodeChildrenResponseSDKType
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryTreeNodeChildrenResponse
 */
export interface QueryTreeNodeChildrenResponseSDKType {
  nodes: TreeNodeSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/atlas.filetree.v1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
      typeUrl: "/atlas.filetree.v1.QueryParamsRequest",
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
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/atlas.filetree.v1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
      typeUrl: "/atlas.filetree.v1.QueryParamsResponse",
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
function createBaseQueryTreeNodeRequest(): QueryTreeNodeRequest {
  return {
    owner: "",
    path: ""
  };
}
/**
 * QueryTreeNodeRequest defines the QueryTreeNodeRequest message.
 * @name QueryTreeNodeRequest
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryTreeNodeRequest
 */
export const QueryTreeNodeRequest = {
  typeUrl: "/atlas.filetree.v1.QueryTreeNodeRequest",
  is(o: any): o is QueryTreeNodeRequest {
    return o && (o.$typeUrl === QueryTreeNodeRequest.typeUrl || typeof o.owner === "string" && typeof o.path === "string");
  },
  isSDK(o: any): o is QueryTreeNodeRequestSDKType {
    return o && (o.$typeUrl === QueryTreeNodeRequest.typeUrl || typeof o.owner === "string" && typeof o.path === "string");
  },
  encode(message: QueryTreeNodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTreeNodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTreeNodeRequest();
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
  fromPartial(object: Partial<QueryTreeNodeRequest>): QueryTreeNodeRequest {
    const message = createBaseQueryTreeNodeRequest();
    message.owner = object.owner ?? "";
    message.path = object.path ?? "";
    return message;
  },
  fromProtoMsg(message: QueryTreeNodeRequestProtoMsg): QueryTreeNodeRequest {
    return QueryTreeNodeRequest.decode(message.value);
  },
  toProto(message: QueryTreeNodeRequest): Uint8Array {
    return QueryTreeNodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTreeNodeRequest): QueryTreeNodeRequestProtoMsg {
    return {
      typeUrl: "/atlas.filetree.v1.QueryTreeNodeRequest",
      value: QueryTreeNodeRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(QueryTreeNodeRequest.typeUrl, QueryTreeNodeRequest);
function createBaseQueryTreeNodeResponse(): QueryTreeNodeResponse {
  return {
    node: undefined
  };
}
/**
 * QueryTreeNodeResponse defines the QueryTreeNodeResponse message.
 * @name QueryTreeNodeResponse
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryTreeNodeResponse
 */
export const QueryTreeNodeResponse = {
  typeUrl: "/atlas.filetree.v1.QueryTreeNodeResponse",
  is(o: any): o is QueryTreeNodeResponse {
    return o && o.$typeUrl === QueryTreeNodeResponse.typeUrl;
  },
  isSDK(o: any): o is QueryTreeNodeResponseSDKType {
    return o && o.$typeUrl === QueryTreeNodeResponse.typeUrl;
  },
  encode(message: QueryTreeNodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.node !== undefined) {
      TreeNode.encode(message.node, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTreeNodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTreeNodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.node = TreeNode.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTreeNodeResponse>): QueryTreeNodeResponse {
    const message = createBaseQueryTreeNodeResponse();
    message.node = object.node !== undefined && object.node !== null ? TreeNode.fromPartial(object.node) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryTreeNodeResponseProtoMsg): QueryTreeNodeResponse {
    return QueryTreeNodeResponse.decode(message.value);
  },
  toProto(message: QueryTreeNodeResponse): Uint8Array {
    return QueryTreeNodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTreeNodeResponse): QueryTreeNodeResponseProtoMsg {
    return {
      typeUrl: "/atlas.filetree.v1.QueryTreeNodeResponse",
      value: QueryTreeNodeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryTreeNodeResponse.typeUrl)) {
      return;
    }
    TreeNode.registerTypeUrl();
  }
};
GlobalDecoderRegistry.register(QueryTreeNodeResponse.typeUrl, QueryTreeNodeResponse);
function createBaseQueryFileTreePathsRequest(): QueryFileTreePathsRequest {
  return {
    owner: "",
    basepath: ""
  };
}
/**
 * QueryFileTreePathsRequest defines the QueryFileTreePathsRequest message.
 * @name QueryFileTreePathsRequest
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryFileTreePathsRequest
 */
export const QueryFileTreePathsRequest = {
  typeUrl: "/atlas.filetree.v1.QueryFileTreePathsRequest",
  is(o: any): o is QueryFileTreePathsRequest {
    return o && (o.$typeUrl === QueryFileTreePathsRequest.typeUrl || typeof o.owner === "string" && typeof o.basepath === "string");
  },
  isSDK(o: any): o is QueryFileTreePathsRequestSDKType {
    return o && (o.$typeUrl === QueryFileTreePathsRequest.typeUrl || typeof o.owner === "string" && typeof o.basepath === "string");
  },
  encode(message: QueryFileTreePathsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.basepath !== "") {
      writer.uint32(18).string(message.basepath);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFileTreePathsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
      typeUrl: "/atlas.filetree.v1.QueryFileTreePathsRequest",
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
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryFileTreePathsResponse
 */
export const QueryFileTreePathsResponse = {
  typeUrl: "/atlas.filetree.v1.QueryFileTreePathsResponse",
  is(o: any): o is QueryFileTreePathsResponse {
    return o && (o.$typeUrl === QueryFileTreePathsResponse.typeUrl || Array.isArray(o.paths) && (!o.paths.length || typeof o.paths[0] === "string"));
  },
  isSDK(o: any): o is QueryFileTreePathsResponseSDKType {
    return o && (o.$typeUrl === QueryFileTreePathsResponse.typeUrl || Array.isArray(o.paths) && (!o.paths.length || typeof o.paths[0] === "string"));
  },
  encode(message: QueryFileTreePathsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.paths) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFileTreePathsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
      typeUrl: "/atlas.filetree.v1.QueryFileTreePathsResponse",
      value: QueryFileTreePathsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(QueryFileTreePathsResponse.typeUrl, QueryFileTreePathsResponse);
function createBaseQueryTreeNodeChildrenRequest(): QueryTreeNodeChildrenRequest {
  return {
    owner: "",
    path: ""
  };
}
/**
 * QueryTreeNodeChildrenRequest defines the QueryTreeNodeChildrenRequest message.
 * @name QueryTreeNodeChildrenRequest
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryTreeNodeChildrenRequest
 */
export const QueryTreeNodeChildrenRequest = {
  typeUrl: "/atlas.filetree.v1.QueryTreeNodeChildrenRequest",
  is(o: any): o is QueryTreeNodeChildrenRequest {
    return o && (o.$typeUrl === QueryTreeNodeChildrenRequest.typeUrl || typeof o.owner === "string" && typeof o.path === "string");
  },
  isSDK(o: any): o is QueryTreeNodeChildrenRequestSDKType {
    return o && (o.$typeUrl === QueryTreeNodeChildrenRequest.typeUrl || typeof o.owner === "string" && typeof o.path === "string");
  },
  encode(message: QueryTreeNodeChildrenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTreeNodeChildrenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTreeNodeChildrenRequest();
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
  fromPartial(object: Partial<QueryTreeNodeChildrenRequest>): QueryTreeNodeChildrenRequest {
    const message = createBaseQueryTreeNodeChildrenRequest();
    message.owner = object.owner ?? "";
    message.path = object.path ?? "";
    return message;
  },
  fromProtoMsg(message: QueryTreeNodeChildrenRequestProtoMsg): QueryTreeNodeChildrenRequest {
    return QueryTreeNodeChildrenRequest.decode(message.value);
  },
  toProto(message: QueryTreeNodeChildrenRequest): Uint8Array {
    return QueryTreeNodeChildrenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTreeNodeChildrenRequest): QueryTreeNodeChildrenRequestProtoMsg {
    return {
      typeUrl: "/atlas.filetree.v1.QueryTreeNodeChildrenRequest",
      value: QueryTreeNodeChildrenRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(QueryTreeNodeChildrenRequest.typeUrl, QueryTreeNodeChildrenRequest);
function createBaseQueryTreeNodeChildrenResponse(): QueryTreeNodeChildrenResponse {
  return {
    nodes: []
  };
}
/**
 * QueryTreeNodeChildrenResponse defines the QueryTreeNodeChildrenResponse message.
 * @name QueryTreeNodeChildrenResponse
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.QueryTreeNodeChildrenResponse
 */
export const QueryTreeNodeChildrenResponse = {
  typeUrl: "/atlas.filetree.v1.QueryTreeNodeChildrenResponse",
  is(o: any): o is QueryTreeNodeChildrenResponse {
    return o && (o.$typeUrl === QueryTreeNodeChildrenResponse.typeUrl || Array.isArray(o.nodes) && (!o.nodes.length || TreeNode.is(o.nodes[0])));
  },
  isSDK(o: any): o is QueryTreeNodeChildrenResponseSDKType {
    return o && (o.$typeUrl === QueryTreeNodeChildrenResponse.typeUrl || Array.isArray(o.nodes) && (!o.nodes.length || TreeNode.isSDK(o.nodes[0])));
  },
  encode(message: QueryTreeNodeChildrenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nodes) {
      TreeNode.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTreeNodeChildrenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTreeNodeChildrenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodes.push(TreeNode.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTreeNodeChildrenResponse>): QueryTreeNodeChildrenResponse {
    const message = createBaseQueryTreeNodeChildrenResponse();
    message.nodes = object.nodes?.map(e => TreeNode.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: QueryTreeNodeChildrenResponseProtoMsg): QueryTreeNodeChildrenResponse {
    return QueryTreeNodeChildrenResponse.decode(message.value);
  },
  toProto(message: QueryTreeNodeChildrenResponse): Uint8Array {
    return QueryTreeNodeChildrenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTreeNodeChildrenResponse): QueryTreeNodeChildrenResponseProtoMsg {
    return {
      typeUrl: "/atlas.filetree.v1.QueryTreeNodeChildrenResponse",
      value: QueryTreeNodeChildrenResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryTreeNodeChildrenResponse.typeUrl)) {
      return;
    }
    TreeNode.registerTypeUrl();
  }
};
GlobalDecoderRegistry.register(QueryTreeNodeChildrenResponse.typeUrl, QueryTreeNodeChildrenResponse);