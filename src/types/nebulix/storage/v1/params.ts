//@ts-nocheck
import * as _m0 from "protobufjs/minimal";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.Params
 */
export interface Params {
  pricePerGbDay: number;
  providerDeposit: number;
  proofWindowBlocks: number;
  proofRoundBlocks: number;
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
  price_per_gb_day: number;
  provider_deposit: number;
  proof_window_blocks: number;
  proof_round_blocks: number;
}
function createBaseParams(): Params {
  return {
    pricePerGbDay: 0,
    providerDeposit: 0,
    proofWindowBlocks: 0,
    proofRoundBlocks: 0
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
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pricePerGbDay !== 0) {
      writer.uint32(8).int64(message.pricePerGbDay);
    }
    if (message.providerDeposit !== 0) {
      writer.uint32(16).int64(message.providerDeposit);
    }
    if (message.proofWindowBlocks !== 0) {
      writer.uint32(24).uint64(message.proofWindowBlocks);
    }
    if (message.proofRoundBlocks !== 0) {
      writer.uint32(32).uint64(message.proofRoundBlocks);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pricePerGbDay = Number(reader.int64().toString());
          break;
        case 2:
          message.providerDeposit = Number(reader.int64().toString());
          break;
        case 3:
          message.proofWindowBlocks = Number(reader.uint64().toString());
          break;
        case 4:
          message.proofRoundBlocks = Number(reader.uint64().toString());
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
    message.pricePerGbDay = object.pricePerGbDay !== undefined && object.pricePerGbDay !== null ? Number(object.pricePerGbDay.toString()) : 0;
    message.providerDeposit = object.providerDeposit !== undefined && object.providerDeposit !== null ? Number(object.providerDeposit.toString()) : 0;
    message.proofWindowBlocks = object.proofWindowBlocks !== undefined && object.proofWindowBlocks !== null ? Number(object.proofWindowBlocks.toString()) : 0;
    message.proofRoundBlocks = object.proofRoundBlocks !== undefined && object.proofRoundBlocks !== null ? Number(object.proofRoundBlocks.toString()) : 0;
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