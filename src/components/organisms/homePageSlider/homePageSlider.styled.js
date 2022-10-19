import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { devices } from '../../../styles/global';

const Title = styled.h1`
  margin-bottom: 44px;
  @media ${devices.mobileL} {
    margin-bottom: 16px;
  }
`;

export const SliderWrapper = styled.div`
  padding-bottom: 55px;
`;

export const Slider = styled(Swiper)`
  padding: 10px 10px 55px;
  .swiper-slide {
    height: unset;
  }
  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    background-color: #d9d9d9;
    opacity: 1;
    &.swiper-pagination-bullet-active {
      background-color: var(--background-green);
    }
  }
`;

export default Title;
