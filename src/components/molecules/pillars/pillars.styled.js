import styled from 'styled-components';
import { devices } from '../../../styles/global';

const Wrapper = styled.div`
  position: relative;
  padding: 100px 0;
  @media ${devices.mobileL} {
    padding: 30px 0;
  }
`;

export const Title = styled.h1`
  color: var(--text-white);
  max-width: 718px;
  width: 100%;
  margin-bottom: 50px;
`;
export const Row = styled.div`
  display: flex;
  gap: 120px;
  margin-bottom: 45px;
  @media ${devices.laptop} {
    gap: 100px;
  }
  @media ${devices.tabletL} {
    gap: 80px;
  }
  @media ${devices.tablet} {
    gap: 50px;
  }
  @media ${devices.mobileL} {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

export const Card = styled.div`
  max-width: 490px;
  width: 100%;
`;

export const CardMobileButtonWrapper = styled.div`
  display: none;
  margin-top: 46px;
  @media ${devices.mobileL} {
    display: block;
  }
`;
export const CardDesktopButtonWrapper = styled.div`
  display: block;
  @media ${devices.mobileL} {
    display: none;
  }
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const CardTitle = styled.h2`
  color: var(--text-white);
`;

export const CardDescription = styled.h4`
  color: var(--text-white);
  max-height: ${({ showMore }) => (showMore ? '600px' : '125px')};
  overflow: hidden;
  position: relative;
  transition: all 0.5s linear;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50%;
    width: 100%;
    z-index: ${({ showMore }) => (showMore ? '-1' : '1')};
    background: ${({ showMore }) =>
      showMore
        ? 'linear-gradient(rgba(4, 8, 15, 0%), rgba(4, 8, 15, 0%))'
        : 'linear-gradient(rgba(4, 8, 15, 5%), rgba(4, 8, 15, 100%))'};
  }
`;

export const Iguana = styled.div`
  width: 290px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media ${devices.laptopL} {
    display: none;
  }
`;

export default Wrapper;
