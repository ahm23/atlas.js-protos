import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgRegisterProvider, MsgRegisterProviderResponse, MsgPostFile, MsgPostFileResponse, MsgBuyStorage, MsgBuyStorageResponse, MsgProveFile, MsgProveFileResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
  registerProvider(request: DeepPartial<MsgRegisterProvider>, metadata?: grpc.Metadata): Promise<MsgRegisterProviderResponse>;
  postFile(request: DeepPartial<MsgPostFile>, metadata?: grpc.Metadata): Promise<MsgPostFileResponse>;
  /** BuyStorage defines the BuyStorage RPC. */
  buyStorage(request: DeepPartial<MsgBuyStorage>, metadata?: grpc.Metadata): Promise<MsgBuyStorageResponse>;
  /** ProveFile defines the ProveFile RPC. */
  proveFile(request: DeepPartial<MsgProveFile>, metadata?: grpc.Metadata): Promise<MsgProveFileResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.registerProvider = this.registerProvider.bind(this);
    this.postFile = this.postFile.bind(this);
    this.buyStorage = this.buyStorage.bind(this);
    this.proveFile = this.proveFile.bind(this);
  }
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse> {
    return this.rpc.unary(MsgUpdateParamsDesc, MsgUpdateParams.fromPartial(request), metadata);
  }
  registerProvider(request: DeepPartial<MsgRegisterProvider>, metadata?: grpc.Metadata): Promise<MsgRegisterProviderResponse> {
    return this.rpc.unary(MsgRegisterProviderDesc, MsgRegisterProvider.fromPartial(request), metadata);
  }
  postFile(request: DeepPartial<MsgPostFile>, metadata?: grpc.Metadata): Promise<MsgPostFileResponse> {
    return this.rpc.unary(MsgPostFileDesc, MsgPostFile.fromPartial(request), metadata);
  }
  buyStorage(request: DeepPartial<MsgBuyStorage>, metadata?: grpc.Metadata): Promise<MsgBuyStorageResponse> {
    return this.rpc.unary(MsgBuyStorageDesc, MsgBuyStorage.fromPartial(request), metadata);
  }
  proveFile(request: DeepPartial<MsgProveFile>, metadata?: grpc.Metadata): Promise<MsgProveFileResponse> {
    return this.rpc.unary(MsgProveFileDesc, MsgProveFile.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "nebulix.storage.v1.Msg"
};
export const MsgUpdateParamsDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateParams",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateParams.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateParamsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgRegisterProviderDesc: UnaryMethodDefinitionish = {
  methodName: "RegisterProvider",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRegisterProvider.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRegisterProviderResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgPostFileDesc: UnaryMethodDefinitionish = {
  methodName: "PostFile",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgPostFile.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgPostFileResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgBuyStorageDesc: UnaryMethodDefinitionish = {
  methodName: "BuyStorage",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgBuyStorage.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgBuyStorageResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgProveFileDesc: UnaryMethodDefinitionish = {
  methodName: "ProveFile",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgProveFile.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgProveFileResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export class GrpcWebImpl {
  host: string;
  options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };
  constructor(host: string, options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  }) {
    this.host = host;
    this.options = options;
  }
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined) {
    const request = {
      ..._request,
      ...methodDesc.requestType
    };
    const maybeCombinedMetadata = metadata && this.options.metadata ? new BrowserHeaders({
      ...this.options?.metadata.headersMap,
      ...metadata?.headersMap
    }) : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        }
      });
    });
  }
}