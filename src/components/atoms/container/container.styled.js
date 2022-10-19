import styled from 'styled-components';
import { devices } from '../../../styles/global';

const StyledContainer = styled.div`
  max-width: 1540px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  @media ${devices.desktop} {
    max-width: 1400px;
  }
  @media ${devices.laptopL} {
    max-width: 1240px;
  }
  @media ${devices.laptop} {
    max-width: 1100px;
  }
  @media ${devices.tabletL} {
    max-width: 940px;
  }
  @media ${devices.tablet} {
    max-width: 840px;
  }
  @media ${devices.tabletS} {
    max-width: 740px;
  }
  @media ${devices.mobileL} {
    max-width: 640px;
  }
  @media ${devices.mobileM} {
    max-width: 540px;
    padding: 0 20px;
  }
  @media ${devices.mobile} {
    max-width: 100%;
  }
`;

export default StyledContainer;
