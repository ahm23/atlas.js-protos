//@ts-nocheck
import { buildTx } from "../../../helper-func-types";
import { MsgUpdateParams, MsgRegisterProvider, MsgPostFile, MsgBuyStorage, MsgProveFile } from "./tx";
/**
 * UpdateParams defines a (governance) operation for updating the module
 * parameters. The authority defaults to the x/gov module account.
 * @name updateParams
 * @package nebulix.storage.v1
 * @see proto service: nebulix.storage.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/**
 * @name registerProvider
 * @package nebulix.storage.v1
 * @see proto service: nebulix.storage.v1.RegisterProvider
 */
export const registerProvider = buildTx<MsgRegisterProvider>({
  msg: MsgRegisterProvider
});
/**
 * @name postFile
 * @package nebulix.storage.v1
 * @see proto service: nebulix.storage.v1.PostFile
 */
export const postFile = buildTx<MsgPostFile>({
  msg: MsgPostFile
});
/**
 * BuyStorage defines the BuyStorage RPC.
 * @name buyStorage
 * @package nebulix.storage.v1
 * @see proto service: nebulix.storage.v1.BuyStorage
 */
export const buyStorage = buildTx<MsgBuyStorage>({
  msg: MsgBuyStorage
});
/**
 * ProveFile defines the ProveFile RPC.
 * @name proveFile
 * @package nebulix.storage.v1
 * @see proto service: nebulix.storage.v1.ProveFile
 */
export const proveFile = buildTx<MsgProveFile>({
  msg: MsgProveFile
});