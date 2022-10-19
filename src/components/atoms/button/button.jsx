import React from 'react';
import { StyledButton } from './button.styled';

const Button = ({ children, outlined, onClick, type = 'button', classname, size = 'md' }) => {
  return (
    <StyledButton
      className={classname}
      outlined={outlined}
      onClick={onClick}
      type={type}
      size={size}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
