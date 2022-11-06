import { Product } from './Product';
import { Category } from './Category';

export interface ProductWithCategory extends Product {
  category: Category | null;
}
