//@ts-nocheck
import * as _m0 from "protobufjs/minimal";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.Params
 */
export interface Params {}
export interface ParamsProtoMsg {
  typeUrl: "/atlas.filetree.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsSDKType
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.Params
 */
export interface ParamsSDKType {}
function createBaseParams(): Params {
  return {};
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package atlas.filetree.v1
 * @see proto type: atlas.filetree.v1.Params
 */
export const Params = {
  typeUrl: "/atlas.filetree.v1.Params",
  aminoType: "nebulix/x/filetree/Params",
  is(o: any): o is Params {
    return o && o.$typeUrl === Params.typeUrl;
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && o.$typeUrl === Params.typeUrl;
  },
  encode(_: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
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
  fromPartial(_: Partial<Params>): Params {
    const message = createBaseParams();
    return message;
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/atlas.filetree.v1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);