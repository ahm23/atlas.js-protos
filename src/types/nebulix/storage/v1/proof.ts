//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * @name MerkleProof
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.MerkleProof
 */
export interface MerkleProof {
  /**
   * The 1KB chunk data
   */
  chunk: Uint8Array;
  /**
   * Position in file (0-based)
   */
  index: bigint;
  /**
   * Sibling hashes for Merkle path
   */
  siblings: Uint8Array[];
}
export interface MerkleProofProtoMsg {
  typeUrl: "/nebulix.storage.v1.MerkleProof";
  value: Uint8Array;
}
/**
 * @name MerkleProofSDKType
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.MerkleProof
 */
export interface MerkleProofSDKType {
  chunk: Uint8Array;
  index: bigint;
  siblings: Uint8Array[];
}
/**
 * @name StorageChallenge
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.StorageChallenge
 */
export interface StorageChallenge {
  challengeId: string;
  fileId: string;
  fileMerkle: string;
  provider: string;
  chunkIndex: bigint;
  createdHeight: bigint;
  deadlineHeight: bigint;
}
export interface StorageChallengeProtoMsg {
  typeUrl: "/nebulix.storage.v1.StorageChallenge";
  value: Uint8Array;
}
/**
 * @name StorageChallengeSDKType
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.StorageChallenge
 */
export interface StorageChallengeSDKType {
  challenge_id: string;
  file_id: string;
  file_merkle: string;
  provider: string;
  chunk_index: bigint;
  created_height: bigint;
  deadline_height: bigint;
}
function createBaseMerkleProof(): MerkleProof {
  return {
    chunk: new Uint8Array(),
    index: BigInt(0),
    siblings: []
  };
}
/**
 * @name MerkleProof
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.MerkleProof
 */
export const MerkleProof = {
  typeUrl: "/nebulix.storage.v1.MerkleProof",
  is(o: any): o is MerkleProof {
    return o && (o.$typeUrl === MerkleProof.typeUrl || (o.chunk instanceof Uint8Array || typeof o.chunk === "string") && typeof o.index === "bigint" && Array.isArray(o.siblings) && (!o.siblings.length || o.siblings[0] instanceof Uint8Array || typeof o.siblings[0] === "string"));
  },
  isSDK(o: any): o is MerkleProofSDKType {
    return o && (o.$typeUrl === MerkleProof.typeUrl || (o.chunk instanceof Uint8Array || typeof o.chunk === "string") && typeof o.index === "bigint" && Array.isArray(o.siblings) && (!o.siblings.length || o.siblings[0] instanceof Uint8Array || typeof o.siblings[0] === "string"));
  },
  encode(message: MerkleProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chunk.length !== 0) {
      writer.uint32(10).bytes(message.chunk);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(16).uint64(message.index);
    }
    for (const v of message.siblings) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MerkleProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkleProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunk = reader.bytes();
          break;
        case 2:
          message.index = reader.uint64();
          break;
        case 3:
          message.siblings.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MerkleProof>): MerkleProof {
    const message = createBaseMerkleProof();
    message.chunk = object.chunk ?? new Uint8Array();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.siblings = object.siblings?.map(e => e) || [];
    return message;
  },
  fromProtoMsg(message: MerkleProofProtoMsg): MerkleProof {
    return MerkleProof.decode(message.value);
  },
  toProto(message: MerkleProof): Uint8Array {
    return MerkleProof.encode(message).finish();
  },
  toProtoMsg(message: MerkleProof): MerkleProofProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.MerkleProof",
      value: MerkleProof.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(MerkleProof.typeUrl, MerkleProof);
function createBaseStorageChallenge(): StorageChallenge {
  return {
    challengeId: "",
    fileId: "",
    fileMerkle: "",
    provider: "",
    chunkIndex: BigInt(0),
    createdHeight: BigInt(0),
    deadlineHeight: BigInt(0)
  };
}
/**
 * @name StorageChallenge
 * @package nebulix.storage.v1
 * @see proto type: nebulix.storage.v1.StorageChallenge
 */
export const StorageChallenge = {
  typeUrl: "/nebulix.storage.v1.StorageChallenge",
  is(o: any): o is StorageChallenge {
    return o && (o.$typeUrl === StorageChallenge.typeUrl || typeof o.challengeId === "string" && typeof o.fileId === "string" && typeof o.fileMerkle === "string" && typeof o.provider === "string" && typeof o.chunkIndex === "bigint" && typeof o.createdHeight === "bigint" && typeof o.deadlineHeight === "bigint");
  },
  isSDK(o: any): o is StorageChallengeSDKType {
    return o && (o.$typeUrl === StorageChallenge.typeUrl || typeof o.challenge_id === "string" && typeof o.file_id === "string" && typeof o.file_merkle === "string" && typeof o.provider === "string" && typeof o.chunk_index === "bigint" && typeof o.created_height === "bigint" && typeof o.deadline_height === "bigint");
  },
  encode(message: StorageChallenge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.challengeId !== "") {
      writer.uint32(10).string(message.challengeId);
    }
    if (message.fileId !== "") {
      writer.uint32(18).string(message.fileId);
    }
    if (message.fileMerkle !== "") {
      writer.uint32(26).string(message.fileMerkle);
    }
    if (message.provider !== "") {
      writer.uint32(34).string(message.provider);
    }
    if (message.chunkIndex !== BigInt(0)) {
      writer.uint32(40).uint64(message.chunkIndex);
    }
    if (message.createdHeight !== BigInt(0)) {
      writer.uint32(48).uint64(message.createdHeight);
    }
    if (message.deadlineHeight !== BigInt(0)) {
      writer.uint32(56).uint64(message.deadlineHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StorageChallenge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengeId = reader.string();
          break;
        case 2:
          message.fileId = reader.string();
          break;
        case 3:
          message.fileMerkle = reader.string();
          break;
        case 4:
          message.provider = reader.string();
          break;
        case 5:
          message.chunkIndex = reader.uint64();
          break;
        case 6:
          message.createdHeight = reader.uint64();
          break;
        case 7:
          message.deadlineHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StorageChallenge>): StorageChallenge {
    const message = createBaseStorageChallenge();
    message.challengeId = object.challengeId ?? "";
    message.fileId = object.fileId ?? "";
    message.fileMerkle = object.fileMerkle ?? "";
    message.provider = object.provider ?? "";
    message.chunkIndex = object.chunkIndex !== undefined && object.chunkIndex !== null ? BigInt(object.chunkIndex.toString()) : BigInt(0);
    message.createdHeight = object.createdHeight !== undefined && object.createdHeight !== null ? BigInt(object.createdHeight.toString()) : BigInt(0);
    message.deadlineHeight = object.deadlineHeight !== undefined && object.deadlineHeight !== null ? BigInt(object.deadlineHeight.toString()) : BigInt(0);
    return message;
  },
  fromProtoMsg(message: StorageChallengeProtoMsg): StorageChallenge {
    return StorageChallenge.decode(message.value);
  },
  toProto(message: StorageChallenge): Uint8Array {
    return StorageChallenge.encode(message).finish();
  },
  toProtoMsg(message: StorageChallenge): StorageChallengeProtoMsg {
    return {
      typeUrl: "/nebulix.storage.v1.StorageChallenge",
      value: StorageChallenge.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(StorageChallenge.typeUrl, StorageChallenge);