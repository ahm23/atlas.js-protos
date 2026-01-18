//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgPostNode, MsgPostNodeResponse, MsgDeleteNode, MsgDeleteNodeResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** PostNode defines the PostNode RPC. */
  postNode(request: MsgPostNode): Promise<MsgPostNodeResponse>;
  /** DeleteNode defines the DeleteNode RPC. */
  deleteNode(request: MsgDeleteNode): Promise<MsgDeleteNodeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.postNode = this.postNode.bind(this);
    this.deleteNode = this.deleteNode.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("nebulix.filetree.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  postNode(request: MsgPostNode): Promise<MsgPostNodeResponse> {
    const data = MsgPostNode.encode(request).finish();
    const promise = this.rpc.request("nebulix.filetree.v1.Msg", "PostNode", data);
    return promise.then(data => MsgPostNodeResponse.decode(new BinaryReader(data)));
  }
  deleteNode(request: MsgDeleteNode): Promise<MsgDeleteNodeResponse> {
    const data = MsgDeleteNode.encode(request).finish();
    const promise = this.rpc.request("nebulix.filetree.v1.Msg", "DeleteNode", data);
    return promise.then(data => MsgDeleteNodeResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};