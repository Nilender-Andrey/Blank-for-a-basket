import React, { FC, useReducer } from 'react';

import { ProductType } from '../types';
import CustomForm from './CustomForm';
import CustomInputNumber from './CustomInputNumber';

type ProductAddFormProps = {
  setGoods: React.Dispatch<React.SetStateAction<ProductType[] | null>>;
};

const initialState = { id: '', name: '', price: '' };

export interface FormAction {
  type: string;
  payload: string;
}

interface ProductState {
  id: string;
  name: string;
  price: string;
}

function reducer(state: ProductState, action: FormAction) {
  switch (action.type) {
    case 'addName':
      return { ...state, name: action.payload };
    case 'addId':
      return { ...state, id: action.payload };
    case 'addPrice':
      return { ...state, price: action.payload };
    default:
      return state;
  }
}

const ProductAddForm: FC<ProductAddFormProps> = ({ setGoods }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const idHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(state.id);

    dispatch({ type: 'addId', payload: event.target.value });
  };

  return (
    <CustomForm>
      <CustomInputNumber
        placeholder={'Числовой идентификатор товара'}
        step={'1'}
        min={'0'}
        handler={idHandler}
        value={state.id}
      />
      {/*   <input
        type='number'
        placeholder='Числовой идентификатор товара'
        step='1'
      />
      <input type='text' placeholder='Название товара' /> 
      <input type='number' placeholder='Цена товара' min='0' step='0.01' />*/}
    </CustomForm>
  );
};

export default ProductAddForm;
