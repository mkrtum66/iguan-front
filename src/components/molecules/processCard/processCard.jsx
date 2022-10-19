import React from 'react';
import ProcessCartWrapper, { CartDescription, CartNumber, CartTitle } from './processCard.styled';
import IconWithBackground from '../../atoms/iconWithBackground';

const ProcessCard = ({ data }) => {
  return (
    <ProcessCartWrapper>
      <CartNumber>{data.id}</CartNumber>
      <IconWithBackground src={data.image} />
      <CartTitle>{data.title}</CartTitle>
      <CartDescription>{data.description}</CartDescription>
    </ProcessCartWrapper>
  );
};

export default ProcessCard;
