//@ts-nocheck
import { buildTx } from "../../../helper-func-types";
import { MsgUpdateParams, MsgRegisterProvider, MsgPostFile, MsgBuyStorage, MsgProveFile, MsgDeleteFile, MsgExpandStorage } from "./tx";
/**
 * UpdateParams defines a (governance) operation for updating the module
 * parameters. The authority defaults to the x/gov module account.
 * @name updateParams
 * @package atlas.storage.v1
 * @see proto service: atlas.storage.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/**
 * @name registerProvider
 * @package atlas.storage.v1
 * @see proto service: atlas.storage.v1.RegisterProvider
 */
export const registerProvider = buildTx<MsgRegisterProvider>({
  msg: MsgRegisterProvider
});
/**
 * @name postFile
 * @package atlas.storage.v1
 * @see proto service: atlas.storage.v1.PostFile
 */
export const postFile = buildTx<MsgPostFile>({
  msg: MsgPostFile
});
/**
 * BuyStorage defines the BuyStorage RPC.
 * @name buyStorage
 * @package atlas.storage.v1
 * @see proto service: atlas.storage.v1.BuyStorage
 */
export const buyStorage = buildTx<MsgBuyStorage>({
  msg: MsgBuyStorage
});
/**
 * ProveFile defines the ProveFile RPC.
 * @name proveFile
 * @package atlas.storage.v1
 * @see proto service: atlas.storage.v1.ProveFile
 */
export const proveFile = buildTx<MsgProveFile>({
  msg: MsgProveFile
});
/**
 * DeleteFile defines the DeleteFile RPC.
 * @name deleteFile
 * @package atlas.storage.v1
 * @see proto service: atlas.storage.v1.DeleteFile
 */
export const deleteFile = buildTx<MsgDeleteFile>({
  msg: MsgDeleteFile
});
/**
 * ExpandStorage defines the ExpandStorage RPC.
 * @name expandStorage
 * @package atlas.storage.v1
 * @see proto service: atlas.storage.v1.ExpandStorage
 */
export const expandStorage = buildTx<MsgExpandStorage>({
  msg: MsgExpandStorage
});