import { useExtensionApi } from '@shopify/checkout-ui-extensions-react';

/* This should be kept up-to-date with the PHP StoreCode enum */
export enum StoreCode {
   AU = 'au',
   CA = 'ca',
   DE = 'de',
   DEV = 'dev',
   EU = 'eu',
   EU_PRO = 'eu_pro',
   EU_PRO_TEST = 'eu_pro_test',
   EU_TEST = 'eu_test',
   FR = 'fr',
   TEST = 'test',
   UK = 'uk',
   US = 'us',
}

type Store = {
   domain: string;
   code: StoreCode;
};

const stores: Store[] = [
   {
      domain: 'ifixit-australia',
      code: StoreCode.AU,
   },
   {
      domain: 'ifixit-canada',
      code: StoreCode.CA,
   },
   {
      domain: 'ifixit-de',
      code: StoreCode.DE,
   },
   {
      domain: 'ifixit-dev',
      code: StoreCode.DEV,
   },
   {
      domain: 'ifixit-eu',
      code: StoreCode.EU,
   },
   {
      domain: 'ifixit-eu-pro',
      code: StoreCode.EU_PRO,
   },
   {
      domain: 'ifixit-eu-pro-test',
      code: StoreCode.EU_PRO_TEST,
   },
   {
      domain: 'ifixit-eu-test',
      code: StoreCode.EU_TEST,
   },
   {
      domain: 'ifixit-fr',
      code: StoreCode.FR,
   },
   {
      domain: 'ifixit-test',
      code: StoreCode.TEST,
   },
   {
      domain: 'ifixit-uk',
      code: StoreCode.UK,
   },
   {
      domain: 'ifixit-us',
      code: StoreCode.US,
   },
];

export function storeFromShop(
   shop: ReturnType<typeof useExtensionApi>['shop']
): Store | null {
   return stores.find((store) => store.domain === shop.myshopifyDomain) ?? null;
}
