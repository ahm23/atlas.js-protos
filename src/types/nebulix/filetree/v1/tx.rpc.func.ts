//@ts-nocheck
import { buildTx } from "../../../helper-func-types";
import { MsgUpdateParams, MsgPostNode, MsgDeleteNode } from "./tx";
/**
 * UpdateParams defines a (governance) operation for updating the module
 * parameters. The authority defaults to the x/gov module account.
 * @name updateParams
 * @package nebulix.filetree.v1
 * @see proto service: nebulix.filetree.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/**
 * PostNode defines the PostNode RPC.
 * @name postNode
 * @package nebulix.filetree.v1
 * @see proto service: nebulix.filetree.v1.PostNode
 */
export const postNode = buildTx<MsgPostNode>({
  msg: MsgPostNode
});
/**
 * DeleteNode defines the DeleteNode RPC.
 * @name deleteNode
 * @package nebulix.filetree.v1
 * @see proto service: nebulix.filetree.v1.DeleteNode
 */
export const deleteNode = buildTx<MsgDeleteNode>({
  msg: MsgDeleteNode
});