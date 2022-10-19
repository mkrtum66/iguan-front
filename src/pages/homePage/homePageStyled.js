import styled from 'styled-components';
import { devices } from '../../styles/global';

const Section = styled.div`
  padding: ${({ padding }) => (padding ? padding : '0')};
  @media ${devices.tablet} {
    padding: 10px 0 70px 0;
  }
`;

export const PillarsWrapper = styled.div`
  background-color: #04080f;
`;

export default Section;
