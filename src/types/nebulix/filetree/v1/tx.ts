//@ts-nocheck
import { Params, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/nebulix.filetree.v1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/nebulix.filetree.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
/** MsgPostNode defines the MsgPostNode message. */
export interface MsgPostNode {
  creator: string;
  path: string;
  nodeType: string;
  contents: string;
}
export interface MsgPostNodeProtoMsg {
  typeUrl: "/nebulix.filetree.v1.MsgPostNode";
  value: Uint8Array;
}
/** MsgPostNode defines the MsgPostNode message. */
export interface MsgPostNodeSDKType {
  creator: string;
  path: string;
  node_type: string;
  contents: string;
}
/** MsgPostNodeResponse defines the MsgPostNodeResponse message. */
export interface MsgPostNodeResponse {}
export interface MsgPostNodeResponseProtoMsg {
  typeUrl: "/nebulix.filetree.v1.MsgPostNodeResponse";
  value: Uint8Array;
}
/** MsgPostNodeResponse defines the MsgPostNodeResponse message. */
export interface MsgPostNodeResponseSDKType {}
/** MsgDeleteNode defines the MsgDeleteNode message. */
export interface MsgDeleteNode {
  creator: string;
  path: string;
}
export interface MsgDeleteNodeProtoMsg {
  typeUrl: "/nebulix.filetree.v1.MsgDeleteNode";
  value: Uint8Array;
}
/** MsgDeleteNode defines the MsgDeleteNode message. */
export interface MsgDeleteNodeSDKType {
  creator: string;
  path: string;
}
/** MsgDeleteNodeResponse defines the MsgDeleteNodeResponse message. */
export interface MsgDeleteNodeResponse {}
export interface MsgDeleteNodeResponseProtoMsg {
  typeUrl: "/nebulix.filetree.v1.MsgDeleteNodeResponse";
  value: Uint8Array;
}
/** MsgDeleteNodeResponse defines the MsgDeleteNodeResponse message. */
export interface MsgDeleteNodeResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/nebulix.filetree.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/nebulix.filetree.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/nebulix.filetree.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/nebulix.filetree.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPostNode(): MsgPostNode {
  return {
    creator: "",
    path: "",
    nodeType: "",
    contents: ""
  };
}
export const MsgPostNode = {
  typeUrl: "/nebulix.filetree.v1.MsgPostNode",
  encode(message: MsgPostNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.nodeType !== "") {
      writer.uint32(26).string(message.nodeType);
    }
    if (message.contents !== "") {
      writer.uint32(34).string(message.contents);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPostNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.nodeType = reader.string();
          break;
        case 4:
          message.contents = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPostNode>): MsgPostNode {
    const message = createBaseMsgPostNode();
    message.creator = object.creator ?? "";
    message.path = object.path ?? "";
    message.nodeType = object.nodeType ?? "";
    message.contents = object.contents ?? "";
    return message;
  },
  fromProtoMsg(message: MsgPostNodeProtoMsg): MsgPostNode {
    return MsgPostNode.decode(message.value);
  },
  toProto(message: MsgPostNode): Uint8Array {
    return MsgPostNode.encode(message).finish();
  },
  toProtoMsg(message: MsgPostNode): MsgPostNodeProtoMsg {
    return {
      typeUrl: "/nebulix.filetree.v1.MsgPostNode",
      value: MsgPostNode.encode(message).finish()
    };
  }
};
function createBaseMsgPostNodeResponse(): MsgPostNodeResponse {
  return {};
}
export const MsgPostNodeResponse = {
  typeUrl: "/nebulix.filetree.v1.MsgPostNodeResponse",
  encode(_: MsgPostNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPostNodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostNodeResponse();
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
  fromPartial(_: Partial<MsgPostNodeResponse>): MsgPostNodeResponse {
    const message = createBaseMsgPostNodeResponse();
    return message;
  },
  fromProtoMsg(message: MsgPostNodeResponseProtoMsg): MsgPostNodeResponse {
    return MsgPostNodeResponse.decode(message.value);
  },
  toProto(message: MsgPostNodeResponse): Uint8Array {
    return MsgPostNodeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPostNodeResponse): MsgPostNodeResponseProtoMsg {
    return {
      typeUrl: "/nebulix.filetree.v1.MsgPostNodeResponse",
      value: MsgPostNodeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteNode(): MsgDeleteNode {
  return {
    creator: "",
    path: ""
  };
}
export const MsgDeleteNode = {
  typeUrl: "/nebulix.filetree.v1.MsgDeleteNode",
  encode(message: MsgDeleteNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
  fromPartial(object: Partial<MsgDeleteNode>): MsgDeleteNode {
    const message = createBaseMsgDeleteNode();
    message.creator = object.creator ?? "";
    message.path = object.path ?? "";
    return message;
  },
  fromProtoMsg(message: MsgDeleteNodeProtoMsg): MsgDeleteNode {
    return MsgDeleteNode.decode(message.value);
  },
  toProto(message: MsgDeleteNode): Uint8Array {
    return MsgDeleteNode.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteNode): MsgDeleteNodeProtoMsg {
    return {
      typeUrl: "/nebulix.filetree.v1.MsgDeleteNode",
      value: MsgDeleteNode.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteNodeResponse(): MsgDeleteNodeResponse {
  return {};
}
export const MsgDeleteNodeResponse = {
  typeUrl: "/nebulix.filetree.v1.MsgDeleteNodeResponse",
  encode(_: MsgDeleteNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteNodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteNodeResponse();
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
  fromPartial(_: Partial<MsgDeleteNodeResponse>): MsgDeleteNodeResponse {
    const message = createBaseMsgDeleteNodeResponse();
    return message;
  },
  fromProtoMsg(message: MsgDeleteNodeResponseProtoMsg): MsgDeleteNodeResponse {
    return MsgDeleteNodeResponse.decode(message.value);
  },
  toProto(message: MsgDeleteNodeResponse): Uint8Array {
    return MsgDeleteNodeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteNodeResponse): MsgDeleteNodeResponseProtoMsg {
    return {
      typeUrl: "/nebulix.filetree.v1.MsgDeleteNodeResponse",
      value: MsgDeleteNodeResponse.encode(message).finish()
    };
  }
};