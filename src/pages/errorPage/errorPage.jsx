import React from 'react';
import ErrorPageStyled, { ImagesWrapper, Message } from './errorPage.styled';
import ooops from '../../assets/photos/Ooops.png';
import astronaut from '../../assets/photos/Astanavt.png';

const ErrorPage = () => {
  return (
    <ErrorPageStyled>
      <ImagesWrapper>
        <img src={ooops} alt="any" className="oops" />
        <img src={astronaut} alt="any" className="astronaut" />
        <Message>{'< /Page NOT Found>'}</Message>
      </ImagesWrapper>
    </ErrorPageStyled>
  );
};

export default ErrorPage;
