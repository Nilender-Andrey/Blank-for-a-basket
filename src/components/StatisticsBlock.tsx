import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { ProductType } from '../types';
import StrikeoutText from './UI/StrikeoutText';
import Text from './UI/Text';

type StatisticsBlockProps = {
  goods: ProductType[];
  discount: string;
};

const StatisticsBlockStyle = styled.div`
  width: 100%;

  padding: 10px;
  min-height: inherit;

  background-color: #ffc633;
  border-radius: 10px;
`;

const StatisticsBlock: FC<StatisticsBlockProps> = ({ goods, discount }) => {
  const price = goods.reduce((sum, item) => sum + +item.price, 0);
  const discountPrice = goods.reduce(
    (sum, item) => sum + +item.discountPrice,
    0,
  );

  const priceText = discount ? (
    <Text fs={'16px'} m={'0 0 5px 0'} ta={'center'}>
      Цена текущего списка товаров:<StrikeoutText>{price}</StrikeoutText>{' '}
      {discountPrice}
    </Text>
  ) : (
    <Text fs={'16px'} m={'0 0 5px 0'} ta={'center'}>
      Цена текущего списка товаров: {price}
    </Text>
  );

  return (
    <StatisticsBlockStyle>
      <Text fs={'18px'} fw={700} m={'0 0 10px 0'} ta={'center'}>
        Cтатистика:{' '}
      </Text>
      <Text fs={'16px'} m={'0 0 5px 0'} ta={'center'}>
        Количество добавленных товаров: {goods.length}
      </Text>
      {priceText}
    </StatisticsBlockStyle>
  );
};

export default StatisticsBlock;
