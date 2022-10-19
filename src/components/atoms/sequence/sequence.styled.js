import styled from 'styled-components';
import { devices } from '../../../styles/global';

const SequenceStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h3`
  margin-top: 62px;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 700;
  @media${devices.laptop} {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 16px;
  }
  @media${devices.tablet} {
    margin-top: 25px;
    margin-bottom: 15px;
  }
`;
export const Description = styled.h5`
  text-align: center;
  @media${devices.laptop} {
    font-size: 14px;
  }
`;

export default SequenceStyled;
