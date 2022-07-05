import React from 'react';
import styled from 'styled-components';
import CustomButton from './CustomButton';
import CustomForm from './CustomForm';
import Input from './Input';

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

const DiscountBlock = () => {
  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <DiscountBlockStyle>
      <CustomForm submit={submitHandler} buttonText='Установить скидку'>
        <Input
          type='number'
          min='0'
          max='100'
          step='0.01'
          placeholder='Скидка'
        />
      </CustomForm>
      <CustomButton>Убрать скидки</CustomButton>
    </DiscountBlockStyle>
  );
};

export default DiscountBlock;
