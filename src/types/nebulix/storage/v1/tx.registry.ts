//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgRegisterProvider, MsgPostFile, MsgBuyStorage, MsgProveFile } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/nebulix.storage.v1.MsgUpdateParams", MsgUpdateParams], ["/nebulix.storage.v1.MsgRegisterProvider", MsgRegisterProvider], ["/nebulix.storage.v1.MsgPostFile", MsgPostFile], ["/nebulix.storage.v1.MsgBuyStorage", MsgBuyStorage], ["/nebulix.storage.v1.MsgProveFile", MsgProveFile]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/nebulix.storage.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    registerProvider(value: MsgRegisterProvider) {
      return {
        typeUrl: "/nebulix.storage.v1.MsgRegisterProvider",
        value: MsgRegisterProvider.encode(value).finish()
      };
    },
    postFile(value: MsgPostFile) {
      return {
        typeUrl: "/nebulix.storage.v1.MsgPostFile",
        value: MsgPostFile.encode(value).finish()
      };
    },
    buyStorage(value: MsgBuyStorage) {
      return {
        typeUrl: "/nebulix.storage.v1.MsgBuyStorage",
        value: MsgBuyStorage.encode(value).finish()
      };
    },
    proveFile(value: MsgProveFile) {
      return {
        typeUrl: "/nebulix.storage.v1.MsgProveFile",
        value: MsgProveFile.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/nebulix.storage.v1.MsgUpdateParams",
        value
      };
    },
    registerProvider(value: MsgRegisterProvider) {
      return {
        typeUrl: "/nebulix.storage.v1.MsgRegisterProvider",
        value
      };
    },
    postFile(value: MsgPostFile) {
      return {
        typeUrl: "/nebulix.storage.v1.MsgPostFile",
        value
      };
    },
    buyStorage(value: MsgBuyStorage) {
      return {
        typeUrl: "/nebulix.storage.v1.MsgBuyStorage",
        value
      };
    },
    proveFile(value: MsgProveFile) {
      return {
        typeUrl: "/nebulix.storage.v1.MsgProveFile",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/nebulix.storage.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    registerProvider(value: MsgRegisterProvider) {
      return {
        typeUrl: "/nebulix.storage.v1.MsgRegisterProvider",
        value: MsgRegisterProvider.fromPartial(value)
      };
    },
    postFile(value: MsgPostFile) {
      return {
        typeUrl: "/nebulix.storage.v1.MsgPostFile",
        value: MsgPostFile.fromPartial(value)
      };
    },
    buyStorage(value: MsgBuyStorage) {
      return {
        typeUrl: "/nebulix.storage.v1.MsgBuyStorage",
        value: MsgBuyStorage.fromPartial(value)
      };
    },
    proveFile(value: MsgProveFile) {
      return {
        typeUrl: "/nebulix.storage.v1.MsgProveFile",
        value: MsgProveFile.fromPartial(value)
      };
    }
  }
};