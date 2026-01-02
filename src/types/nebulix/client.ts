//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as nebulixFiletreeV1TxRegistry from "./filetree/v1/tx.registry";
import * as nebulixStorageV1TxRegistry from "./storage/v1/tx.registry";
import * as nebulixFiletreeV1TxAmino from "./filetree/v1/tx.amino";
import * as nebulixStorageV1TxAmino from "./storage/v1/tx.amino";
export const nebulixAminoConverters = {
  ...nebulixFiletreeV1TxAmino.AminoConverter,
  ...nebulixStorageV1TxAmino.AminoConverter
};
export const nebulixProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...nebulixFiletreeV1TxRegistry.registry, ...nebulixStorageV1TxRegistry.registry];
export const getSigningNebulixClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...nebulixProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...nebulixAminoConverters
  });
  return {
    registry,
    aminoTypes
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
    registry,
    aminoTypes
  } = getSigningNebulixClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};