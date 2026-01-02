//@ts-nocheck
import { Params, ParamsSDKType } from "./params";
import { FileTreeNode, FileTreeNodeSDKType } from "./tree";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/nebulix.filetree.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/nebulix.filetree.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryFileTreeNodeRequest defines the QueryFileTreeNodeRequest message. */
export interface QueryFileTreeNodeRequest {
  owner: string;
  path: string;
}
export interface QueryFileTreeNodeRequestProtoMsg {
  typeUrl: "/nebulix.filetree.v1.QueryFileTreeNodeRequest";
  value: Uint8Array;
}
/** QueryFileTreeNodeRequest defines the QueryFileTreeNodeRequest message. */
export interface QueryFileTreeNodeRequestSDKType {
  owner: string;
  path: string;
}
/** QueryFileTreeNodeResponse defines the QueryFileTreeNodeResponse message. */
export interface QueryFileTreeNodeResponse {
  node?: FileTreeNode;
}
export interface QueryFileTreeNodeResponseProtoMsg {
  typeUrl: "/nebulix.filetree.v1.QueryFileTreeNodeResponse";
  value: Uint8Array;
}
/** QueryFileTreeNodeResponse defines the QueryFileTreeNodeResponse message. */
export interface QueryFileTreeNodeResponseSDKType {
  node?: FileTreeNodeSDKType;
}
/** QueryFileTreePathsRequest defines the QueryFileTreePathsRequest message. */
export interface QueryFileTreePathsRequest {
  owner: string;
  basepath: string;
}
export interface QueryFileTreePathsRequestProtoMsg {
  typeUrl: "/nebulix.filetree.v1.QueryFileTreePathsRequest";
  value: Uint8Array;
}
/** QueryFileTreePathsRequest defines the QueryFileTreePathsRequest message. */
export interface QueryFileTreePathsRequestSDKType {
  owner: string;
  basepath: string;
}
/** QueryFileTreePathsResponse defines the QueryFileTreePathsResponse message. */
export interface QueryFileTreePathsResponse {
  paths: string[];
}
export interface QueryFileTreePathsResponseProtoMsg {
  typeUrl: "/nebulix.filetree.v1.QueryFileTreePathsResponse";
  value: Uint8Array;
}
/** QueryFileTreePathsResponse defines the QueryFileTreePathsResponse message. */
export interface QueryFileTreePathsResponseSDKType {
  paths: string[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/nebulix.filetree.v1.QueryParamsRequest",
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
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/nebulix.filetree.v1.QueryParamsResponse",
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
  }
};
function createBaseQueryFileTreeNodeRequest(): QueryFileTreeNodeRequest {
  return {
    owner: "",
    path: ""
  };
}
export const QueryFileTreeNodeRequest = {
  typeUrl: "/nebulix.filetree.v1.QueryFileTreeNodeRequest",
  encode(message: QueryFileTreeNodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFileTreeNodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFileTreeNodeRequest();
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
  fromPartial(object: Partial<QueryFileTreeNodeRequest>): QueryFileTreeNodeRequest {
    const message = createBaseQueryFileTreeNodeRequest();
    message.owner = object.owner ?? "";
    message.path = object.path ?? "";
    return message;
  },
  fromProtoMsg(message: QueryFileTreeNodeRequestProtoMsg): QueryFileTreeNodeRequest {
    return QueryFileTreeNodeRequest.decode(message.value);
  },
  toProto(message: QueryFileTreeNodeRequest): Uint8Array {
    return QueryFileTreeNodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFileTreeNodeRequest): QueryFileTreeNodeRequestProtoMsg {
    return {
      typeUrl: "/nebulix.filetree.v1.QueryFileTreeNodeRequest",
      value: QueryFileTreeNodeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFileTreeNodeResponse(): QueryFileTreeNodeResponse {
  return {
    node: undefined
  };
}
export const QueryFileTreeNodeResponse = {
  typeUrl: "/nebulix.filetree.v1.QueryFileTreeNodeResponse",
  encode(message: QueryFileTreeNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.node !== undefined) {
      FileTreeNode.encode(message.node, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFileTreeNodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFileTreeNodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.node = FileTreeNode.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFileTreeNodeResponse>): QueryFileTreeNodeResponse {
    const message = createBaseQueryFileTreeNodeResponse();
    message.node = object.node !== undefined && object.node !== null ? FileTreeNode.fromPartial(object.node) : undefined;
    return message;
  },
  fromProtoMsg(message: QueryFileTreeNodeResponseProtoMsg): QueryFileTreeNodeResponse {
    return QueryFileTreeNodeResponse.decode(message.value);
  },
  toProto(message: QueryFileTreeNodeResponse): Uint8Array {
    return QueryFileTreeNodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFileTreeNodeResponse): QueryFileTreeNodeResponseProtoMsg {
    return {
      typeUrl: "/nebulix.filetree.v1.QueryFileTreeNodeResponse",
      value: QueryFileTreeNodeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFileTreePathsRequest(): QueryFileTreePathsRequest {
  return {
    owner: "",
    basepath: ""
  };
}
export const QueryFileTreePathsRequest = {
  typeUrl: "/nebulix.filetree.v1.QueryFileTreePathsRequest",
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
  }
};
function createBaseQueryFileTreePathsResponse(): QueryFileTreePathsResponse {
  return {
    paths: []
  };
}
export const QueryFileTreePathsResponse = {
  typeUrl: "/nebulix.filetree.v1.QueryFileTreePathsResponse",
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
  }
};