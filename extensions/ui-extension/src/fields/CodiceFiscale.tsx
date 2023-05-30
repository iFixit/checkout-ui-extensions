import {
   BlockStack,
   Heading,
   TextField,
   useApplyAttributeChange,
   useTranslate,
} from '@shopify/checkout-ui-extensions-react';

export function CodiceFiscale() {
   const applyAttributeChange = useApplyAttributeChange();
   const translate = useTranslate();
   const applyCodiceFiscaleChange = (value: string) =>
      applyAttributeChange({
         key: 'Codice Fiscale',
         type: 'updateAttribute',
         value,
      });
   const heading = translate('codice_fiscale.heading');
   const label = translate('codice_fiscale.label');
   return (
      <BlockStack>
         <Heading>{heading}</Heading>
         <TextField label={label} onChange={applyCodiceFiscaleChange} />
      </BlockStack>
   );
}
