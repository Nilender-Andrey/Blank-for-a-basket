import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { ProductType } from '../types';
import Flex from './UI/Flex';
import StrikeoutText from './UI/StrikeoutText';
import Text from './UI/Text';

type StatisticsBlockProps = {
  goods: ProductType[];
  discount: string;
};

const StatisticsBlockStyle = styled.div`
  width: 100%;

  padding: 20px;
  height: inherit;

  background-color: #ffc633;
  border-radius: 10px 10px 0 0;

  @media (max-width: 840px) {
    border-radius: 10px;
    padding: 10px;
    height: fit-content;
  }
`;

const StatisticsBlock: FC<StatisticsBlockProps> = ({ goods, discount }) => {
  console.log(goods);

  const price = goods.reduce((sum, item) => sum + +item.price, 0);
  const discountPrice = goods
    .reduce((sum, item) => sum + +item.discountPrice, 0)
    .toFixed(2);

  const priceText = discount ? (
    <Flex jc={'start'} ai={'center'} g={'5px'}>
      <Text fs={'16px'}>Цена текущего списка товаров:</Text>
      <StrikeoutText ta={'center'}>{price}</StrikeoutText>
      <Text fs={'16px'}>{discountPrice}</Text>
    </Flex>
  ) : (
    <Text fs={'16px'} m={'0 0 5px 0'}>
      Цена текущего списка товаров: {price}
    </Text>
  );

  return (
    <StatisticsBlockStyle>
      <Text fs={'18px'} fw={700} m={'0 0 10px 0'}>
        Cтатистика:
      </Text>
      <Text fs={'16px'} m={'0 0 5px 0'}>
        Количество добавленных товаров: {goods.length}
      </Text>
      {priceText}
    </StatisticsBlockStyle>
  );
};

export default StatisticsBlock;
