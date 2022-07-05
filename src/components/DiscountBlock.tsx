import React, { FC, useState } from 'react';
import styled from 'styled-components/macro';
import Button from './UI/Button';
import Flex from './UI/Flex';
import Form from './UI/Form';
import Input from './UI/Input';

type DiscountBlockProps = {
  addDiscount: (value: string) => void;
};

const DiscountBlockStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 10px;

  width: 100%;
  padding: 20px;
  height: inherit;

  background-color: #ffc633;
  border-radius: 10px 10px 0 0;
`;

const DiscountBlock: FC<DiscountBlockProps> = ({ addDiscount }) => {
  const [discountValue, setDiscountValue] = useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDiscountValue(value);
  };

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    addDiscount(discountValue);
  };

  const resetHandler = () => {
    setDiscountValue('');
    addDiscount('');
  };

  return (
    <DiscountBlockStyle>
      <Form submit={submitHandler} buttonText='Установить скидку'>
        <Flex m={'0 0 10px 0'}>
          <Input
            type='number'
            min='0'
            max='100'
            step='0.01'
            placeholder='Скидка'
            handler={inputHandler}
            value={discountValue}
          />
        </Flex>
      </Form>
      <Button handler={resetHandler}>Убрать скидки</Button>
    </DiscountBlockStyle>
  );
};

export default DiscountBlock;
