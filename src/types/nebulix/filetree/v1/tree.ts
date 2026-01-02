//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface FileTreeNode {
  nodeType: string;
  contents: string;
}
export interface FileTreeNodeProtoMsg {
  typeUrl: "/nebulix.filetree.v1.FileTreeNode";
  value: Uint8Array;
}
export interface FileTreeNodeSDKType {
  node_type: string;
  contents: string;
}
function createBaseFileTreeNode(): FileTreeNode {
  return {
    nodeType: "",
    contents: ""
  };
}
export const FileTreeNode = {
  typeUrl: "/nebulix.filetree.v1.FileTreeNode",
  encode(message: FileTreeNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nodeType !== "") {
      writer.uint32(10).string(message.nodeType);
    }
    if (message.contents !== "") {
      writer.uint32(18).string(message.contents);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FileTreeNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileTreeNode();
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
  fromPartial(object: Partial<FileTreeNode>): FileTreeNode {
    const message = createBaseFileTreeNode();
    message.nodeType = object.nodeType ?? "";
    message.contents = object.contents ?? "";
    return message;
  },
  fromProtoMsg(message: FileTreeNodeProtoMsg): FileTreeNode {
    return FileTreeNode.decode(message.value);
  },
  toProto(message: FileTreeNode): Uint8Array {
    return FileTreeNode.encode(message).finish();
  },
  toProtoMsg(message: FileTreeNode): FileTreeNodeProtoMsg {
    return {
      typeUrl: "/nebulix.filetree.v1.FileTreeNode",
      value: FileTreeNode.encode(message).finish()
    };
  }
};