//@ts-nocheck
import { Params, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/nebulix.storage.v1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/nebulix.storage.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
/** MsgRegisterProvider defines the MsgRegisterProvider message. */
export interface MsgRegisterProvider {
  creator: string;
  hostname: string;
  capacity: bigint;
}
export interface MsgRegisterProviderProtoMsg {
  typeUrl: "/nebulix.storage.v1.MsgRegisterProvider";
  value: Uint8Array;
}
/** MsgRegisterProvider defines the MsgRegisterProvider message. */
export interface MsgRegisterProviderSDKType {
  creator: string;
  hostname: string;
  capacity: bigint;
}
/** MsgRegisterProviderResponse defines the MsgRegisterProviderResponse message. */
export interface MsgRegisterProviderResponse {}
export interface MsgRegisterProviderResponseProtoMsg {
  typeUrl: "/nebulix.storage.v1.MsgRegisterProviderResponse";
  value: Uint8Array;
}
/** MsgRegisterProviderResponse defines the MsgRegisterProviderResponse message. */
export interface MsgRegisterProviderResponseSDKType {}
/** MsgPostFile defines the MsgPostFile message. */
export interface MsgPostFile {
  creator: string;
  merkle: Uint8Array;
  fileSize: bigint;
  replicas: bigint;
  subscription: string;
}
export interface MsgPostFileProtoMsg {
  typeUrl: "/nebulix.storage.v1.MsgPostFile";
  value: Uint8Array;
}
/** MsgPostFile defines the MsgPostFile message. */
export interface MsgPostFileSDKType {
  creator: string;
  merkle: Uint8Array;
  file_size: bigint;
  replicas: bigint;
  subscription: string;
}
/** MsgPostFileResponse defines the MsgPostFileResponse message. */
export interface MsgPostFileResponse {
  startBlock: bigint;
}
export interface MsgPostFileResponseProtoMsg {
  typeUrl: "/nebulix.storage.v1.MsgPostFileResponse";
  value: Uint8Array;
}
/** MsgPostFileResponse defines the MsgPostFileResponse message. */
export interface MsgPostFileResponseSDKType {
  start_block: bigint;
}
/** MsgBuyStorage defines the MsgBuyStorage message. */
export interface MsgBuyStorage {
  creator: string;
  receiver: string;
  duration: bigint;
  bytes: bigint;
  isDefault: boolean;
}
export interface MsgBuyStorageProtoMsg {
  typeUrl: "/nebulix.storage.v1.MsgBuyStorage";
  value: Uint8Array;
}
/** MsgBuyStorage defines the MsgBuyStorage message. */
export interface MsgBuyStorageSDKType {
  creator: string;
  receiver: string;
  duration: bigint;
  bytes: bigint;
  is_default: boolean;
}
/** MsgBuyStorageResponse defines the MsgBuyStorageResponse message. */
export interface MsgBuyStorageResponse {
  subscriptionId: string;
}
export interface MsgBuyStorageResponseProtoMsg {
  typeUrl: "/nebulix.storage.v1.MsgBuyStorageResponse";
  value: Uint8Array;
}
/** MsgBuyStorageResponse defines the MsgBuyStorageResponse message. */
export interface MsgBuyStorageResponseSDKType {
  SubscriptionId: string;
}
/** MsgProveFile defines the MsgProveFile message. */
export interface MsgProveFile {
  creator: string;
  challengeId: string;
  fileId: string;
  data: Uint8Array;
  hashes: Uint8Array[];
  chunk: bigint;
}
export interface MsgProveFileProtoMsg {
  typeUrl: "/nebulix.storage.v1.MsgProveFile";
  value: Uint8Array;
}
/** MsgProveFile defines the MsgProveFile message. */
export interface MsgProveFileSDKType {
  creator: string;
  challenge_id: string;
  file_id: string;
  data: Uint8Array;
  hashes: Uint8Array[];
  chunk: bigint;
}
/** MsgProveFileResponse defines the MsgProveFileResponse message. */
export interface MsgProveFileResponse {}
export interface MsgProveFileResponseProtoMsg {
  typeUrl: "/nebulix.storage.v1.MsgProveFileResponse";
  value: Uint8Array;
}
/** MsgProveFileResponse defines the MsgProveFileResponse message. */
export interface MsgProveFileResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/nebulix.storage.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/nebulix.storage.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterProvider(): MsgRegisterProvider {
  return {
    creator: "",
    hostname: "",
    capacity: BigInt(0)
  };
}
export const MsgRegisterProvider = {
  typeUrl: "/nebulix.storage.v1.MsgRegisterProvider",
  encode(message: MsgRegisterProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostname !== "") {
      writer.uint32(18).string(message.hostname);
    }
    if (message.capacity !== BigInt(0)) {
      writer.uint32(24).int64(message.capacity);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostname = reader.string();
          break;
        case 3:
          message.capacity = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterProvider>): MsgRegisterProvider {
    const message = createBaseMsgRegisterProvider();
    message.creator = object.creator ?? "";
    message.hostname = object.hostname ?? "";
    message.capacity = object.capacity !== undefined && object.capacity !== null ? BigInt(object.capacity.toString()) : BigInt(0);
    return message;
  },
  fromProtoMsg(message: MsgRegisterProviderProtoMsg): MsgRegisterProvider {
    return MsgRegisterProvider.decode(message.value);
  },
  toProto(message: MsgRegisterProvider): Uint8Array {
    return MsgRegisterProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterProvider): MsgRegisterProviderProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.MsgRegisterProvider",
      value: MsgRegisterProvider.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterProviderResponse(): MsgRegisterProviderResponse {
  return {};
}
export const MsgRegisterProviderResponse = {
  typeUrl: "/nebulix.storage.v1.MsgRegisterProviderResponse",
  encode(_: MsgRegisterProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgRegisterProviderResponse>): MsgRegisterProviderResponse {
    const message = createBaseMsgRegisterProviderResponse();
    return message;
  },
  fromProtoMsg(message: MsgRegisterProviderResponseProtoMsg): MsgRegisterProviderResponse {
    return MsgRegisterProviderResponse.decode(message.value);
  },
  toProto(message: MsgRegisterProviderResponse): Uint8Array {
    return MsgRegisterProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterProviderResponse): MsgRegisterProviderResponseProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.MsgRegisterProviderResponse",
      value: MsgRegisterProviderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPostFile(): MsgPostFile {
  return {
    creator: "",
    merkle: new Uint8Array(),
    fileSize: BigInt(0),
    replicas: BigInt(0),
    subscription: ""
  };
}
export const MsgPostFile = {
  typeUrl: "/nebulix.storage.v1.MsgPostFile",
  encode(message: MsgPostFile, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.merkle.length !== 0) {
      writer.uint32(18).bytes(message.merkle);
    }
    if (message.fileSize !== BigInt(0)) {
      writer.uint32(32).int64(message.fileSize);
    }
    if (message.replicas !== BigInt(0)) {
      writer.uint32(40).int64(message.replicas);
    }
    if (message.subscription !== "") {
      writer.uint32(50).string(message.subscription);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPostFile {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.merkle = reader.bytes();
          break;
        case 4:
          message.fileSize = reader.int64();
          break;
        case 5:
          message.replicas = reader.int64();
          break;
        case 6:
          message.subscription = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPostFile>): MsgPostFile {
    const message = createBaseMsgPostFile();
    message.creator = object.creator ?? "";
    message.merkle = object.merkle ?? new Uint8Array();
    message.fileSize = object.fileSize !== undefined && object.fileSize !== null ? BigInt(object.fileSize.toString()) : BigInt(0);
    message.replicas = object.replicas !== undefined && object.replicas !== null ? BigInt(object.replicas.toString()) : BigInt(0);
    message.subscription = object.subscription ?? "";
    return message;
  },
  fromProtoMsg(message: MsgPostFileProtoMsg): MsgPostFile {
    return MsgPostFile.decode(message.value);
  },
  toProto(message: MsgPostFile): Uint8Array {
    return MsgPostFile.encode(message).finish();
  },
  toProtoMsg(message: MsgPostFile): MsgPostFileProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.MsgPostFile",
      value: MsgPostFile.encode(message).finish()
    };
  }
};
function createBaseMsgPostFileResponse(): MsgPostFileResponse {
  return {
    startBlock: BigInt(0)
  };
}
export const MsgPostFileResponse = {
  typeUrl: "/nebulix.storage.v1.MsgPostFileResponse",
  encode(message: MsgPostFileResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startBlock !== BigInt(0)) {
      writer.uint32(8).int64(message.startBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPostFileResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startBlock = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPostFileResponse>): MsgPostFileResponse {
    const message = createBaseMsgPostFileResponse();
    message.startBlock = object.startBlock !== undefined && object.startBlock !== null ? BigInt(object.startBlock.toString()) : BigInt(0);
    return message;
  },
  fromProtoMsg(message: MsgPostFileResponseProtoMsg): MsgPostFileResponse {
    return MsgPostFileResponse.decode(message.value);
  },
  toProto(message: MsgPostFileResponse): Uint8Array {
    return MsgPostFileResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPostFileResponse): MsgPostFileResponseProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.MsgPostFileResponse",
      value: MsgPostFileResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBuyStorage(): MsgBuyStorage {
  return {
    creator: "",
    receiver: "",
    duration: BigInt(0),
    bytes: BigInt(0),
    isDefault: false
  };
}
export const MsgBuyStorage = {
  typeUrl: "/nebulix.storage.v1.MsgBuyStorage",
  encode(message: MsgBuyStorage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(24).int64(message.duration);
    }
    if (message.bytes !== BigInt(0)) {
      writer.uint32(32).int64(message.bytes);
    }
    if (message.isDefault === true) {
      writer.uint32(40).bool(message.isDefault);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBuyStorage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.duration = reader.int64();
          break;
        case 4:
          message.bytes = reader.int64();
          break;
        case 5:
          message.isDefault = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBuyStorage>): MsgBuyStorage {
    const message = createBaseMsgBuyStorage();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    message.bytes = object.bytes !== undefined && object.bytes !== null ? BigInt(object.bytes.toString()) : BigInt(0);
    message.isDefault = object.isDefault ?? false;
    return message;
  },
  fromProtoMsg(message: MsgBuyStorageProtoMsg): MsgBuyStorage {
    return MsgBuyStorage.decode(message.value);
  },
  toProto(message: MsgBuyStorage): Uint8Array {
    return MsgBuyStorage.encode(message).finish();
  },
  toProtoMsg(message: MsgBuyStorage): MsgBuyStorageProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.MsgBuyStorage",
      value: MsgBuyStorage.encode(message).finish()
    };
  }
};
function createBaseMsgBuyStorageResponse(): MsgBuyStorageResponse {
  return {
    subscriptionId: ""
  };
}
export const MsgBuyStorageResponse = {
  typeUrl: "/nebulix.storage.v1.MsgBuyStorageResponse",
  encode(message: MsgBuyStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriptionId !== "") {
      writer.uint32(10).string(message.subscriptionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBuyStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBuyStorageResponse>): MsgBuyStorageResponse {
    const message = createBaseMsgBuyStorageResponse();
    message.subscriptionId = object.subscriptionId ?? "";
    return message;
  },
  fromProtoMsg(message: MsgBuyStorageResponseProtoMsg): MsgBuyStorageResponse {
    return MsgBuyStorageResponse.decode(message.value);
  },
  toProto(message: MsgBuyStorageResponse): Uint8Array {
    return MsgBuyStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBuyStorageResponse): MsgBuyStorageResponseProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.MsgBuyStorageResponse",
      value: MsgBuyStorageResponse.encode(message).finish()
    };
  }
};
function createBaseMsgProveFile(): MsgProveFile {
  return {
    creator: "",
    challengeId: "",
    fileId: "",
    data: new Uint8Array(),
    hashes: [],
    chunk: BigInt(0)
  };
}
export const MsgProveFile = {
  typeUrl: "/nebulix.storage.v1.MsgProveFile",
  encode(message: MsgProveFile, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.challengeId !== "") {
      writer.uint32(18).string(message.challengeId);
    }
    if (message.fileId !== "") {
      writer.uint32(26).string(message.fileId);
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    for (const v of message.hashes) {
      writer.uint32(42).bytes(v!);
    }
    if (message.chunk !== BigInt(0)) {
      writer.uint32(48).uint64(message.chunk);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProveFile {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProveFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.challengeId = reader.string();
          break;
        case 3:
          message.fileId = reader.string();
          break;
        case 4:
          message.data = reader.bytes();
          break;
        case 5:
          message.hashes.push(reader.bytes());
          break;
        case 6:
          message.chunk = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgProveFile>): MsgProveFile {
    const message = createBaseMsgProveFile();
    message.creator = object.creator ?? "";
    message.challengeId = object.challengeId ?? "";
    message.fileId = object.fileId ?? "";
    message.data = object.data ?? new Uint8Array();
    message.hashes = object.hashes?.map(e => e) || [];
    message.chunk = object.chunk !== undefined && object.chunk !== null ? BigInt(object.chunk.toString()) : BigInt(0);
    return message;
  },
  fromProtoMsg(message: MsgProveFileProtoMsg): MsgProveFile {
    return MsgProveFile.decode(message.value);
  },
  toProto(message: MsgProveFile): Uint8Array {
    return MsgProveFile.encode(message).finish();
  },
  toProtoMsg(message: MsgProveFile): MsgProveFileProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.MsgProveFile",
      value: MsgProveFile.encode(message).finish()
    };
  }
};
function createBaseMsgProveFileResponse(): MsgProveFileResponse {
  return {};
}
export const MsgProveFileResponse = {
  typeUrl: "/nebulix.storage.v1.MsgProveFileResponse",
  encode(_: MsgProveFileResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProveFileResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProveFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgProveFileResponse>): MsgProveFileResponse {
    const message = createBaseMsgProveFileResponse();
    return message;
  },
  fromProtoMsg(message: MsgProveFileResponseProtoMsg): MsgProveFileResponse {
    return MsgProveFileResponse.decode(message.value);
  },
  toProto(message: MsgProveFileResponse): Uint8Array {
    return MsgProveFileResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProveFileResponse): MsgProveFileResponseProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.MsgProveFileResponse",
      value: MsgProveFileResponse.encode(message).finish()
    };
  }
};