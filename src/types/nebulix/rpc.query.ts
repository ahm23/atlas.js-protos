//@ts-nocheck
import { connectComet, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await connectComet(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    },
    nebulix: {
      filetree: {
        v1: (await import("./filetree/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      storage: {
        v1: (await import("./storage/v1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    }
  };
};