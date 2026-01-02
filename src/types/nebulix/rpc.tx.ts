//@ts-nocheck
import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  nebulix: {
    storage: {
      v1: new (await import("./storage/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});