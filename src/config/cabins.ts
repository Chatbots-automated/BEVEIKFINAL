import { Cabin } from '../types/booking';

export const cabins: Cabin[] = [
  {
    id: 'lying-1',
    name: 'Pirmoji gulima kabina',
    type: 'lying',
    description: 'Aukščiausios klasės gulima kabina su 42UV lempom ir vedinimo sistema',
    image: 'https://i.imgur.com/a/tLW9kBA.jpg',
    pricePerMinute: 0.70
  },
  {
    id: 'standing-1',
    name: 'Stovima kabina',
    type: 'standing',
    description: 'Prabangi stovima kabina su 42UV lempom ir vėdinimo sistema',
    image: 'https://i.imgur.com/BfJvZrr.jpg',
    pricePerMinute: 0.70
  },
  {
    id: 'lying-2',
    name: 'Antroji gulima kabina',
    type: 'lying',
    description: 'Aukščiausios klasės gulima kabina su aromoterapija ir valdoma muzika',
    image: 'https://i.imgur.com/BglgqEp.jpg',
    pricePerMinute: 0.70
  }
];