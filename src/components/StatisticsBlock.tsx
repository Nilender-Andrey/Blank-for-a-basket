import React, { FC } from 'react';
import styled from 'styled-components';
import { ProductType } from '../types';
import Text from './Text';

type StatisticsBlockProps = {
  goods: ProductType[];
};

const StatisticsBlockStyle = styled.div`
  width: 100%;

  padding: 10px;
  min-height: inherit;

  background-color: #ffc633;
  border-radius: 10px;
`;

const StatisticsBlock: FC<StatisticsBlockProps> = ({ goods }) => {
  const price = goods.reduce((sum, item) => sum + +item.price, 0);

  return (
    <StatisticsBlockStyle>
      <Text fs={'18px'} fw={700} m={'0 0 10px 0'} ta={'center'}>
        Cтатистика:{' '}
      </Text>
      <Text fs={'16px'} m={'0 0 5px 0'} ta={'center'}>
        Количество добавленных товаров: {goods.length}
      </Text>
      <Text fs={'16px'} m={'0 0 5px 0'} ta={'center'}>
        Цена текущего списка товаров: {price}
      </Text>
    </StatisticsBlockStyle>
  );
};

export default StatisticsBlock;
