import React, { FC, useReducer } from 'react';
import styled from 'styled-components';
import { Validation } from '../helpers/validation';
import { ProductType } from '../types';
import Flex from './UI/Flex';
import Form from './UI/Form';
import Input from './UI/Input';
import Text from './UI/Text';

type ProductAddBlockProps = {
  addProduct: (product: ProductType) => void;
};

const ProductAddBlockStyle = styled.header`
  max-width: 1000px;
  margin: 0 auto;

  padding: 10px;

  background-color: #ffc633;
  border-radius: 0 0 10px 10px;
`;

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

const reducer = (state: ProductState, action: FormAction): ProductState => {
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

const ProductAddBlock: FC<ProductAddBlockProps> = ({ addProduct }) => {
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
        discountPrice: '0',
      });
      dispatch({ type: 'reset', payload: 'reset' });
    }
  };

  return (
    <ProductAddBlockStyle>
      <Form submit={submitHandler} buttonText='????????????????'>
        <Flex fw={'wrap'} g={'5px'} jc={'center'}>
          <Flex fd={'column'}>
            <Input
              type={'number'}
              placeholder={'???????????????? ?????????????????????????? ????????????'}
              step={'1'}
              min={'0'}
              handler={idHandler}
              value={state.id}
            />
            <Text
              p={'5px 20px'}
              color={'red'}
              v={state.isIdFilled ? 'hidden' : 'visible'}>
              ???????? ???? ??????????????????
            </Text>
          </Flex>

          <Flex fd={'column'}>
            <Input
              type={'text'}
              placeholder={'???????????????? ????????????'}
              value={state.name}
              handler={nameHandler}
            />
            <Text
              p={'5px 20px'}
              color={'red'}
              v={state.isNameFilled ? 'hidden' : 'visible'}>
              ???????? ???? ??????????????????
            </Text>
          </Flex>

          <Flex fd={'column'}>
            <Input
              type={'number'}
              placeholder={'???????? ????????????'}
              step={'0.01'}
              min={'0'}
              handler={priceHandler}
              value={state.price}
            />
            <Text
              p={'5px 20px'}
              color={'red'}
              v={state.isPriceFilled ? 'hidden' : 'visible'}>
              ???????? ???? ??????????????????
            </Text>
          </Flex>
        </Flex>
      </Form>
    </ProductAddBlockStyle>
  );
};

export default ProductAddBlock;
