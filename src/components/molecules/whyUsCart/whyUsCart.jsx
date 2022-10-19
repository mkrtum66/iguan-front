import React from 'react';
import Wrapper, { Header, Title } from './whyUsCart.styled';
import IconWithBackground from '../../atoms/iconWithBackground';

const WhyUsCart = ({ cartData }) => {
  if (!cartData) {
    return <h2>No Data</h2>;
  }
  return (
    <Wrapper>
      <Header>
        <IconWithBackground src={cartData.icon} />
        <Title>{cartData.title}</Title>
      </Header>
      <h5>{cartData.body}</h5>
    </Wrapper>
  );
};

export default WhyUsCart;
