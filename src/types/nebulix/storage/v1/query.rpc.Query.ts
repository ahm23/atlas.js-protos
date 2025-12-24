import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryParamsRequest, QueryParamsResponse, QueryGetSubscriptionInfoRequest, QueryGetSubscriptionInfoResponse, QueryProviderRequest, QueryProviderResponse, QueryProvidersRequest, QueryProvidersResponse, QueryFileRequest, QueryFileResponse, QueryFilesRequest, QueryFilesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** GetSubscriptionInfo Queries a list of GetSubscriptionInfo items. */
  getSubscriptionInfo(request: DeepPartial<QueryGetSubscriptionInfoRequest>, metadata?: grpc.Metadata): Promise<QueryGetSubscriptionInfoResponse>;
  /** Provider Queries a list of Provider items. */
  provider(request: DeepPartial<QueryProviderRequest>, metadata?: grpc.Metadata): Promise<QueryProviderResponse>;
  /** Providers Queries a list of Providers items. */
  providers(request?: DeepPartial<QueryProvidersRequest>, metadata?: grpc.Metadata): Promise<QueryProvidersResponse>;
  /** File Queries a list of File items. */
  file(request: DeepPartial<QueryFileRequest>, metadata?: grpc.Metadata): Promise<QueryFileResponse>;
  /** Files Queries a list of Files items. */
  files(request?: DeepPartial<QueryFilesRequest>, metadata?: grpc.Metadata): Promise<QueryFilesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.getSubscriptionInfo = this.getSubscriptionInfo.bind(this);
    this.provider = this.provider.bind(this);
    this.providers = this.providers.bind(this);
    this.file = this.file.bind(this);
    this.files = this.files.bind(this);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
  getSubscriptionInfo(request: DeepPartial<QueryGetSubscriptionInfoRequest>, metadata?: grpc.Metadata): Promise<QueryGetSubscriptionInfoResponse> {
    return this.rpc.unary(QueryGetSubscriptionInfoDesc, QueryGetSubscriptionInfoRequest.fromPartial(request), metadata);
  }
  provider(request: DeepPartial<QueryProviderRequest>, metadata?: grpc.Metadata): Promise<QueryProviderResponse> {
    return this.rpc.unary(QueryProviderDesc, QueryProviderRequest.fromPartial(request), metadata);
  }
  providers(request: DeepPartial<QueryProvidersRequest> = {}, metadata?: grpc.Metadata): Promise<QueryProvidersResponse> {
    return this.rpc.unary(QueryProvidersDesc, QueryProvidersRequest.fromPartial(request), metadata);
  }
  file(request: DeepPartial<QueryFileRequest>, metadata?: grpc.Metadata): Promise<QueryFileResponse> {
    return this.rpc.unary(QueryFileDesc, QueryFileRequest.fromPartial(request), metadata);
  }
  files(request: DeepPartial<QueryFilesRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryFilesResponse> {
    return this.rpc.unary(QueryFilesDesc, QueryFilesRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "nebulix.storage.v1.Query"
};
export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryParamsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryGetSubscriptionInfoDesc: UnaryMethodDefinitionish = {
  methodName: "GetSubscriptionInfo",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetSubscriptionInfoRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetSubscriptionInfoResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryProviderDesc: UnaryMethodDefinitionish = {
  methodName: "Provider",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryProviderRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryProviderResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryProvidersDesc: UnaryMethodDefinitionish = {
  methodName: "Providers",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryProvidersRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryProvidersResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryFileDesc: UnaryMethodDefinitionish = {
  methodName: "File",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryFileRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryFileResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryFilesDesc: UnaryMethodDefinitionish = {
  methodName: "Files",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryFilesRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryFilesResponse.decode(data),
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