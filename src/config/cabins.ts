import { Cabin } from '../types/booking';

export const cabins: Cabin[] = [
  {
    id: 'lying-1',
    name: '1 kabina gulimas',
    type: 'lying',
    description: 'Aukščiausios klasės gulima kabina su 42UV lempom ir vedinimo sistema',
    image: 'https://i.imgur.com/xGtSKlR.jpeg',
    pricePerMinute: 0.70
  },
  {
    id: 'standing-1',
    name: '2 kabina stovimas',
    type: 'standing',
    description: 'Prabangi stovima kabina su 42UV lempom ir vėdinimo sistema',
    image: 'https://i.imgur.com/BfJvZrr.jpeg',
    pricePerMinute: 0.70
  },
  {
    id: 'lying-2',
    name: '3 kabina gulimas',
    type: 'lying',
    description: 'Aukščiausios klasės gulima kabina su aromoterapija ir valdoma muzika',
    image: 'https://i.imgur.com/BglgqEp.jpeg',
    pricePerMinute: 0.70
  }
];