import { createGlobalStyle } from 'styled-components';
import OpenSansLight from '../fonts/OpenSans-Light.ttf';
import OpenSansRegular from '../fonts/OpenSans-Regular.ttf';
import OpenSansSemiBold from '../fonts/OpenSans-SemiBold.ttf';
import OpenSansBold from '../fonts/OpenSans-Bold.ttf';
import OpenSansExtraBold from '../fonts/OpenSans-ExtraBold.ttf';
import LondrinaShadow from '../fonts/LondrinaShadow-Regular.ttf';

const sizes = {
  mobileXs: '420px',
  mobile: '480px',
  mobileS: '560px',
  mobileM: '680px',
  mobileL: '767px',
  tabletS: '900px',
  tablet: '991px',
  tabletL: '1140px',
  laptop: '1300px',
  laptopL: '1440px',
  desktop: '1600px',
};

export const devices = {
  mobileXs: `(max-width: ${sizes.mobileXs})`,
  mobile: `(max-width: ${sizes.mobile})`,
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tabletS: `(max-width: ${sizes.tabletS})`,
  tablet: `(max-width: ${sizes.tablet})`,
  tabletL: `(max-width: ${sizes.tabletL})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

const GlobalStyle = createGlobalStyle`
  :root{
    --text-green: #6EBD44;
    --text-white: #FFFFFF;
    --text-dark: #04080F;
    --text-dark2: #303030;
    --text-red: #CB2121;
    --background-green: #6EBD44;
    --background-dark: #04080F;
    --background-white: #FFFFFF;
    --background-grey: #E6E6E6;
    --background-transparent: rgba(0,0,0,0);
    --border-transparent:  rgba(0,0,0,0);
    --border-green: #6EBD44;
    --border-dark: #04080F;
  }
  
  @font-face {
    font-family: "Open Sans";
    font-weight: 300;
    src: url(${OpenSansLight});
  }
  @font-face {
    font-family: "Open Sans";
    font-weight: 400;
    src: url(${OpenSansRegular});
  }
  @font-face {
    font-family: "Open Sans";
    font-weight: 600;
    src: url(${OpenSansSemiBold});
  }
  @font-face {
    font-family: "Open Sans";
    font-weight: 700;
    src: url(${OpenSansBold});
  }
  @font-face {
    font-family: "Open Sans";
    font-weight: 800;
    src: url(${OpenSansExtraBold});
  }
  @font-face {
    font-family: 'Londrina Shadow', cursive;
    font-weight: 400;
    src: url(${LondrinaShadow});
  }
  
  *{
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  .App{
    display: flex;
    flex-direction: column;
    height: 100%;
    color: var(--text-dark);
  }
  h1,h2,h3,h4,h5,h6,p{
    margin: 0;
    font-weight: 400;
  }
  h1{
    font-size: 65px;
    line-height: 89px;
    @media ${devices.desktop} {
      font-size: 55px;
      line-height: 69px;
    }
    @media ${devices.laptop} {
      font-size: 45px;
      line-height: 59px;
    }
    @media ${devices.tabletL} {
      font-size: 36px;
      line-height: 50px;
    }
    @media ${devices.tablet} {
      font-size: 35px;
      line-height: 47px;
    }
  }
  h2{
    font-size: 28px;
    line-height: 38px;
    @media ${devices.laptop} {
      font-size: 24px;
      line-height: 34px;
    }
    @media ${devices.tabletL} {
      font-size: 22px;
      line-height: 30px;
    }
    @media ${devices.tablet} {
      font-size: 20px;
      line-height: 26px;
    }
  }
  h3{
    font-size: 20px;
    line-height: 27px;
  }
  h4{
    font-size: 18px;
    line-height: 25px;
    @media ${devices.mobileL} {
      font-size: 16px;
      line-height: 22px;
    }
  }
  h5 {
    font-size: 16px;
    line-height: 22px;
  }
  h6{
    font-size: 14px;
    line-height: 19px;
  }
  p{
    font-size: 18px;
    line-height: 25px;
  }
  a{
    text-decoration: none !important;
    color: inherit;
  }
  @media (max-width: 991px){
    #offcanvasNavbar-expand-lg{
      width: 340px;
      background-color: #04080F;
      padding: 30px 70px 0 0;
      .offcanvas-header{
        justify-content: flex-end;
        padding: 0;
        margin-bottom: 40px;
      }
      .offcanvas-body{
        justify-content: flex-end;
        padding: 0;
        .ig-navbar-items{
          color: #fff;
          align-items: flex-end;
          gap: 40px;
        }
      }
    }
    .mobile-navbar-background{
      display: flex;
    }
  }
  @media (max-width: 575px) {
    #offcanvasNavbar-expand-lg{
      padding: 25px 20px 0 0;
      width: 266px;
    }
  }
`;

export default GlobalStyle;
