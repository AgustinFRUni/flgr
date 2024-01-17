import type { iGRES } from '../static/types/gres';

export const gres: iGRES[] = [
  {
    title: 'Usd',
    category: 'Icon',
    route: '/src/library/usd-circulo.png',
  },
  {
    title: 'Telegram',
    category: 'Icon',
    route: '/src/library/telegram.png',
  },
  {
    title: 'marzo',
    category: 'Sticker',
    route: '/src/library/marzo.png',
  },
  {
    title: 'Comprobacion',
    category: 'Shape',
    route: '/src/library/comprobacion.png',
  }
];

export const getCategories = () => {
  return gres
  .map((gres) => gres.category.toLowerCase())
  .filter((category, index, array) => array.indexOf(category) === index);

}