//@ts-nocheck
import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  nebulix: {
    filetree: {
      v1: new (await import("../atlas/filetree/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    storage: {
      v1: new (await import("../atlas/storage/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  cosmos: {
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});