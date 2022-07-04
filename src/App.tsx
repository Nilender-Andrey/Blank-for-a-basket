import React, { useState } from 'react';
import ProductAddForm from './components/ProductAddForm';
import ProductCardList from './components/ProductCardList';
import { ProductType } from './types';

function App() {
  const [goods, setGoods] = useState<ProductType[]>([]);

  const addProduct = (product: ProductType) => {
    setGoods((p) => [...p, product]);
  };

  const deleteProduct = (id: string) => {
    const products = goods.filter((item) => item.id !== id);
    console.log(products);
    setGoods(products);
  };

  console.log(goods);

  return (
    <div className='App'>
      <ProductAddForm addProduct={addProduct} />

      <ProductCardList goods={goods} deleteProduct={deleteProduct} />
    </div>
  );
}

export default App;
