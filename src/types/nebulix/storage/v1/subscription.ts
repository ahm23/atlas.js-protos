//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * File defines the File message.
 * @name StorageSubscription
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.StorageSubscription
 */
export interface StorageSubscription {
  id: string;
  start: Date;
  end: Date;
  status: string;
  spaceAvailable: bigint;
  spaceUsed: bigint;
  replicaSpaceUsed: bigint;
  credits: string;
}
export interface StorageSubscriptionProtoMsg {
  typeUrl: "/nebulix.storage.v1.StorageSubscription";
  value: Uint8Array;
}
/**
 * File defines the File message.
 * @name StorageSubscriptionSDKType
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.StorageSubscription
 */
export interface StorageSubscriptionSDKType {
  id: string;
  start: Date;
  end: Date;
  status: string;
  spaceAvailable: bigint;
  spaceUsed: bigint;
  replicaSpaceUsed: bigint;
  credits: string;
}
function createBaseStorageSubscription(): StorageSubscription {
  return {
    id: "",
    start: new Date(),
    end: new Date(),
    status: "",
    spaceAvailable: BigInt(0),
    spaceUsed: BigInt(0),
    replicaSpaceUsed: BigInt(0),
    credits: ""
  };
}
/**
 * File defines the File message.
 * @name StorageSubscription
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.StorageSubscription
 */
export const StorageSubscription = {
  typeUrl: "/nebulix.storage.v1.StorageSubscription",
  is(o: any): o is StorageSubscription {
    return o && (o.$typeUrl === StorageSubscription.typeUrl || typeof o.id === "string" && Timestamp.is(o.start) && Timestamp.is(o.end) && typeof o.status === "string" && typeof o.spaceAvailable === "bigint" && typeof o.spaceUsed === "bigint" && typeof o.replicaSpaceUsed === "bigint" && typeof o.credits === "string");
  },
  isSDK(o: any): o is StorageSubscriptionSDKType {
    return o && (o.$typeUrl === StorageSubscription.typeUrl || typeof o.id === "string" && Timestamp.isSDK(o.start) && Timestamp.isSDK(o.end) && typeof o.status === "string" && typeof o.spaceAvailable === "bigint" && typeof o.spaceUsed === "bigint" && typeof o.replicaSpaceUsed === "bigint" && typeof o.credits === "string");
  },
  encode(message: StorageSubscription, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.start !== undefined) {
      Timestamp.encode(toTimestamp(message.start), writer.uint32(18).fork()).ldelim();
    }
    if (message.end !== undefined) {
      Timestamp.encode(toTimestamp(message.end), writer.uint32(26).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(34).string(message.status);
    }
    if (message.spaceAvailable !== BigInt(0)) {
      writer.uint32(40).int64(message.spaceAvailable);
    }
    if (message.spaceUsed !== BigInt(0)) {
      writer.uint32(48).int64(message.spaceUsed);
    }
    if (message.replicaSpaceUsed !== BigInt(0)) {
      writer.uint32(56).int64(message.replicaSpaceUsed);
    }
    if (message.credits !== "") {
      writer.uint32(66).string(message.credits);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StorageSubscription {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.start = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.end = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.status = reader.string();
          break;
        case 5:
          message.spaceAvailable = reader.int64();
          break;
        case 6:
          message.spaceUsed = reader.int64();
          break;
        case 7:
          message.replicaSpaceUsed = reader.int64();
          break;
        case 8:
          message.credits = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StorageSubscription>): StorageSubscription {
    const message = createBaseStorageSubscription();
    message.id = object.id ?? "";
    message.start = object.start ?? undefined;
    message.end = object.end ?? undefined;
    message.status = object.status ?? "";
    message.spaceAvailable = object.spaceAvailable !== undefined && object.spaceAvailable !== null ? BigInt(object.spaceAvailable.toString()) : BigInt(0);
    message.spaceUsed = object.spaceUsed !== undefined && object.spaceUsed !== null ? BigInt(object.spaceUsed.toString()) : BigInt(0);
    message.replicaSpaceUsed = object.replicaSpaceUsed !== undefined && object.replicaSpaceUsed !== null ? BigInt(object.replicaSpaceUsed.toString()) : BigInt(0);
    message.credits = object.credits ?? "";
    return message;
  },
  fromProtoMsg(message: StorageSubscriptionProtoMsg): StorageSubscription {
    return StorageSubscription.decode(message.value);
  },
  toProto(message: StorageSubscription): Uint8Array {
    return StorageSubscription.encode(message).finish();
  },
  toProtoMsg(message: StorageSubscription): StorageSubscriptionProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.StorageSubscription",
      value: StorageSubscription.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(StorageSubscription.typeUrl, StorageSubscription);