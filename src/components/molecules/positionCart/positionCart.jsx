import React from 'react';
import CartWrapper, {
  CartBody,
  CartFooter,
  CartHeader,
  Level,
  Position,
  State,
  Type,
} from './positionCart.styled';
import Button from '../../atoms/button';

const PositionCart = ({ data, onClick }) => {
  return (
    <CartWrapper>
      <CartHeader>
        <Type>{data.type}</Type>
        <State>{data.state}</State>
      </CartHeader>
      <CartBody>
        <Position>{data.position}</Position>
        <Level>{data.level}</Level>
      </CartBody>
      <CartFooter>
        <Button outlined onClick={onClick}>
          Apply Now
        </Button>
      </CartFooter>
    </CartWrapper>
  );
};

export default PositionCart;
