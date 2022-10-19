import styled from 'styled-components';
import background from '../../assets/photos/processBg.png';
import { devices } from '../../styles/global';

const ProcessPageWrapper = styled.div`
  width: 100%;
`;

export const ProcessDarkSection = styled.div`
  width: 100%;
  background-color: var(--background-dark);
  color: var(--text-white);
`;

export const HowDoesItWork = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  padding-top: 40px;
  padding-bottom: 110px;
  @media ${devices.mobileL} {
    padding-top: 20px;
    padding-bottom: 50px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 106px;
  @media ${devices.mobileL} {
    margin-bottom: 40px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 20px;

  div:nth-of-type(even) {
    grid-column: 2;
  }

  @media ${devices.mobileL} {
    grid-template-columns: 1fr;
    gap: 40px;
    div:nth-of-type(even) {
      grid-column: 1;
    }
  }
`;

export const Col = styled.div`
  & > div {
    height: 414px;
    margin: -70px auto;
    background-color: var(--background-white);
  }
  @media ${devices.tabletL} {
    & > div {
      height: auto;
    }
  }
  @media ${devices.mobileL} {
    & > div {
      margin: 0;
    }
  }
`;

export default ProcessPageWrapper;
