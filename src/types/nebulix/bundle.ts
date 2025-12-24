import * as _9 from "./storage/v1/file";
import * as _10 from "./storage/v1/genesis";
import * as _11 from "./storage/v1/params";
import * as _12 from "./storage/v1/proof";
import * as _13 from "./storage/v1/provider";
import * as _14 from "./storage/v1/query";
import * as _15 from "./storage/v1/subscription";
import * as _16 from "./storage/v1/tx";
import * as _17 from "./storage/v1/tx.amino";
import * as _18 from "./storage/v1/tx.registry";
import * as _19 from "./storage/v1/query.lcd";
import * as _20 from "./storage/v1/query.rpc.Query";
import * as _21 from "./storage/v1/tx.rpc.msg";
import * as _22 from "./lcd";
import * as _23 from "./rpc.query";
import * as _24 from "./rpc.tx";
export namespace nebulix {
  export namespace storage {
    export const v1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21
    };
  }
  export const ClientFactory = {
    ..._22,
    ..._23,
    ..._24
  };
}