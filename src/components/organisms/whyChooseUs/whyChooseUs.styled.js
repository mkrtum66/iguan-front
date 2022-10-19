import styled from 'styled-components';
import { devices } from '../../../styles/global';
import Accordion from 'react-bootstrap/Accordion';

const Title = styled.h1`
  margin-bottom: 56px;
  @media ${devices.mobileL} {
    margin-bottom: 40px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: ${({ align }) => (align ? align : 'flex-start')};
  justify-content: space-between;
  gap: 150px;
  padding-bottom: 110px;
  @media ${devices.laptopL} {
    gap: 0;
  }
  @media ${devices.mobileL} {
    flex-direction: column;
    padding-bottom: 70px;
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 20px;
  max-width: 750px;
  width: 100%;
  @media ${devices.tabletL} {
    max-width: 100%;
    gap: 40px 0;
  }
  @media ${devices.mobileL} {
    display: none;
  }
`;

export const Image = styled.div`
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media ${devices.tabletL} {
    display: none;
  }
  @media ${devices.mobileL} {
    display: block;
    width: 100%;
  }
`;

export const AccordionWrapper = styled.div`
  display: none;
  width: 100%;
  margin-bottom: 70px;
  @media ${devices.mobileL} {
    display: block;
  }
`;

export const StyledAccordion = styled(Accordion)`
  background: var(--background-white);
`;
export const StyledItem = styled(Accordion.Item)`
  border: none;
`;
export const ItemHeader = styled(Accordion.Header)`
  button {
    display: flex;
    align-items: center;
    color: var(--text-dark) !important;
    background: var(--background-transparent) !important;
    box-shadow: none !important;
    outline: none !important;
    padding-left: 0;
    padding-right: 0;
    &:not(.collapsed)::after {
      background-image: var(--bs-accordion-btn-icon) !important;
    }
    h4 {
      font-weight: 600;
      margin-left: 20px;
    }
  }
`;

export default Title;
