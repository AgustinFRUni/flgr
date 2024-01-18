import type { iGRES } from '../static/types/gres';

export const gres: iGRES[] = [
  {
    title: 'Usd',
    category: 'Icon',
    route: 'usd-circulo.png',
  },
  {
    title: 'Telegram',
    category: 'Icon',
    route: 'telegram.png',
  },
  {
    title: 'marzo',
    category: 'Sticker',
    route: 'marzo.png',
  },
  {
    title: 'Comprobacion',
    category: 'Shape',
    route: 'comprobacion.png',
  },
  {
    "title": "Text (1)",
    "category": "Textura",
    "route": "text(1).jpg"
},
{
    "title": "Text(2)",
    "category": "Textura",
    "route": "text(2).jpg"
},
{
    "title": "Text(3)",
    "category": "Textura",
    "route": "text(3).jpg"
},
{
    "title": "Text(4)",
    "category": "Textura",
    "route": "text(4).jpg"
},
{
    "title": "Text(5)",
    "category": "Textura",
    "route": "text(5).jpg"
},
{
    "title": "Text(6)",
    "category": "Textura",
    "route": "text(6).jpg"
},
{
    "title": "Text(7)",
    "category": "Textura",
    "route": "text(7).jpg"
},
{
    "title": "Text(8)",
    "category": "Textura",
    "route": "text(8).jpg"
},
{
    "title": "Text(9)",
    "category": "Textura",
    "route": "text(9).jpg"
},
{
    "title": "Text(10)",
    "category": "Textura",
    "route": "text(10).jpg"
},
{
    "title": "Text(11)",
    "category": "Textura",
    "route": "text(11).jpg"
},
{
    "title": "Text(12)",
    "category": "Textura",
    "route": "text(12).jpg"
},
{
    "title": "Text(13)",
    "category": "Textura",
    "route": "text(13).jpg"
},
{
    "title": "Text(14)",
    "category": "Textura",
    "route": "text(14).jpg"
},
{
    "title": "Text(15)",
    "category": "Textura",
    "route": "text(15).jpg"
},
{
    "title": "Text(16)",
    "category": "Textura",
    "route": "text(16).jpg"
},
{
    "title": "Text(17)",
    "category": "Textura",
    "route": "text(17).jpg"
},
{
    "title": "Text(18)",
    "category": "Textura",
    "route": "text(18).jpg"
},
{
    "title": "Text(19)",
    "category": "Textura",
    "route": "text(19).jpg"
},
{
    "title": "Text(20)",
    "category": "Textura",
    "route": "text(20).jpg"
}

];

export const getCategories = () => {
  return gres
  .map((gres) => gres.category.toLowerCase())
  .filter((category, index, array) => array.indexOf(category) === index);

}