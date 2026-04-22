//@ts-nocheck
import * as _1 from "../atlas/filetree/v1/genesis";
import * as _2 from "../atlas/filetree/v1/params";
import * as _3 from "../atlas/filetree/v1/query";
import * as _4 from "../atlas/filetree/v1/tree";
import * as _5 from "../atlas/filetree/v1/tx";
import * as _6 from "../atlas/storage/v1/file";
import * as _7 from "../atlas/storage/v1/genesis";
import * as _8 from "../atlas/storage/v1/params";
import * as _9 from "../atlas/storage/v1/proof";
import * as _10 from "../atlas/storage/v1/provider";
import * as _11 from "../atlas/storage/v1/query";
import * as _12 from "../atlas/storage/v1/subscription";
import * as _13 from "../atlas/storage/v1/tx";
import * as _29 from "../atlas/filetree/v1/query.rpc.func";
import * as _30 from "../atlas/storage/v1/query.rpc.func";
import * as _31 from "../atlas/filetree/v1/query.rpc.Query";
import * as _32 from "../atlas/storage/v1/query.rpc.Query";
import * as _33 from "../atlas/filetree/v1/tx.rpc.func";
import * as _34 from "../atlas/storage/v1/tx.rpc.func";
import * as _35 from "../atlas/filetree/v1/tx.rpc.msg";
import * as _36 from "../atlas/storage/v1/tx.rpc.msg";
import * as _41 from "./rpc.query";
import * as _42 from "./rpc.tx";
export namespace nebulix {
  export namespace filetree {
    export const v1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._29,
      ..._31,
      ..._33,
      ..._35
    };
  }
  export namespace storage {
    export const v1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._30,
      ..._32,
      ..._34,
      ..._36
    };
  }
  export const ClientFactory = {
    ..._41,
    ..._42
  };
}