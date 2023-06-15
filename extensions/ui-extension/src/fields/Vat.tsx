import {
   Button,
   Form,
   InlineLayout,
   TextField,
   View,
   useExtensionApi,
   useSessionToken,
   useTranslate,
} from '@shopify/checkout-ui-extensions-react';
import { StoreCode, storeFromShop } from '@/models/store';
import { useState } from 'react';

async function validate({
   vatId,
   shop,
   token,
}: {
   vatId: string;
   shop: ReturnType<typeof useExtensionApi>['shop'];
   token: ReturnType<typeof useSessionToken>;
}) {
   const storeCode = storeFromShop(shop)?.code ?? StoreCode.EU_TEST;
   const params = new URLSearchParams({ vatId, storeCode });
   const jwt = await token.get();
   const res = await fetch(
      `https://mmcelvain.cominor.com/api/2.0/store/checkout/vat/validate?${params}`,
      {
         method: 'POST',
         headers: {
            Authorization: `Bearer ${jwt}`,
         },
      }
   );
   console.log(res.json());
}

export function Vat() {
   const { shop } = useExtensionApi();
   const token = useSessionToken();
   const translate = useTranslate();
   const label = translate('vat.label');
   const [vatId, setVatId] = useState('');
   return (
      <Form onSubmit={() => validate({ vatId, shop, token })}>
         <InlineLayout columns={['fill', 'auto']} spacing="base">
            <View>
               <TextField label={label} onChange={setVatId} value={vatId} />
            </View>
            <View>
               <Button accessibilityRole="submit">Submit</Button>
            </View>
         </InlineLayout>
      </Form>
   );
}
