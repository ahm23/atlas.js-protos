//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  pricePerGbDay: bigint;
  providerDeposit: bigint;
  challengeWindow: bigint;
  maxChallengesPerRound: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/nebulix.storage.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  price_per_gb_day: bigint;
  provider_deposit: bigint;
  challenge_window: bigint;
  max_challenges_per_round: bigint;
}
function createBaseParams(): Params {
  return {
    pricePerGbDay: BigInt(0),
    providerDeposit: BigInt(0),
    challengeWindow: BigInt(0),
    maxChallengesPerRound: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/nebulix.storage.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pricePerGbDay !== BigInt(0)) {
      writer.uint32(8).int64(message.pricePerGbDay);
    }
    if (message.providerDeposit !== BigInt(0)) {
      writer.uint32(16).int64(message.providerDeposit);
    }
    if (message.challengeWindow !== BigInt(0)) {
      writer.uint32(24).int64(message.challengeWindow);
    }
    if (message.maxChallengesPerRound !== BigInt(0)) {
      writer.uint32(32).int64(message.maxChallengesPerRound);
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
          message.challengeWindow = reader.int64();
          break;
        case 4:
          message.maxChallengesPerRound = reader.int64();
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
    message.challengeWindow = object.challengeWindow !== undefined && object.challengeWindow !== null ? BigInt(object.challengeWindow.toString()) : BigInt(0);
    message.maxChallengesPerRound = object.maxChallengesPerRound !== undefined && object.maxChallengesPerRound !== null ? BigInt(object.maxChallengesPerRound.toString()) : BigInt(0);
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
  }
};