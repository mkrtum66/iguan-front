import React from 'react';
import ProductItemWrapper, { Description, ImageWrapper, Title } from './productItem.styled';

const ProductItem = ({ itemData }) => {
  return (
    <ProductItemWrapper>
      <ImageWrapper>
        <img src={itemData.imgUrl} alt="any" />
      </ImageWrapper>
      <Title>{itemData.title}</Title>
      <Description>{itemData.description}</Description>
    </ProductItemWrapper>
  );
};

export default ProductItem;
