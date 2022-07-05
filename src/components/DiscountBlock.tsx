import React, { FC, useState } from 'react';
import styled from 'styled-components/macro';
import Button from './UI/Button';
import Form from './UI/Form';
import Input from './UI/Input';

type DiscountBlockProps = {
  addDiscount: (value: string) => void;
};

const DiscountBlockStyle = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  padding: 10px;

  background-color: #ffc633;
  border-radius: 10px;

  @media (max-width: 680px) {
    flex-direction: column;
  }
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
        <Input
          type='number'
          min='0'
          max='100'
          step='0.01'
          placeholder='Скидка'
          handler={inputHandler}
          value={discountValue}
        />
      </Form>
      <Button handler={resetHandler}>Убрать скидки</Button>
    </DiscountBlockStyle>
  );
};

export default DiscountBlock;
