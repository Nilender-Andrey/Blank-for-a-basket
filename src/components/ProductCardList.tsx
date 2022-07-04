import React, { FC } from 'react';
import styled from 'styled-components';
import { ProductType } from '../types';
import ProductCard from './ProductCard';

type ProductCardListProps = {
  goods: ProductType[];
  deleteProduct: (id: string) => void;
};

const ProductCardListStyle = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 10px;
`;

const ProductCardList: FC<ProductCardListProps> = ({
  goods,
  deleteProduct,
}) => {
  const items = goods.map((item) => (
    <ProductCard product={item} key={item.id} deleteProduct={deleteProduct} />
  ));

  return <ProductCardListStyle>{items}</ProductCardListStyle>;
};

export default ProductCardList;
