/**
 * Created by lizarusi on 27.06.17.
 */
export interface Product {
  title: string;
  brand: string;
  discount?: number;
  condition: string;
  imageUrl: string;
  freeShipping?: boolean;
  price: number;
  oldPrice?: number;
}
