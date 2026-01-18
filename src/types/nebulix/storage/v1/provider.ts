//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * Provider defines the Provider message.
 * @name Provider
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.Provider
 */
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
 * @name ProviderSDKType
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.Provider
 */
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
/**
 * Provider defines the Provider message.
 * @name Provider
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.Provider
 */
export const Provider = {
  typeUrl: "/nebulix.storage.v1.Provider",
  is(o: any): o is Provider {
    return o && (o.$typeUrl === Provider.typeUrl || typeof o.address === "string" && typeof o.hostname === "string" && typeof o.spaceAvailable === "bigint" && typeof o.spaceUsed === "bigint" && typeof o.createdAt === "bigint" && typeof o.creditDelta === "bigint");
  },
  isSDK(o: any): o is ProviderSDKType {
    return o && (o.$typeUrl === Provider.typeUrl || typeof o.address === "string" && typeof o.hostname === "string" && typeof o.space_available === "bigint" && typeof o.space_used === "bigint" && typeof o.created_at === "bigint" && typeof o.credit_delta === "bigint");
  },
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
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(Provider.typeUrl, Provider);