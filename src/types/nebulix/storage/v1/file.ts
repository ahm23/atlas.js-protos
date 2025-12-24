import { BinaryReader, BinaryWriter } from "../../../binary";
/** File defines the File message. */
export interface File {
  fileId: string;
  merkle: string;
  creator: string;
  subscription: string;
  status: string;
  fileSize: bigint;
  replicas: bigint;
  providers: string[];
  start: bigint;
  dedupeIndex: bigint;
  lastChallengedHeight: bigint;
}
export interface FileProtoMsg {
  typeUrl: "/nebulix.storage.v1.File";
  value: Uint8Array;
}
/**
 * File defines the File message.
 * @name FileAmino
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.File
 */
export interface FileAmino {
  file_id?: string;
  merkle?: string;
  creator?: string;
  subscription?: string;
  status?: string;
  file_size?: string;
  replicas?: string;
  providers?: string[];
  start?: string;
  dedupe_index?: string;
  last_challenged_height?: string;
}
export interface FileAminoMsg {
  type: "/nebulix.storage.v1.File";
  value: FileAmino;
}
/** File defines the File message. */
export interface FileSDKType {
  file_id: string;
  merkle: string;
  creator: string;
  subscription: string;
  status: string;
  file_size: bigint;
  replicas: bigint;
  providers: string[];
  start: bigint;
  dedupe_index: bigint;
  last_challenged_height: bigint;
}
function createBaseFile(): File {
  return {
    fileId: "",
    merkle: "",
    creator: "",
    subscription: "",
    status: "",
    fileSize: BigInt(0),
    replicas: BigInt(0),
    providers: [],
    start: BigInt(0),
    dedupeIndex: BigInt(0),
    lastChallengedHeight: BigInt(0)
  };
}
export const File = {
  typeUrl: "/nebulix.storage.v1.File",
  encode(message: File, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fileId !== "") {
      writer.uint32(10).string(message.fileId);
    }
    if (message.merkle !== "") {
      writer.uint32(18).string(message.merkle);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.subscription !== "") {
      writer.uint32(34).string(message.subscription);
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    if (message.fileSize !== BigInt(0)) {
      writer.uint32(48).int64(message.fileSize);
    }
    if (message.replicas !== BigInt(0)) {
      writer.uint32(56).int64(message.replicas);
    }
    for (const v of message.providers) {
      writer.uint32(66).string(v!);
    }
    if (message.start !== BigInt(0)) {
      writer.uint32(72).int64(message.start);
    }
    if (message.dedupeIndex !== BigInt(0)) {
      writer.uint32(80).int64(message.dedupeIndex);
    }
    if (message.lastChallengedHeight !== BigInt(0)) {
      writer.uint32(88).int64(message.lastChallengedHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): File {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileId = reader.string();
          break;
        case 2:
          message.merkle = reader.string();
          break;
        case 3:
          message.creator = reader.string();
          break;
        case 4:
          message.subscription = reader.string();
          break;
        case 5:
          message.status = reader.string();
          break;
        case 6:
          message.fileSize = reader.int64();
          break;
        case 7:
          message.replicas = reader.int64();
          break;
        case 8:
          message.providers.push(reader.string());
          break;
        case 9:
          message.start = reader.int64();
          break;
        case 10:
          message.dedupeIndex = reader.int64();
          break;
        case 11:
          message.lastChallengedHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<File>): File {
    const message = createBaseFile();
    message.fileId = object.fileId ?? "";
    message.merkle = object.merkle ?? "";
    message.creator = object.creator ?? "";
    message.subscription = object.subscription ?? "";
    message.status = object.status ?? "";
    message.fileSize = object.fileSize !== undefined && object.fileSize !== null ? BigInt(object.fileSize.toString()) : BigInt(0);
    message.replicas = object.replicas !== undefined && object.replicas !== null ? BigInt(object.replicas.toString()) : BigInt(0);
    message.providers = object.providers?.map(e => e) || [];
    message.start = object.start !== undefined && object.start !== null ? BigInt(object.start.toString()) : BigInt(0);
    message.dedupeIndex = object.dedupeIndex !== undefined && object.dedupeIndex !== null ? BigInt(object.dedupeIndex.toString()) : BigInt(0);
    message.lastChallengedHeight = object.lastChallengedHeight !== undefined && object.lastChallengedHeight !== null ? BigInt(object.lastChallengedHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FileAmino): File {
    const message = createBaseFile();
    if (object.file_id !== undefined && object.file_id !== null) {
      message.fileId = object.file_id;
    }
    if (object.merkle !== undefined && object.merkle !== null) {
      message.merkle = object.merkle;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.subscription !== undefined && object.subscription !== null) {
      message.subscription = object.subscription;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.file_size !== undefined && object.file_size !== null) {
      message.fileSize = BigInt(object.file_size);
    }
    if (object.replicas !== undefined && object.replicas !== null) {
      message.replicas = BigInt(object.replicas);
    }
    message.providers = object.providers?.map(e => e) || [];
    if (object.start !== undefined && object.start !== null) {
      message.start = BigInt(object.start);
    }
    if (object.dedupe_index !== undefined && object.dedupe_index !== null) {
      message.dedupeIndex = BigInt(object.dedupe_index);
    }
    if (object.last_challenged_height !== undefined && object.last_challenged_height !== null) {
      message.lastChallengedHeight = BigInt(object.last_challenged_height);
    }
    return message;
  },
  toAmino(message: File): FileAmino {
    const obj: any = {};
    obj.file_id = message.fileId === "" ? undefined : message.fileId;
    obj.merkle = message.merkle === "" ? undefined : message.merkle;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.subscription = message.subscription === "" ? undefined : message.subscription;
    obj.status = message.status === "" ? undefined : message.status;
    obj.file_size = message.fileSize !== BigInt(0) ? message.fileSize?.toString() : undefined;
    obj.replicas = message.replicas !== BigInt(0) ? message.replicas?.toString() : undefined;
    if (message.providers) {
      obj.providers = message.providers.map(e => e);
    } else {
      obj.providers = message.providers;
    }
    obj.start = message.start !== BigInt(0) ? message.start?.toString() : undefined;
    obj.dedupe_index = message.dedupeIndex !== BigInt(0) ? message.dedupeIndex?.toString() : undefined;
    obj.last_challenged_height = message.lastChallengedHeight !== BigInt(0) ? message.lastChallengedHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FileAminoMsg): File {
    return File.fromAmino(object.value);
  },
  fromProtoMsg(message: FileProtoMsg): File {
    return File.decode(message.value);
  },
  toProto(message: File): Uint8Array {
    return File.encode(message).finish();
  },
  toProtoMsg(message: File): FileProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.File",
      value: File.encode(message).finish()
    };
  }
};