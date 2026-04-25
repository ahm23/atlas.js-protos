//@ts-nocheck
import * as _m0 from "protobufjs/minimal";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * @name AuthorityBundle
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.AuthorityBundle
 */
export interface AuthorityBundle {
  address: string;
  secret: string;
}
export interface AuthorityBundleProtoMsg {
  typeUrl: "/atlas.filetree.v1.AuthorityBundle";
  value: Uint8Array;
}
/**
 * @name AuthorityBundleSDKType
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.AuthorityBundle
 */
export interface AuthorityBundleSDKType {
  address: string;
  secret: string;
}
/**
 * @name TreeNode
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.TreeNode
 */
export interface TreeNode {
  nodeType: string;
  contents: string;
  viewers: AuthorityBundle[];
  editors: AuthorityBundle[];
}
export interface TreeNodeProtoMsg {
  typeUrl: "/atlas.filetree.v1.TreeNode";
  value: Uint8Array;
}
/**
 * @name TreeNodeSDKType
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.TreeNode
 */
export interface TreeNodeSDKType {
  node_type: string;
  contents: string;
  viewers: AuthorityBundleSDKType[];
  editors: AuthorityBundleSDKType[];
}
function createBaseAuthorityBundle(): AuthorityBundle {
  return {
    address: "",
    secret: ""
  };
}
/**
 * @name AuthorityBundle
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.AuthorityBundle
 */
export const AuthorityBundle = {
  typeUrl: "/atlas.filetree.v1.AuthorityBundle",
  is(o: any): o is AuthorityBundle {
    return o && (o.$typeUrl === AuthorityBundle.typeUrl || typeof o.address === "string" && typeof o.secret === "string");
  },
  isSDK(o: any): o is AuthorityBundleSDKType {
    return o && (o.$typeUrl === AuthorityBundle.typeUrl || typeof o.address === "string" && typeof o.secret === "string");
  },
  encode(message: AuthorityBundle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.secret !== "") {
      writer.uint32(18).string(message.secret);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AuthorityBundle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorityBundle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.secret = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AuthorityBundle>): AuthorityBundle {
    const message = createBaseAuthorityBundle();
    message.address = object.address ?? "";
    message.secret = object.secret ?? "";
    return message;
  },
  fromProtoMsg(message: AuthorityBundleProtoMsg): AuthorityBundle {
    return AuthorityBundle.decode(message.value);
  },
  toProto(message: AuthorityBundle): Uint8Array {
    return AuthorityBundle.encode(message).finish();
  },
  toProtoMsg(message: AuthorityBundle): AuthorityBundleProtoMsg {
    return {
      typeUrl: "/atlas.filetree.v1.AuthorityBundle",
      value: AuthorityBundle.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(AuthorityBundle.typeUrl, AuthorityBundle);
function createBaseTreeNode(): TreeNode {
  return {
    nodeType: "",
    contents: "",
    viewers: [],
    editors: []
  };
}
/**
 * @name TreeNode
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.TreeNode
 */
export const TreeNode = {
  typeUrl: "/atlas.filetree.v1.TreeNode",
  is(o: any): o is TreeNode {
    return o && (o.$typeUrl === TreeNode.typeUrl || typeof o.nodeType === "string" && typeof o.contents === "string" && Array.isArray(o.viewers) && (!o.viewers.length || AuthorityBundle.is(o.viewers[0])) && Array.isArray(o.editors) && (!o.editors.length || AuthorityBundle.is(o.editors[0])));
  },
  isSDK(o: any): o is TreeNodeSDKType {
    return o && (o.$typeUrl === TreeNode.typeUrl || typeof o.node_type === "string" && typeof o.contents === "string" && Array.isArray(o.viewers) && (!o.viewers.length || AuthorityBundle.isSDK(o.viewers[0])) && Array.isArray(o.editors) && (!o.editors.length || AuthorityBundle.isSDK(o.editors[0])));
  },
  encode(message: TreeNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeType !== "") {
      writer.uint32(10).string(message.nodeType);
    }
    if (message.contents !== "") {
      writer.uint32(18).string(message.contents);
    }
    for (const v of message.viewers) {
      AuthorityBundle.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.editors) {
      AuthorityBundle.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TreeNode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTreeNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeType = reader.string();
          break;
        case 2:
          message.contents = reader.string();
          break;
        case 3:
          message.viewers.push(AuthorityBundle.decode(reader, reader.uint32()));
          break;
        case 4:
          message.editors.push(AuthorityBundle.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TreeNode>): TreeNode {
    const message = createBaseTreeNode();
    message.nodeType = object.nodeType ?? "";
    message.contents = object.contents ?? "";
    message.viewers = object.viewers?.map(e => AuthorityBundle.fromPartial(e)) || [];
    message.editors = object.editors?.map(e => AuthorityBundle.fromPartial(e)) || [];
    return message;
  },
  fromProtoMsg(message: TreeNodeProtoMsg): TreeNode {
    return TreeNode.decode(message.value);
  },
  toProto(message: TreeNode): Uint8Array {
    return TreeNode.encode(message).finish();
  },
  toProtoMsg(message: TreeNode): TreeNodeProtoMsg {
    return {
      typeUrl: "/atlas.filetree.v1.TreeNode",
      value: TreeNode.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(TreeNode.typeUrl)) {
      return;
    }
    AuthorityBundle.registerTypeUrl();
  }
};
GlobalDecoderRegistry.register(TreeNode.typeUrl, TreeNode);