import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { ProductType } from '../types';
import Button from './UI/Button';
import StrikeoutText from './UI/StrikeoutText';
import Text from './UI/Text';

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
`;

const PriceBlockStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;

  padding-bottom: 10px;

  font-size: 24px;
  font-weight: 700;
`;

const ProductCard: FC<ProductCardProps> = ({ product, deleteProduct }) => {
  const { id, productId, name, price, discountPrice } = product;

  const clickHandler = () => deleteProduct(id);

  const priceBlock = discountPrice ? (
    <>
      <StrikeoutText ta={'center'} fs={'20px'}>
        {price}
      </StrikeoutText>
      <Text ta={'center'} color={'red'} fs={'30px'}>
        {discountPrice}
      </Text>
    </>
  ) : (
    <Text fs={'32px'}>{price}</Text>
  );

  return (
    <ProductCardStyle>
      <Text fs='16px' p={'0 0 5px 0'}>
        Числовой идентификатор товара:
      </Text>
      <Text fs='16px' fw={700} p={'0 0 5px 0'} m={'0 0 5px 0'}>
        {productId}
      </Text>

      <Text fs='16px' p={'0 0 5px 0'}>
        Название товара:
      </Text>
      <Text fs='16px' fw={700} p={'0 0 5px 0'} m={'0 0 5px 0'}>
        {name}
      </Text>
      <Text fs='16px' p={'0 0 5px 0'}>
        Цена товара:
      </Text>
      <PriceBlockStyle>{priceBlock}</PriceBlockStyle>

      <Button handler={clickHandler}>Удалить товар</Button>
    </ProductCardStyle>
  );
};

export default ProductCard;
