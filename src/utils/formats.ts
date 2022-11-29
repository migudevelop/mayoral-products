import { NumberToCurrency } from 'interfaces';

export const numberToCurrency = ({
  number,
  lang = 'es-ES',
  currency = 'EUR',
}: NumberToCurrency): string =>
  new Intl.NumberFormat(lang, { style: 'currency', currency }).format(number);
