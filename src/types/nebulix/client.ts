//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as nebulixFiletreeV1TxRegistry from "./filetree/v1/tx.registry";
import * as nebulixStorageV1TxRegistry from "./storage/v1/tx.registry";

export const nebulixProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...nebulixFiletreeV1TxRegistry.registry, ...nebulixStorageV1TxRegistry.registry];
export const getSigningNebulixClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
} => {
  const registry = new Registry([...defaultTypes, ...nebulixProtoRegistry]);
  return {
    registry
  };
};
export const getSigningNebulixClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry
  } = getSigningNebulixClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any
  });
  return client;
};