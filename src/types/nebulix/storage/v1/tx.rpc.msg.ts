//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgRegisterProvider, MsgRegisterProviderResponse, MsgPostFile, MsgPostFileResponse, MsgBuyStorage, MsgBuyStorageResponse, MsgProveFile, MsgProveFileResponse, MsgDeleteFile, MsgDeleteFileResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  registerProvider(request: MsgRegisterProvider): Promise<MsgRegisterProviderResponse>;
  postFile(request: MsgPostFile): Promise<MsgPostFileResponse>;
  /** BuyStorage defines the BuyStorage RPC. */
  buyStorage(request: MsgBuyStorage): Promise<MsgBuyStorageResponse>;
  /** ProveFile defines the ProveFile RPC. */
  proveFile(request: MsgProveFile): Promise<MsgProveFileResponse>;
  /** DeleteFile defines the DeleteFile RPC. */
  deleteFile(request: MsgDeleteFile): Promise<MsgDeleteFileResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.registerProvider = this.registerProvider.bind(this);
    this.postFile = this.postFile.bind(this);
    this.buyStorage = this.buyStorage.bind(this);
    this.proveFile = this.proveFile.bind(this);
    this.deleteFile = this.deleteFile.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("nebulix.storage.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  registerProvider(request: MsgRegisterProvider): Promise<MsgRegisterProviderResponse> {
    const data = MsgRegisterProvider.encode(request).finish();
    const promise = this.rpc.request("nebulix.storage.v1.Msg", "RegisterProvider", data);
    return promise.then(data => MsgRegisterProviderResponse.decode(new BinaryReader(data)));
  }
  postFile(request: MsgPostFile): Promise<MsgPostFileResponse> {
    const data = MsgPostFile.encode(request).finish();
    const promise = this.rpc.request("nebulix.storage.v1.Msg", "PostFile", data);
    return promise.then(data => MsgPostFileResponse.decode(new BinaryReader(data)));
  }
  buyStorage(request: MsgBuyStorage): Promise<MsgBuyStorageResponse> {
    const data = MsgBuyStorage.encode(request).finish();
    const promise = this.rpc.request("nebulix.storage.v1.Msg", "BuyStorage", data);
    return promise.then(data => MsgBuyStorageResponse.decode(new BinaryReader(data)));
  }
  proveFile(request: MsgProveFile): Promise<MsgProveFileResponse> {
    const data = MsgProveFile.encode(request).finish();
    const promise = this.rpc.request("nebulix.storage.v1.Msg", "ProveFile", data);
    return promise.then(data => MsgProveFileResponse.decode(new BinaryReader(data)));
  }
  deleteFile(request: MsgDeleteFile): Promise<MsgDeleteFileResponse> {
    const data = MsgDeleteFile.encode(request).finish();
    const promise = this.rpc.request("nebulix.storage.v1.Msg", "DeleteFile", data);
    return promise.then(data => MsgDeleteFileResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};