//@ts-nocheck
import * as _m0 from "protobufjs/minimal";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * Provider defines the Provider message.
 * @name Provider
 * @package atlas.storage.v1
 * @see proto type: atlas.storage.v1.Provider
 */
export interface Provider {
  address: string;
  hostname: string;
  spaceAvailable: number;
  spaceUsed: number;
  createdAt: number;
  creditDelta: number;
}
export interface ProviderProtoMsg {
  typeUrl: "/atlas.storage.v1.Provider";
  value: Uint8Array;
}
/**
 * Provider defines the Provider message.
 * @name ProviderSDKType
 * @package atlas.storage.v1
 * @see proto type: atlas.storage.v1.Provider
 */
export interface ProviderSDKType {
  address: string;
  hostname: string;
  space_available: number;
  space_used: number;
  created_at: number;
  credit_delta: number;
}
function createBaseProvider(): Provider {
  return {
    address: "",
    hostname: "",
    spaceAvailable: 0,
    spaceUsed: 0,
    createdAt: 0,
    creditDelta: 0
  };
}
/**
 * Provider defines the Provider message.
 * @name Provider
 * @package atlas.storage.v1
 * @see proto type: atlas.storage.v1.Provider
 */
export const Provider = {
  typeUrl: "/atlas.storage.v1.Provider",
  is(o: any): o is Provider {
    return o && (o.$typeUrl === Provider.typeUrl || typeof o.address === "string" && typeof o.hostname === "string" && typeof o.spaceAvailable === "bigint" && typeof o.spaceUsed === "bigint" && typeof o.createdAt === "bigint" && typeof o.creditDelta === "bigint");
  },
  isSDK(o: any): o is ProviderSDKType {
    return o && (o.$typeUrl === Provider.typeUrl || typeof o.address === "string" && typeof o.hostname === "string" && typeof o.space_available === "bigint" && typeof o.space_used === "bigint" && typeof o.created_at === "bigint" && typeof o.credit_delta === "bigint");
  },
  encode(message: Provider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.hostname !== "") {
      writer.uint32(18).string(message.hostname);
    }
    if (message.spaceAvailable !== 0) {
      writer.uint32(24).int64(message.spaceAvailable);
    }
    if (message.spaceUsed !== 0) {
      writer.uint32(32).int64(message.spaceUsed);
    }
    if (message.createdAt !== 0) {
      writer.uint32(40).int64(message.createdAt);
    }
    if (message.creditDelta !== 0) {
      writer.uint32(48).int64(message.creditDelta);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Provider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.spaceAvailable = Number(reader.int64().toString());
          break;
        case 4:
          message.spaceUsed = Number(reader.int64().toString());
          break;
        case 5:
          message.createdAt = Number(reader.int64().toString());
          break;
        case 6:
          message.creditDelta = Number(reader.int64().toString());
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
    message.spaceAvailable = object.spaceAvailable !== undefined && object.spaceAvailable !== null ? Number(object.spaceAvailable.toString()) : 0;
    message.spaceUsed = object.spaceUsed !== undefined && object.spaceUsed !== null ? Number(object.spaceUsed.toString()) : 0;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Number(object.createdAt.toString()) : 0;
    message.creditDelta = object.creditDelta !== undefined && object.creditDelta !== null ? Number(object.creditDelta.toString()) : 0;
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
      typeUrl: "/atlas.storage.v1.Provider",
      value: Provider.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(Provider.typeUrl, Provider);