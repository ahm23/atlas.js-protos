import { BinaryReader, BinaryWriter } from "../../../binary";
/** Provider defines the Provider message. */
export interface Provider {
  address: string;
  hostname: string;
  spaceAvailable: bigint;
  spaceUsed: bigint;
  createdAt: bigint;
  creditDelta: bigint;
}
export interface ProviderProtoMsg {
  typeUrl: "/nebulix.storage.v1.Provider";
  value: Uint8Array;
}
/**
 * Provider defines the Provider message.
 * @name ProviderAmino
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.Provider
 */
export interface ProviderAmino {
  address?: string;
  hostname?: string;
  space_available?: string;
  space_used?: string;
  created_at?: string;
  credit_delta?: string;
}
export interface ProviderAminoMsg {
  type: "/nebulix.storage.v1.Provider";
  value: ProviderAmino;
}
/** Provider defines the Provider message. */
export interface ProviderSDKType {
  address: string;
  hostname: string;
  space_available: bigint;
  space_used: bigint;
  created_at: bigint;
  credit_delta: bigint;
}
function createBaseProvider(): Provider {
  return {
    address: "",
    hostname: "",
    spaceAvailable: BigInt(0),
    spaceUsed: BigInt(0),
    createdAt: BigInt(0),
    creditDelta: BigInt(0)
  };
}
export const Provider = {
  typeUrl: "/nebulix.storage.v1.Provider",
  encode(message: Provider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.hostname !== "") {
      writer.uint32(18).string(message.hostname);
    }
    if (message.spaceAvailable !== BigInt(0)) {
      writer.uint32(24).int64(message.spaceAvailable);
    }
    if (message.spaceUsed !== BigInt(0)) {
      writer.uint32(32).int64(message.spaceUsed);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(40).int64(message.createdAt);
    }
    if (message.creditDelta !== BigInt(0)) {
      writer.uint32(48).int64(message.creditDelta);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Provider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.hostname = reader.string();
          break;
        case 3:
          message.spaceAvailable = reader.int64();
          break;
        case 4:
          message.spaceUsed = reader.int64();
          break;
        case 5:
          message.createdAt = reader.int64();
          break;
        case 6:
          message.creditDelta = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Provider>): Provider {
    const message = createBaseProvider();
    message.address = object.address ?? "";
    message.hostname = object.hostname ?? "";
    message.spaceAvailable = object.spaceAvailable !== undefined && object.spaceAvailable !== null ? BigInt(object.spaceAvailable.toString()) : BigInt(0);
    message.spaceUsed = object.spaceUsed !== undefined && object.spaceUsed !== null ? BigInt(object.spaceUsed.toString()) : BigInt(0);
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.creditDelta = object.creditDelta !== undefined && object.creditDelta !== null ? BigInt(object.creditDelta.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ProviderAmino): Provider {
    const message = createBaseProvider();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.hostname !== undefined && object.hostname !== null) {
      message.hostname = object.hostname;
    }
    if (object.space_available !== undefined && object.space_available !== null) {
      message.spaceAvailable = BigInt(object.space_available);
    }
    if (object.space_used !== undefined && object.space_used !== null) {
      message.spaceUsed = BigInt(object.space_used);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.credit_delta !== undefined && object.credit_delta !== null) {
      message.creditDelta = BigInt(object.credit_delta);
    }
    return message;
  },
  toAmino(message: Provider): ProviderAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.hostname = message.hostname === "" ? undefined : message.hostname;
    obj.space_available = message.spaceAvailable !== BigInt(0) ? message.spaceAvailable?.toString() : undefined;
    obj.space_used = message.spaceUsed !== BigInt(0) ? message.spaceUsed?.toString() : undefined;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.credit_delta = message.creditDelta !== BigInt(0) ? message.creditDelta?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProviderAminoMsg): Provider {
    return Provider.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderProtoMsg): Provider {
    return Provider.decode(message.value);
  },
  toProto(message: Provider): Uint8Array {
    return Provider.encode(message).finish();
  },
  toProtoMsg(message: Provider): ProviderProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.Provider",
      value: Provider.encode(message).finish()
    };
  }
};