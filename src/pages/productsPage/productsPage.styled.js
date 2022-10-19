import styled from 'styled-components';
import { devices } from '../../styles/global';

const ProductsPageWrapper = styled.div``;

export const OurProducts = styled.div`
  padding: 65px 0 110px;
  @media${devices.mobileS} {
    padding: 30px 0 75px;
  }
`;
export const Title = styled.h2`
  margin-bottom: 40px;
`;
export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
  gap: 50px 0;
  @media${devices.tablet} {
    gap: 40px 0;
  }
  @media${devices.mobileL} {
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  @media${devices.mobileS} {
    gap: 30px 0;
  }
`;

export const PerProductWrapper = styled.div`
  max-width: 25%;
  flex: 0 0 25%;
  padding: 0 10px;
  @media${devices.tabletL} {
    max-width: 33.3333%;
    flex: 0 0 33.3333%;
  }
  @media${devices.tablet} {
    max-width: 50%;
    flex: 0 0 50%;
  }
  @media${devices.mobileS} {
    max-width: 100%;
    flex: 0 0 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto 0;
  @media${devices.mobileS} {
    margin: 40px auto 0;
  }
`;

export default ProductsPageWrapper;
