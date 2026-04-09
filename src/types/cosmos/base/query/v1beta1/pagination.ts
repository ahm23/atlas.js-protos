//@ts-nocheck
import * as _m0 from "protobufjs/minimal";
import { GlobalDecoderRegistry } from "../../../../registry";
/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 * 
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 * @name PageRequest
 * @package cosmos.base.query.v1beta1
 * @see proto type: cosmos.base.query.v1beta1.PageRequest
 */
export interface PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   */
  key: Uint8Array;
  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   */
  offset: number;
  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   */
  limit: number;
  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  countTotal: boolean;
  /**
   * reverse is set to true if results are to be returned in the descending order.
   * 
   * Since: cosmos-sdk 0.43
   */
  reverse: boolean;
}
export interface PageRequestProtoMsg {
  typeUrl: "/cosmos.base.query.v1beta1.PageRequest";
  value: Uint8Array;
}
/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 * 
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 * @name PageRequestSDKType
 * @package cosmos.base.query.v1beta1
 * @see proto type: cosmos.base.query.v1beta1.PageRequest
 */
export interface PageRequestSDKType {
  key: Uint8Array;
  offset: number;
  limit: number;
  count_total: boolean;
  reverse: boolean;
}
/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 * 
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 * @name PageResponse
 * @package cosmos.base.query.v1beta1
 * @see proto type: cosmos.base.query.v1beta1.PageResponse
 */
export interface PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently. It will be empty if
   * there are no more results.
   */
  nextKey: Uint8Array;
  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   */
  total: number;
}
export interface PageResponseProtoMsg {
  typeUrl: "/cosmos.base.query.v1beta1.PageResponse";
  value: Uint8Array;
}
/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 * 
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 * @name PageResponseSDKType
 * @package cosmos.base.query.v1beta1
 * @see proto type: cosmos.base.query.v1beta1.PageResponse
 */
export interface PageResponseSDKType {
  next_key: Uint8Array;
  total: number;
}
function createBasePageRequest(): PageRequest {
  return {
    key: new Uint8Array(),
    offset: 0,
    limit: 0,
    countTotal: false,
    reverse: false
  };
}
/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 * 
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 * @name PageRequest
 * @package cosmos.base.query.v1beta1
 * @see proto type: cosmos.base.query.v1beta1.PageRequest
 */
export const PageRequest = {
  typeUrl: "/cosmos.base.query.v1beta1.PageRequest",
  aminoType: "cosmos-sdk/PageRequest",
  is(o: any): o is PageRequest {
    return o && (o.$typeUrl === PageRequest.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && typeof o.offset === "bigint" && typeof o.limit === "bigint" && typeof o.countTotal === "boolean" && typeof o.reverse === "boolean");
  },
  isSDK(o: any): o is PageRequestSDKType {
    return o && (o.$typeUrl === PageRequest.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && typeof o.offset === "bigint" && typeof o.limit === "bigint" && typeof o.count_total === "boolean" && typeof o.reverse === "boolean");
  },
  encode(message: PageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    if (message.limit !== 0) {
      writer.uint32(24).uint64(message.limit);
    }
    if (message.countTotal === true) {
      writer.uint32(32).bool(message.countTotal);
    }
    if (message.reverse === true) {
      writer.uint32(40).bool(message.reverse);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.offset = Number(reader.uint64().toString());
          break;
        case 3:
          message.limit = Number(reader.uint64().toString());
          break;
        case 4:
          message.countTotal = reader.bool();
          break;
        case 5:
          message.reverse = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PageRequest>): PageRequest {
    const message = createBasePageRequest();
    message.key = object.key ?? new Uint8Array();
    message.offset = object.offset !== undefined && object.offset !== null ? Number(object.offset.toString()) : 0;
    message.limit = object.limit !== undefined && object.limit !== null ? Number(object.limit.toString()) : 0;
    message.countTotal = object.countTotal ?? false;
    message.reverse = object.reverse ?? false;
    return message;
  },
  fromProtoMsg(message: PageRequestProtoMsg): PageRequest {
    return PageRequest.decode(message.value);
  },
  toProto(message: PageRequest): Uint8Array {
    return PageRequest.encode(message).finish();
  },
  toProtoMsg(message: PageRequest): PageRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.query.v1beta1.PageRequest",
      value: PageRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(PageRequest.typeUrl, PageRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(PageRequest.aminoType, PageRequest.typeUrl);
function createBasePageResponse(): PageResponse {
  return {
    nextKey: new Uint8Array(),
    total: 0
  };
}
/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 * 
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 * @name PageResponse
 * @package cosmos.base.query.v1beta1
 * @see proto type: cosmos.base.query.v1beta1.PageResponse
 */
export const PageResponse = {
  typeUrl: "/cosmos.base.query.v1beta1.PageResponse",
  aminoType: "cosmos-sdk/PageResponse",
  is(o: any): o is PageResponse {
    return o && (o.$typeUrl === PageResponse.typeUrl || (o.nextKey instanceof Uint8Array || typeof o.nextKey === "string") && typeof o.total === "bigint");
  },
  isSDK(o: any): o is PageResponseSDKType {
    return o && (o.$typeUrl === PageResponse.typeUrl || (o.next_key instanceof Uint8Array || typeof o.next_key === "string") && typeof o.total === "bigint");
  },
  encode(message: PageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nextKey.length !== 0) {
      writer.uint32(10).bytes(message.nextKey);
    }
    if (message.total !== 0) {
      writer.uint32(16).uint64(message.total);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextKey = reader.bytes();
          break;
        case 2:
          message.total = Number(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PageResponse>): PageResponse {
    const message = createBasePageResponse();
    message.nextKey = object.nextKey ?? new Uint8Array();
    message.total = object.total !== undefined && object.total !== null ? Number(object.total.toString()) : 0;
    return message;
  },
  fromProtoMsg(message: PageResponseProtoMsg): PageResponse {
    return PageResponse.decode(message.value);
  },
  toProto(message: PageResponse): Uint8Array {
    return PageResponse.encode(message).finish();
  },
  toProtoMsg(message: PageResponse): PageResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.query.v1beta1.PageResponse",
      value: PageResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
GlobalDecoderRegistry.register(PageResponse.typeUrl, PageResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(PageResponse.aminoType, PageResponse.typeUrl);