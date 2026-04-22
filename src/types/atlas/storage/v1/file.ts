//@ts-nocheck
import * as _m0 from "protobufjs/minimal";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * File defines the File message.
 * @name File
 * @package atlas.storage.v1
 * @see proto type: atlas.storage.v1.File
 */
export interface File {
  fid: string;
  merkle: string;
  creator: string;
  subscription: string;
  status: string;
  fileSize: number;
  replicas: number;
  providers: string[];
  unstableProviders: string[];
  start: number;
}
export interface FileProtoMsg {
  typeUrl: "/atlas.storage.v1.File";
  value: Uint8Array;
}
/**
 * File defines the File message.
 * @name FileSDKType
 * @package atlas.storage.v1
 * @see proto type: atlas.storage.v1.File
 */
export interface FileSDKType {
  fid: string;
  merkle: string;
  creator: string;
  subscription: string;
  status: string;
  file_size: number;
  replicas: number;
  providers: string[];
  unstable_providers: string[];
  start: number;
}
function createBaseFile(): File {
  return {
    fid: "",
    merkle: "",
    creator: "",
    subscription: "",
    status: "",
    fileSize: 0,
    replicas: 0,
    providers: [],
    unstableProviders: [],
    start: 0
  };
}
/**
 * File defines the File message.
 * @name File
 * @package atlas.storage.v1
 * @see proto type: atlas.storage.v1.File
 */
export const File = {
  typeUrl: "/atlas.storage.v1.File",
  is(o: any): o is File {
    return o && (o.$typeUrl === File.typeUrl || typeof o.fid === "string" && typeof o.merkle === "string" && typeof o.creator === "string" && typeof o.subscription === "string" && typeof o.status === "string" && typeof o.fileSize === "bigint" && typeof o.replicas === "number" && Array.isArray(o.providers) && (!o.providers.length || typeof o.providers[0] === "string") && Array.isArray(o.unstableProviders) && (!o.unstableProviders.length || typeof o.unstableProviders[0] === "string") && typeof o.start === "bigint");
  },
  isSDK(o: any): o is FileSDKType {
    return o && (o.$typeUrl === File.typeUrl || typeof o.fid === "string" && typeof o.merkle === "string" && typeof o.creator === "string" && typeof o.subscription === "string" && typeof o.status === "string" && typeof o.file_size === "bigint" && typeof o.replicas === "number" && Array.isArray(o.providers) && (!o.providers.length || typeof o.providers[0] === "string") && Array.isArray(o.unstable_providers) && (!o.unstable_providers.length || typeof o.unstable_providers[0] === "string") && typeof o.start === "bigint");
  },
  encode(message: File, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fid !== "") {
      writer.uint32(10).string(message.fid);
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
    if (message.fileSize !== 0) {
      writer.uint32(48).int64(message.fileSize);
    }
    if (message.replicas !== 0) {
      writer.uint32(56).int32(message.replicas);
    }
    for (const v of message.providers) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.unstableProviders) {
      writer.uint32(74).string(v!);
    }
    if (message.start !== 0) {
      writer.uint32(80).int64(message.start);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): File {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fid = reader.string();
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
          message.fileSize = Number(reader.int64().toString());
          break;
        case 7:
          message.replicas = reader.int32();
          break;
        case 8:
          message.providers.push(reader.string());
          break;
        case 9:
          message.unstableProviders.push(reader.string());
          break;
        case 10:
          message.start = Number(reader.int64().toString());
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
    message.fid = object.fid ?? "";
    message.merkle = object.merkle ?? "";
    message.creator = object.creator ?? "";
    message.subscription = object.subscription ?? "";
    message.status = object.status ?? "";
    message.fileSize = object.fileSize !== undefined && object.fileSize !== null ? Number(object.fileSize.toString()) : 0;
    message.replicas = object.replicas ?? 0;
    message.providers = object.providers?.map(e => e) || [];
    message.unstableProviders = object.unstableProviders?.map(e => e) || [];
    message.start = object.start !== undefined && object.start !== null ? Number(object.start.toString()) : 0;
    return message;
  },
  fromProtoMsg(message: FileProtoMsg): File {
    return File.decode(message.value);
  },
  toProto(message: File): Uint8Array {
    return File.encode(message).finish();
  },
  toProtoMsg(message: File): FileProtoMsg {
    return {
      typeUrl: "/atlas.storage.v1.File",
      value: File.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(File.typeUrl, File);