//@ts-nocheck
import * as _16 from "./storage/v1/file";
import * as _17 from "./storage/v1/genesis";
import * as _18 from "./storage/v1/params";
import * as _19 from "./storage/v1/proof";
import * as _20 from "./storage/v1/provider";
import * as _21 from "./storage/v1/query";
import * as _22 from "./storage/v1/subscription";
import * as _23 from "./storage/v1/tx";
import * as _26 from "./storage/v1/query.rpc.Query";
import * as _27 from "./storage/v1/tx.rpc.msg";
import * as _30 from "./rpc.query";
import * as _31 from "./rpc.tx";
import * as _28 from "./storage/v1/tx.registry";
export namespace nebulix {
  export namespace storage {
    export const v1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._26,
      ..._27,
      ..._28
    };
  }
  export const ClientFactory = {
    ..._30,
    ..._31
  };
}