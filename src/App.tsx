import React, { useState } from 'react';
import ProductAddForm from './components/ProductAddForm';
import { ProductType } from './types';

function App() {
  const [goods, setGoods] = useState<ProductType[]>([]);

  const addProduct = (product: ProductType) => {
    setGoods((p) => [...p, product]);
  };

  console.log(goods);

  return (
    <div className='App'>
      <ProductAddForm addProduct={addProduct} />

      <main>{goods.length ? 'Что-то есть' : 'список пуст'}</main>
    </div>
  );
}

export default App;
