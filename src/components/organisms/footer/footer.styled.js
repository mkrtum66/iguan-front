import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { devices } from '../../../styles/global';

const FooterWrapper = styled.footer`
  background: var(--background-dark);
`;

export const FooterContent = styled.div`
  padding: 60px 0;
`;
export const Row = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  @media ${devices.tabletL} {
    flex-direction: column;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 365px;
  width: 100%;
  h6 {
    color: var(--text-white);
  }
  @media ${devices.tabletL} {
    margin: 0 auto 40px;
    h6 {
      text-align: center;
    }
  }
`;

export const FooterLogoWrapper = styled.div`
  width: 164px;
  height: 87px;
  margin-bottom: 35px;
  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media ${devices.tabletL} {
    margin: 0 auto 40px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px;
  max-width: 600px;
  width: 100%;
  @media ${devices.tabletL} {
    gap: 20px;
    margin: 0 auto;
  }
`;
export const Col = styled.div`
  width: 33.3%;
  flex: 0 0 33.3%;
  padding: 0 10px;
  flex-direction: column;
  display: flex;
  gap: 20px;
  @media ${devices.tabletL} {
    width: 100%;
    flex: 0 0 100%;
    justify-content: center;
    align-items: center;
  }
`;
export const Link = styled(NavLink)`
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: var(--text-white);
  transition: all 150ms ease;
  &:hover {
    color: #6ebd44;
    transform: scale(1.05);
  }
`;
export const LetsTalk = styled.div`
  h4 {
    color: var(--text-white);
    margin-bottom: 20px;
  }
  @media ${devices.tabletL} {
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
  }
`;

export const ContactRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  gap: 0 50px;
  @media ${devices.mobileL} {
    flex-wrap: wrap;
    gap: 20px 0;
  }
`;

export const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-white);
  transition: all 150ms ease;
  &:hover {
    color: #6ebd44;
  }
  svg {
    width: 20px;
    height: 20px;
  }
  @media ${devices.mobileL} {
    max-width: 50%;
    flex: 0 0 50%;
  }
  @media ${devices.mobileXs} {
    max-width: 100%;
    flex: 0 0 100%;
  }
`;

export const CopyRight = styled.div`
  width: 100%;
  padding: 30px 20px;
  border-top: 1px solid rgba(230, 230, 230, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  h5 {
    color: var(--text-white);
    @media ${devices.mobileXs} {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

export default FooterWrapper;
