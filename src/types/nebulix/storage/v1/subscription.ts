import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
/** File defines the File message. */
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
 * @name StorageSubscriptionAmino
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.StorageSubscription
 */
export interface StorageSubscriptionAmino {
  id?: string;
  start?: string;
  end?: string;
  status?: string;
  spaceAvailable?: string;
  spaceUsed?: string;
  replicaSpaceUsed?: string;
  credits?: string;
}
export interface StorageSubscriptionAminoMsg {
  type: "/nebulix.storage.v1.StorageSubscription";
  value: StorageSubscriptionAmino;
}
/** File defines the File message. */
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
export const StorageSubscription = {
  typeUrl: "/nebulix.storage.v1.StorageSubscription",
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
  fromAmino(object: StorageSubscriptionAmino): StorageSubscription {
    const message = createBaseStorageSubscription();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = fromTimestamp(Timestamp.fromAmino(object.start));
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = fromTimestamp(Timestamp.fromAmino(object.end));
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.spaceAvailable !== undefined && object.spaceAvailable !== null) {
      message.spaceAvailable = BigInt(object.spaceAvailable);
    }
    if (object.spaceUsed !== undefined && object.spaceUsed !== null) {
      message.spaceUsed = BigInt(object.spaceUsed);
    }
    if (object.replicaSpaceUsed !== undefined && object.replicaSpaceUsed !== null) {
      message.replicaSpaceUsed = BigInt(object.replicaSpaceUsed);
    }
    if (object.credits !== undefined && object.credits !== null) {
      message.credits = object.credits;
    }
    return message;
  },
  toAmino(message: StorageSubscription): StorageSubscriptionAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.start = message.start ? Timestamp.toAmino(toTimestamp(message.start)) : undefined;
    obj.end = message.end ? Timestamp.toAmino(toTimestamp(message.end)) : undefined;
    obj.status = message.status === "" ? undefined : message.status;
    obj.spaceAvailable = message.spaceAvailable !== BigInt(0) ? message.spaceAvailable?.toString() : undefined;
    obj.spaceUsed = message.spaceUsed !== BigInt(0) ? message.spaceUsed?.toString() : undefined;
    obj.replicaSpaceUsed = message.replicaSpaceUsed !== BigInt(0) ? message.replicaSpaceUsed?.toString() : undefined;
    obj.credits = message.credits === "" ? undefined : message.credits;
    return obj;
  },
  fromAminoMsg(object: StorageSubscriptionAminoMsg): StorageSubscription {
    return StorageSubscription.fromAmino(object.value);
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
  }
};