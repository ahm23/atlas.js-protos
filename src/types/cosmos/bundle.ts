//@ts-nocheck
import * as _2 from "./bank/v1beta1/authz";
import * as _3 from "./bank/v1beta1/bank";
import * as _4 from "./bank/v1beta1/genesis";
import * as _5 from "./bank/v1beta1/query";
import * as _6 from "./bank/v1beta1/tx";
import * as _7 from "./base/query/v1beta1/pagination";
import * as _8 from "./base/v1beta1/coin";
import * as _9 from "./msg/v1/msg";
import * as _10 from "./query/v1/query";
import * as _24 from "./bank/v1beta1/query.rpc.Query";
import * as _25 from "./bank/v1beta1/tx.rpc.msg";
import * as _28 from "./rpc.query";
import * as _29 from "./rpc.tx";
export namespace cosmos {
  export namespace bank {
    export const v1beta1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._24,
      ..._25
    };
  }
  export namespace base {
    export namespace query {
      export const v1beta1 = {
        ..._7
      };
    }
    export const v1beta1 = {
      ..._8
    };
  }
  export namespace msg {
    export const v1 = {
      ..._9
    };
  }
  export namespace query {
    export const v1 = {
      ..._10
    };
  }
  export const ClientFactory = {
    ..._28,
    ..._29
  };
}