import React, { useState } from 'react';
import DiscountBlock from './components/DiscountBlock';
import Footer from './components/Footer';
import Main from './components/Main';
import ProductAddForm from './components/ProductAddForm';
import ProductCardList from './components/ProductCardList';
import StatisticsBlock from './components/StatisticsBlock';
import Text from './components/Text';
import { ProductType } from './types';

function App() {
  const [goods, setGoods] = useState<ProductType[]>([]);
  const [discount, setDiscount] = useState<number>(0);

  const addProduct = (product: ProductType) => {
    setGoods((p) => [...p, product]);
  };

  const deleteProduct = (id: number) => {
    const products = goods.filter((item) => item.id !== id);
    setGoods(() => products);
  };

  console.log(goods);

  return (
    <div className='App'>
      <ProductAddForm addProduct={addProduct} />
      <Main>
        {goods.length ? (
          <ProductCardList goods={goods} deleteProduct={deleteProduct} />
        ) : (
          <Text fs={'32px'} ta={'center'}>
            Список пуст
          </Text>
        )}
      </Main>
      <Footer>
        <StatisticsBlock goods={goods} />
        <DiscountBlock />
      </Footer>
    </div>
  );
}

export default App;
