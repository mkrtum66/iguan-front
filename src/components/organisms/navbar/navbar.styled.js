import styled from 'styled-components';

const IgNavbar = styled.div`
  padding: 20px 100px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  min-height: 80px;
  background: transparent;
  position: relative;
  .mobile-navbar-background {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    align-items: center;
    justify-content: center;
    z-index: -1;
    svg {
      height: 100%;
      object-fit: contain;
    }
  }
  .navbar-brand {
    width: 100px;
    height: 60px;
    cursor: pointer;
    transition: all 150ms ease;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .navbar-toggler {
    padding: 0;
    border: none;
    box-shadow: none;
  }
  .offcanvas-header {
    justify-content: flex-end;
  }
  .ig-navbar-items {
    display: flex;
    align-items: center;
    gap: 50px;
    a {
      font-weight: 600;
      font-size: 16px;
      color: #04080f;
      transition: all 150ms ease;
      &:hover {
        color: #6ebd44;
        transform: scale(1.05);
      }
      &.active {
        color: #6ebd44;
      }
    }
  }
  .responsive-navbar-nav {
    &.show {
      position: absolute;
      top: 109px;
      right: 0;
      z-index: 999;
      background-color: #71757a;
    }
  }
  @media (max-width: 1200px) {
    padding: 10px 50px;
    .ig-navbar-items {
      gap: 25px;
    }
  }
  @media (max-width: 991px) {
    justify-content: flex-end;
    display: flex;
    .navbar-brand {
      width: 80px;
      height: 48px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
    }
    .mobile-navbar-background {
      display: flex;
    }
  }
  @media (max-width: 575px) {
    padding: 10px 20px;
  }
  @media (max-width: 375px) {
    .mobile-navbar-background {
      width: 100%;
    }
  }
  .ig-backdrop {
    background-color: transparent;
  }
`;

export default IgNavbar;
