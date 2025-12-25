import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  nebulix: {
    storage: {
      v1: new (await import("./storage/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});