import styled from 'styled-components';
import { devices } from '../../styles/global';

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ reversed }) => (reversed ? 'row-reverse' : 'row')};
  align-items: center;
  margin-bottom: 70px;
  gap: 0 20px;
  @media${devices.mobileL} {
    flex-wrap: wrap-reverse;
    margin-bottom: 0;
  }
`;

export const TextPart = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 875px;
  width: 100%;
  @media${devices.mobileL} {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  margin-bottom: 54px;
  @media${devices.mobileL} {
    margin-bottom: 20px;
  }
`;
export const Text = styled.h4`
  margin-bottom: 32px;
  @media${devices.mobileL} {
    margin-bottom: 20px;
  }
`;

export const ImagePart = styled.div`
  max-width: 622px;
  height: auto;
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
  @media${devices.mobileL} {
    max-width: 100%;
  }
`;

export const GallerySlider = styled.div`
  max-width: 1500px;
  position: relative;
  margin: 0 auto 80px auto;
  display: flex;
  align-items: center;
  gap: 20px;
  .gallerySwiper {
    height: 300px;
    .swiper-slide {
      background: transparent;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .prev,
  .next {
    min-width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid #6ebd44;
    background: transparent;
    z-index: 1;
  }
  .prev {
    left: 0;
    position: relative;
    transition: all 150ms ease-in-out;
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 47%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      border-right: solid 10px #6ebd44;
      border-bottom: solid 7px transparent;
      border-top: solid 7px transparent;
    }
    &:hover {
      transform: scale(1.05);
    }
  }
  .next {
    right: 0;
    position: relative;
    transition: all 150ms ease-in-out;
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 55%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      border-left: solid 10px #6ebd44;
      border-bottom: solid 7px transparent;
      border-top: solid 7px transparent;
    }
    &:hover {
      transform: scale(1.05);
    }
  }
  @media${devices.mobileL} {
    padding-bottom: 80px;
    margin: 0 auto 70px auto;
    .prev,
    .next {
      position: absolute;
      bottom: 0;
    }
    .prev {
      left: 80px;
    }
    .next {
      right: 80px;
    }
  }
`;

export default Section;
