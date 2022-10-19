import styled from 'styled-components';
import { devices } from '../../styles/global';

export const ContactPageStyled = styled.div`
  width: 100%;
  padding: 110px 0;
  display: flex;
  justify-content: space-between;
  @media${devices.tablet} {
    flex-wrap: wrap-reverse;
    padding: 45px 0;
  }
`;

export const LeftSide = styled.div`
  max-width: 50%;
  flex: 0 0 50%;
  padding: 0 10px;
  h1 {
    margin-bottom: 45px;
    @media${devices.tablet} {
      margin-bottom: 20px;
    }
  }
  h2 {
    margin-bottom: 30px;
    @media${devices.tablet} {
      margin-bottom: 20px;
    }
  }
  @media${devices.tablet} {
    max-width: 100%;
    flex: 0 0 100%;
  }
`;
export const ContactText = styled.h4`
  margin-bottom: 83px;
  @media${devices.tablet} {
    margin-bottom: 40px;
  }
`;

export const RightSide = styled.div`
  max-width: 50%;
  flex: 0 0 50%;
  padding: 0 10px;
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
  @media${devices.tablet} {
    max-width: 100%;
    flex: 0 0 100%;
    margin-bottom: 45px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default ContactPageStyled;
