//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface FileNode {
  nodeType: string;
  contents: string;
}
export interface FileNodeProtoMsg {
  typeUrl: "/nebulix.filetree.v1.FileNode";
  value: Uint8Array;
}
export interface FileNodeSDKType {
  node_type: string;
  contents: string;
}
function createBaseFileNode(): FileNode {
  return {
    nodeType: "",
    contents: ""
  };
}
export const FileNode = {
  typeUrl: "/nebulix.filetree.v1.FileNode",
  encode(message: FileNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nodeType !== "") {
      writer.uint32(10).string(message.nodeType);
    }
    if (message.contents !== "") {
      writer.uint32(18).string(message.contents);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FileNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeType = reader.string();
          break;
        case 2:
          message.contents = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FileNode>): FileNode {
    const message = createBaseFileNode();
    message.nodeType = object.nodeType ?? "";
    message.contents = object.contents ?? "";
    return message;
  },
  fromProtoMsg(message: FileNodeProtoMsg): FileNode {
    return FileNode.decode(message.value);
  },
  toProto(message: FileNode): Uint8Array {
    return FileNode.encode(message).finish();
  },
  toProtoMsg(message: FileNode): FileNodeProtoMsg {
    return {
      typeUrl: "/nebulix.filetree.v1.FileNode",
      value: FileNode.encode(message).finish()
    };
  }
};