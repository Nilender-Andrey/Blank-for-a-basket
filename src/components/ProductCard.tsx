import React, { FC } from 'react';
import styled from 'styled-components';
import { ProductType } from '../types';
import CustomButton from './CustomButton';

type ProductCardProps = {
  product: ProductType;
  deleteProduct: (id: number) => void;
};

const ProductCardStyle = styled.li`
  padding: 20px 10px;
  width: 100%;
  max-width: 280px;

  border: 1px solid black;
  border-radius: 10px;

  p {
    font-size: 16px;
    margin-bottom: 5px;

    &:nth-child(2n) {
      margin-bottom: 0;
      font-weight: 700;
      margin-bottom: 15px;
      padding-bottom: 10px;

      border-bottom: 1px solid black;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
  span {
    font-weight: 700;
  }

  .product-id {
    overflow: auto;
  }
`;

const ProductCard: FC<ProductCardProps> = ({ product, deleteProduct }) => {
  const { id, productId, name, price } = product;

  const clickHandler = () => deleteProduct(id);

  return (
    <ProductCardStyle>
      <p>Числовой идентификатор товара:</p>
      <p className='product-id'>{productId}</p>
      <p>Название товара:</p>
      <p>{name}</p>
      <p>Цена товара:</p>
      <p>{price}</p>

      <CustomButton handler={clickHandler}>Удалить товар</CustomButton>
    </ProductCardStyle>
  );
};

export default ProductCard;
