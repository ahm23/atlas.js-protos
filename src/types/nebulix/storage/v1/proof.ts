//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface MerkleProof {
  /** The 1KB chunk data */
  chunk: Uint8Array;
  /** Position in file (0-based) */
  index: bigint;
  /** Sibling hashes for Merkle path */
  siblings: Uint8Array[];
}
export interface MerkleProofProtoMsg {
  typeUrl: "/nebulix.storage.v1.MerkleProof";
  value: Uint8Array;
}
export interface MerkleProofSDKType {
  chunk: Uint8Array;
  index: bigint;
  siblings: Uint8Array[];
}
export interface StorageChallenge {
  challengeId: string;
  fileId: string;
  fileMerkle: string;
  provider: string;
  chunkIndex: bigint;
  createdHeight: bigint;
  seed: Uint8Array;
  completed: boolean;
}
export interface StorageChallengeProtoMsg {
  typeUrl: "/nebulix.storage.v1.StorageChallenge";
  value: Uint8Array;
}
export interface StorageChallengeSDKType {
  challenge_id: string;
  file_id: string;
  file_merkle: string;
  provider: string;
  chunk_index: bigint;
  created_height: bigint;
  seed: Uint8Array;
  completed: boolean;
}
function createBaseMerkleProof(): MerkleProof {
  return {
    chunk: new Uint8Array(),
    index: BigInt(0),
    siblings: []
  };
}
export const MerkleProof = {
  typeUrl: "/nebulix.storage.v1.MerkleProof",
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
  }
};
function createBaseStorageChallenge(): StorageChallenge {
  return {
    challengeId: "",
    fileId: "",
    fileMerkle: "",
    provider: "",
    chunkIndex: BigInt(0),
    createdHeight: BigInt(0),
    seed: new Uint8Array(),
    completed: false
  };
}
export const StorageChallenge = {
  typeUrl: "/nebulix.storage.v1.StorageChallenge",
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
    if (message.seed.length !== 0) {
      writer.uint32(58).bytes(message.seed);
    }
    if (message.completed === true) {
      writer.uint32(64).bool(message.completed);
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
          message.seed = reader.bytes();
          break;
        case 8:
          message.completed = reader.bool();
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
    message.seed = object.seed ?? new Uint8Array();
    message.completed = object.completed ?? false;
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
  }
};