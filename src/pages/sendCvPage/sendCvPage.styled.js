import styled from 'styled-components';
import PhoneInput from 'react-phone-input-2';
import { devices } from '../../styles/global';

const SendCvPageStyled = styled.div`
  padding: 110px 0;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  @media${devices.mobileL} {
    flex-direction: column-reverse;
  }
`;

export const Form = styled.form`
  max-width: 750px;
  width: 100%;
  h1 {
    margin-bottom: 54px;
  }
  h2 {
    font-weight: 600;
    margin-bottom: 30px;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #8d8d8d;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  padding: 10px 17px;
  border-radius: 5px;
  box-shadow: none;
  outline: none;
  height: 47px;
  &.name-input {
    margin-bottom: 21px;
  }
  &.email-input {
    margin-bottom: 42px;
  }
`;

export const PhoneInputStyled = styled(PhoneInput)`
  margin-bottom: 54px;
  .form-control {
    box-shadow: none;
    outline: none;
    width: 100%;
    border: 1px solid #8d8d8d;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    padding: 10px 17px 10px 60px;
    border-radius: 5px;
    height: 47px;
  }
  .flag-dropdown {
    background-color: var(--background-white);
    border: 1px solid #8d8d8d;
    .selected-flag {
      width: 50px;
      padding: 0 0 0 15px;
      border-radius: 5px 0 0 5px;
    }
  }
`;

export const UploadFileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media${devices.mobileS} {
    align-items: flex-start;
    flex-direction: column;
    gap: 36px;
  }
`;

export const UploadFile = styled.label`
  display: flex;
  align-items: center;
  gap: 18px;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  h4 {
    color: var(--text-green);
    font-weight: 700;
    margin-bottom: 7px;
  }
`;

export const RightSide = styled.div`
  max-width: 365px;
  width: 100%;
  pointer-events: none;
  @media${devices.mobileL} {
    max-width: 100%;
  }
`;

export default SendCvPageStyled;
