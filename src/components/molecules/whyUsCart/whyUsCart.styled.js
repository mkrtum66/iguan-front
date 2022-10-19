import styled from 'styled-components';
import { devices } from '../../../styles/global';

const Wrapper = styled.div`
  max-width: 364px;
  width: 100%;
  @media ${devices.laptopL} {
    max-width: 300px;
  }
  @media ${devices.tabletL} {
    max-width: 50%;
    padding: 0 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
`;

export const Title = styled.h4`
  font-weight: 600;
`;

export default Wrapper;
