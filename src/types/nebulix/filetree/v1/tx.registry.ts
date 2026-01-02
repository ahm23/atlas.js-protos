//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgPostNode, MsgDeleteNode } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/nebulix.filetree.v1.MsgUpdateParams", MsgUpdateParams], ["/nebulix.filetree.v1.MsgPostNode", MsgPostNode], ["/nebulix.filetree.v1.MsgDeleteNode", MsgDeleteNode]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/nebulix.filetree.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    postNode(value: MsgPostNode) {
      return {
        typeUrl: "/nebulix.filetree.v1.MsgPostNode",
        value: MsgPostNode.encode(value).finish()
      };
    },
    deleteNode(value: MsgDeleteNode) {
      return {
        typeUrl: "/nebulix.filetree.v1.MsgDeleteNode",
        value: MsgDeleteNode.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/nebulix.filetree.v1.MsgUpdateParams",
        value
      };
    },
    postNode(value: MsgPostNode) {
      return {
        typeUrl: "/nebulix.filetree.v1.MsgPostNode",
        value
      };
    },
    deleteNode(value: MsgDeleteNode) {
      return {
        typeUrl: "/nebulix.filetree.v1.MsgDeleteNode",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/nebulix.filetree.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    postNode(value: MsgPostNode) {
      return {
        typeUrl: "/nebulix.filetree.v1.MsgPostNode",
        value: MsgPostNode.fromPartial(value)
      };
    },
    deleteNode(value: MsgDeleteNode) {
      return {
        typeUrl: "/nebulix.filetree.v1.MsgDeleteNode",
        value: MsgDeleteNode.fromPartial(value)
      };
    }
  }
};