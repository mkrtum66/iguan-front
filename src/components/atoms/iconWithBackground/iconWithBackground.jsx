import React from 'react';
import Background from './iconWithBackground.styled';

const IconWithBackground = ({ src, hovered, size = 'sm' }) => {
  return (
    <Background hovered={hovered} size={size}>
      <div className="green-background" />
      {src}
    </Background>
  );
};

export default IconWithBackground;
