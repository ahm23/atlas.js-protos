//@ts-nocheck
import * as _16 from "./filetree/v1/genesis";
import * as _17 from "./filetree/v1/params";
import * as _18 from "./filetree/v1/query";
import * as _19 from "./filetree/v1/tree";
import * as _20 from "./filetree/v1/tx";
import * as _21 from "./storage/v1/file";
import * as _22 from "./storage/v1/genesis";
import * as _23 from "./storage/v1/params";
import * as _24 from "./storage/v1/proof";
import * as _25 from "./storage/v1/provider";
import * as _26 from "./storage/v1/query";
import * as _27 from "./storage/v1/subscription";
import * as _28 from "./storage/v1/tx";
import * as _31 from "./filetree/v1/query.rpc.Query";
import * as _32 from "./storage/v1/query.rpc.Query";
import * as _33 from "./filetree/v1/tx.rpc.msg";
import * as _34 from "./storage/v1/tx.rpc.msg";
import * as _37 from "./rpc.query";
import * as _38 from "./rpc.tx";
import * as _40 from "./storage/v1/tx.registry";
import * as _41 from "./filetree/v1/tx.registry";
export namespace nebulix {
  export namespace filetree {
    export const v1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._31,
      ..._33,
      ..._41
    };
  }
  export namespace storage {
    export const v1 = {
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._32,
      ..._34,
      ..._40
    };
  }
  export const ClientFactory = {
    ..._37,
    ..._38
  };
}