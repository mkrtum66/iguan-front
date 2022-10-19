import styled from 'styled-components';
import { Tabs } from 'react-bootstrap';

const ServicePageWrapper = styled.div`
  width: 100%;
  background-color: var(--background-dark);
  padding-bottom: 30px;
  .tab-content {
    color: var(--text-white);
  }
`;

export const StyledTabs = styled(Tabs)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  //flex-wrap: nowrap;
  width: 100%;
  border: none;
  padding: 15px 0;
  margin: 0;
  .nav-item {
    button {
      padding: 10px;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      border: none;
      color: var(--text-green);
      background-color: transparent;
      transition: all 150ms ease;
      &.active,
      &:hover {
        background-color: transparent;
        color: var(--text-white);
        transform: scale(1.05);
      }
    }
  }
`;

export default ServicePageWrapper;
