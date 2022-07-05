import React, { FC, useReducer } from 'react';
import { Validation } from '../helpers/validation';

import { ProductType } from '../types';
import CustomForm from './CustomForm';
import CustomInput from './CustomInput';

type ProductAddFormProps = {
  addProduct: (product: ProductType) => void;
};

type Reducer<S, A> = (prevState: S, action: A) => S;

const initialState = {
  id: '',
  name: '',
  price: '',
  isIdFilled: true,
  isNameFilled: true,
  isPriceFilled: true,
};

export interface FormAction {
  type: string;
  payload?: string | boolean;
}

interface ProductState {
  id: string;
  name: string;
  price: string;

  isIdFilled: boolean;
  isNameFilled: boolean;
  isPriceFilled: boolean;
}

const reducer: Reducer<ProductState, FormAction> = (
  state: ProductState,
  action: FormAction,
): ProductState => {
  if (typeof action.payload === 'string') {
    switch (action.type) {
      case 'addName':
        return { ...state, name: action.payload, isNameFilled: true };
      case 'addId':
        return { ...state, id: action.payload, isIdFilled: true };
      case 'addPrice':
        return { ...state, price: action.payload, isPriceFilled: true };
      case 'reset':
        return initialState;
    }
  }
  if (typeof action.payload === 'boolean') {
    switch (action.type) {
      case 'isIdFilled':
        return { ...state, isIdFilled: action.payload };
      case 'isNameFilled':
        return { ...state, isNameFilled: action.payload };
      case 'isPriceFilled':
        return { ...state, isPriceFilled: action.payload };
    }
  }

  return state;
};

const ProductAddForm: FC<ProductAddFormProps> = ({ addProduct }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const idHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    value = Validation.numbers(value, 0);
    dispatch({ type: 'addId', payload: value });
  };

  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch({ type: 'addName', payload: value });
  };

  const priceHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    value = Validation.numbers(value, 3);
    dispatch({ type: 'addPrice', payload: value });
  };

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!state.id) dispatch({ type: 'isIdFilled', payload: false });
    if (!state.name) dispatch({ type: 'isNameFilled', payload: false });
    if (!state.price) dispatch({ type: 'isPriceFilled', payload: false });

    if (state.id && state.name && state.price) {
      addProduct({
        id: Date.now(),
        productId: state.id,
        name: state.name,
        price: state.price,
      });
      dispatch({ type: 'reset', payload: 'reset' });
    }
  };

  return (
    <CustomForm submit={submitHandler} buttonText='Добавить'>
      <CustomInput
        type={'number'}
        placeholder={'Числовой идентификатор товара'}
        step={'1'}
        min={'0'}
        handler={idHandler}
        value={state.id}
        isFilled={state.isIdFilled}
      />

      <CustomInput
        type={'text'}
        placeholder={'Название товара'}
        value={state.name}
        handler={nameHandler}
        isFilled={state.isNameFilled}
      />

      <CustomInput
        type={'number'}
        placeholder={'Цена товара'}
        step={'0.01'}
        min={'0'}
        handler={priceHandler}
        value={state.price}
        isFilled={state.isPriceFilled}
      />
    </CustomForm>
  );
};

export default ProductAddForm;
