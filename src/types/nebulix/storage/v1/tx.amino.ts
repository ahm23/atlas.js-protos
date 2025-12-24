//@ts-nocheck
import { MsgUpdateParams, MsgRegisterProvider, MsgPostFile, MsgBuyStorage, MsgProveFile } from "./tx";
export const AminoConverter = {
  "/nebulix.storage.v1.MsgUpdateParams": {
    aminoType: "nebulix/x/storage/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/nebulix.storage.v1.MsgRegisterProvider": {
    aminoType: "/nebulix.storage.v1.MsgRegisterProvider",
    toAmino: MsgRegisterProvider.toAmino,
    fromAmino: MsgRegisterProvider.fromAmino
  },
  "/nebulix.storage.v1.MsgPostFile": {
    aminoType: "/nebulix.storage.v1.MsgPostFile",
    toAmino: MsgPostFile.toAmino,
    fromAmino: MsgPostFile.fromAmino
  },
  "/nebulix.storage.v1.MsgBuyStorage": {
    aminoType: "/nebulix.storage.v1.MsgBuyStorage",
    toAmino: MsgBuyStorage.toAmino,
    fromAmino: MsgBuyStorage.fromAmino
  },
  "/nebulix.storage.v1.MsgProveFile": {
    aminoType: "/nebulix.storage.v1.MsgProveFile",
    toAmino: MsgProveFile.toAmino,
    fromAmino: MsgProveFile.fromAmino
  }
};