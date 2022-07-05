import { ProductType } from '../types';

export class Validation {
  static numbers = (str: string, decimals: number) => {
    const index = str.indexOf('.') === -1 ? str.length : str.indexOf('.');
    return str.slice(0, index + decimals);
  };

  static productId = (product: ProductType, goods: ProductType[]) => {
    return goods.find((item) => item.id === product.id);
  };
}
