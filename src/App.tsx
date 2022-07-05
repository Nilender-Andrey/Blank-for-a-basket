import React, { useEffect, useState } from 'react';
import DiscountBlock from './components/DiscountBlock';
import Footer from './components/Footer';
import Main from './components/Main';
import ProductAddForm from './components/ProductAddForm';
import ProductCardList from './components/ProductCardList';
import StatisticsBlock from './components/StatisticsBlock';
import Text from './components/UI/Text';
import { getDiscountPrice } from './helpers/calcDiscontPrice';
import { ProductType } from './types';

function App() {
  const [goods, setGoods] = useState<ProductType[]>([]);
  const [discount, setDiscount] = useState('');

  const addProduct = (product: ProductType) => {
    product.discountPrice = getDiscountPrice(product.price, discount);
    product.price = Number(product.price).toFixed(2);
    setGoods((p) => [...p, product]);
  };

  const deleteProduct = (id: number) => {
    const products = goods.filter((item) => item.id !== id);
    setGoods(() => products);
  };

  const addDiscount = (value: string) => {
    if (discount !== value) setDiscount(value);
  };

  useEffect(() => {
    if (goods.length) {
      const products = goods.map((item) => {
        item.discountPrice = getDiscountPrice(item.price, discount);
        return item;
      });

      setGoods(products);
    }
  }, [discount]);

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
        <StatisticsBlock goods={goods} discount={discount} />
        <DiscountBlock addDiscount={addDiscount} />
      </Footer>
    </div>
  );
}

export default App;
