import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetSubscriptionInfoRequest, QueryGetSubscriptionInfoResponseSDKType, QueryProviderRequest, QueryProviderResponseSDKType, QueryProvidersRequest, QueryProvidersResponseSDKType, QueryFileRequest, QueryFileResponseSDKType, QueryFilesRequest, QueryFilesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.getSubscriptionInfo = this.getSubscriptionInfo.bind(this);
    this.provider = this.provider.bind(this);
    this.providers = this.providers.bind(this);
    this.file = this.file.bind(this);
    this.files = this.files.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `nebulix/storage/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* GetSubscriptionInfo Queries a list of GetSubscriptionInfo items. */
  async getSubscriptionInfo(params: QueryGetSubscriptionInfoRequest): Promise<QueryGetSubscriptionInfoResponseSDKType> {
    const endpoint = `nebulix/storage/v1/get_subscription_info/${params.subscriberAddress}/${params.subscriptionId}`;
    return await this.req.get<QueryGetSubscriptionInfoResponseSDKType>(endpoint);
  }
  /* Provider Queries a list of Provider items. */
  async provider(params: QueryProviderRequest): Promise<QueryProviderResponseSDKType> {
    const endpoint = `nebulix/storage/v1/provider/${params.address}`;
    return await this.req.get<QueryProviderResponseSDKType>(endpoint);
  }
  /* Providers Queries a list of Providers items. */
  async providers(_params: QueryProvidersRequest = {}): Promise<QueryProvidersResponseSDKType> {
    const endpoint = `nebulix/storage/v1/providers`;
    return await this.req.get<QueryProvidersResponseSDKType>(endpoint);
  }
  /* File Queries a list of File items. */
  async file(params: QueryFileRequest): Promise<QueryFileResponseSDKType> {
    const endpoint = `nebulix/storage/v1/file/${params.fid}`;
    return await this.req.get<QueryFileResponseSDKType>(endpoint);
  }
  /* Files Queries a list of Files items. */
  async files(params: QueryFilesRequest = {
    pagination: undefined
  }): Promise<QueryFilesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `nebulix/storage/v1/files`;
    return await this.req.get<QueryFilesResponseSDKType>(endpoint, options);
  }
}