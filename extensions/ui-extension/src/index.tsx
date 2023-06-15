import { render } from '@shopify/checkout-ui-extensions-react';
import { CodiceFiscale, Vat } from './fields';

render('Checkout::Dynamic::Render', () => <CodiceFiscale />);
render('Checkout::Reductions::RenderAfter', () => <Vat />);
