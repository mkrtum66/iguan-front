import React from 'react';
import SequenceStyled, { Description, Title } from './sequence.styled';
import IconWithBackground from '../iconWithBackground';

const Sequence = ({ data }) => {
  return (
    <SequenceStyled>
      <IconWithBackground src={data.photo} hovered size={'lg'} />
      <Title>{data.title}</Title>
      <Description>{data.text}</Description>
    </SequenceStyled>
  );
};

export default Sequence;
