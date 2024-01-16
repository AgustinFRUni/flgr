import type { tCategory } from './categories';

export interface iGRES {
  id?: number;
  title: string;
  category: tCategory;
  route: string 
}