import styled from 'styled-components';
import { devices } from '../../styles/global';

const CurrentJobPageStyled = styled.div`
  width: 100%;
  padding-top: 160px;
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  @media${devices.mobileL} {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
  }
`;
export const LeftSide = styled.div`
  max-width: 750px;
  width: 100%;
  @media${devices.mobileL} {
    max-width: 100%;
    margin: 0 auto;
  }
`;
export const PositionCartWrapper = styled.div`
  position: sticky;
  top: 20px;
  bottom: 30px;
  right: 0;
  max-width: 365px;
  width: 100%;
  height: 100%;
  @media${devices.mobileL} {
    position: relative;
    top: unset;
    bottom: unset;
    right: unset;
    margin-bottom: 20px;
  }
`;
export const TopPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
`;
export const TitleDescription = styled.div`
  width: 100%;
  margin-bottom: 54px;
  h1 {
    text-transform: capitalize;
    margin-bottom: 54px;
    @media${devices.mobileL} {
      margin-bottom: 20px;
    }
  }
  h4 {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
    @media${devices.mobileL} {
      margin-bottom: 20px;
    }
  }
`;

export const Requirements = styled.div`
  h1 {
    margin-bottom: 54px;
    @media${devices.mobileL} {
      margin-bottom: 30px;
    }
  }
  h2 {
    margin-bottom: 30px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 56px;
    li {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 30px;
      &:last-child {
        margin: 0;
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
    @media${devices.mobileL} {
      margin-bottom: 40px;
      li h3 {
        font-size: 16px;
      }
    }
  }
`;
export const SequenceWrapper = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 110px;
  margin-top: 70px;
  align-items: stretch;
  justify-content: space-between;
  @media${devices.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;

export const DashedRow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 85%;
  height: auto;
  z-index: -1;
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
  @media${devices.tablet} {
    display: none;
  }
`;

export const SequenceCol = styled.div`
  max-width: 237px;
  min-width: 180px;
  @media${devices.tablet} {
    max-width: 600px;
  }
`;

export const SendCvButtonWrapper = styled.div`
  display: none;
  position: sticky;
  bottom: 0;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  background-color: var(--background-white);
  border-top: 1px solid var(--border-green);
  @media${devices.mobileL} {
    display: flex;
  }
`;

export default CurrentJobPageStyled;
