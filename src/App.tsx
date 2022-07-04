import React, { useState } from 'react';
import ProductAddForm from './components/ProductAddForm';
import { ProductType } from './types';

function App() {
  const [goods, setGoods] = useState<ProductType[] | null>(null);
  return (
    <div className='App'>
      <header>
        <ProductAddForm setGoods={setGoods} />
      </header>

      <main>{goods ? 'Товар есть' : 'список пуст'}</main>
    </div>
  );
}

export default App;
