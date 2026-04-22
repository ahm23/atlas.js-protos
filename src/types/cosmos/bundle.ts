//@ts-nocheck
import * as _15 from "./bank/v1beta1/authz";
import * as _16 from "./bank/v1beta1/bank";
import * as _17 from "./bank/v1beta1/genesis";
import * as _18 from "./bank/v1beta1/query";
import * as _19 from "./bank/v1beta1/tx";
import * as _20 from "./base/query/v1beta1/pagination";
import * as _21 from "./base/v1beta1/coin";
import * as _22 from "./msg/v1/msg";
import * as _23 from "./query/v1/query";
import * as _37 from "./bank/v1beta1/query.rpc.func";
import * as _38 from "./bank/v1beta1/query.rpc.Query";
import * as _39 from "./bank/v1beta1/tx.rpc.func";
import * as _40 from "./bank/v1beta1/tx.rpc.msg";
import * as _43 from "./rpc.query";
import * as _44 from "./rpc.tx";
export namespace cosmos {
  export namespace bank {
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._37,
      ..._38,
      ..._39,
      ..._40
    };
  }
  export namespace base {
    export namespace query {
      export const v1beta1 = {
        ..._20
      };
    }
    export const v1beta1 = {
      ..._21
    };
  }
  export namespace msg {
    export const v1 = {
      ..._22
    };
  }
  export namespace query {
    export const v1 = {
      ..._23
    };
  }
  export const ClientFactory = {
    ..._43,
    ..._44
  };
}