import { LCDClient } from "@cosmology/lcd";
export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    nebulix: {
      storage: {
        v1: new (await import("./storage/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    }
  };
};