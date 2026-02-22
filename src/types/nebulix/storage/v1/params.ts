//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.Params
 */
export interface Params {
  pricePerGbDay: bigint;
  providerDeposit: bigint;
  proofWindowBlocks: bigint;
  proofRoundBlocks: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/nebulix.storage.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsSDKType
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.Params
 */
export interface ParamsSDKType {
  price_per_gb_day: bigint;
  provider_deposit: bigint;
  proof_window_blocks: bigint;
  proof_round_blocks: bigint;
}
function createBaseParams(): Params {
  return {
    pricePerGbDay: BigInt(0),
    providerDeposit: BigInt(0),
    proofWindowBlocks: BigInt(0),
    proofRoundBlocks: BigInt(0)
  };
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.Params
 */
export const Params = {
  typeUrl: "/nebulix.storage.v1.Params",
  aminoType: "nebulix/x/storage/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.pricePerGbDay === "bigint" && typeof o.providerDeposit === "bigint" && typeof o.proofWindowBlocks === "bigint" && typeof o.proofRoundBlocks === "bigint");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.price_per_gb_day === "bigint" && typeof o.provider_deposit === "bigint" && typeof o.proof_window_blocks === "bigint" && typeof o.proof_round_blocks === "bigint");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pricePerGbDay !== BigInt(0)) {
      writer.uint32(8).int64(message.pricePerGbDay);
    }
    if (message.providerDeposit !== BigInt(0)) {
      writer.uint32(16).int64(message.providerDeposit);
    }
    if (message.proofWindowBlocks !== BigInt(0)) {
      writer.uint32(24).uint64(message.proofWindowBlocks);
    }
    if (message.proofRoundBlocks !== BigInt(0)) {
      writer.uint32(32).uint64(message.proofRoundBlocks);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pricePerGbDay = reader.int64();
          break;
        case 2:
          message.providerDeposit = reader.int64();
          break;
        case 3:
          message.proofWindowBlocks = reader.uint64();
          break;
        case 4:
          message.proofRoundBlocks = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.pricePerGbDay = object.pricePerGbDay !== undefined && object.pricePerGbDay !== null ? BigInt(object.pricePerGbDay.toString()) : BigInt(0);
    message.providerDeposit = object.providerDeposit !== undefined && object.providerDeposit !== null ? BigInt(object.providerDeposit.toString()) : BigInt(0);
    message.proofWindowBlocks = object.proofWindowBlocks !== undefined && object.proofWindowBlocks !== null ? BigInt(object.proofWindowBlocks.toString()) : BigInt(0);
    message.proofRoundBlocks = object.proofRoundBlocks !== undefined && object.proofRoundBlocks !== null ? BigInt(object.proofRoundBlocks.toString()) : BigInt(0);
    return message;
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);