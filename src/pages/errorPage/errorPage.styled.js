import styled from 'styled-components';
import bg from '../../assets/photos/errorPageBg.png';
import { devices } from '../../styles/global';

const ErrorPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImagesWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  max-width: 500px;
  height: 600px;
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
  .oops {
    position: absolute;
    right: 300px;
    top: 0;
    @media${devices.tabletL} {
      width: 210px;
      left: 0;
      right: 0;
    }
    @media${devices.mobileS} {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .astronaut {
    position: absolute;
    top: 165px;
    @media${devices.tabletL} {
      width: 210px;
      top: 80px;
      left: 150px;
    }
    @media${devices.mobileS} {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  @media (max-height: 780px) {
    position: relative;
    top: unset;
    left: unset;
    transform: unset;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
  }
  @media${devices.tabletL} {
    height: 300px;
  }
`;
export const Message = styled.p`
  font-weight: 600;
  font-size: 50px;
  line-height: 68px;
  position: absolute;
  bottom: 0;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  @media${devices.tabletL} {
    font-size: 32px;
    line-height: 48px;
  }
`;

export default ErrorPageStyled;
