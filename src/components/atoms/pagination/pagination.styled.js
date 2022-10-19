import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 26px;
`;

export const NextButton = styled.div`
  cursor: pointer;
  transition: all 150ms ease;
  transform: rotate(180deg);
  line-height: 1;
  svg {
    circle {
      stroke: #b3b3b3;
    }
    path {
      fill: #b3b3b3;
    }
  }
  &:hover {
    svg {
      circle {
        stroke: var(--text-green);
      }
      path {
        fill: var(--text-green);
      }
    }
  }
`;
export const PrevButton = styled.div`
  cursor: pointer;
  line-height: 1;
  transition: all 150ms ease;
  svg {
    circle {
      stroke: #b3b3b3;
    }
    path {
      fill: #b3b3b3;
    }
  }
  &:hover {
    svg {
      circle {
        stroke: var(--text-green);
      }
      path {
        fill: var(--text-green);
      }
    }
  }
`;

export const PageNumbers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const Page = styled.h3`
  cursor: pointer;
  transition: all 150ms ease;
  color: ${({ active }) => (active ? 'var(--text-green)' : 'var(--text-dark)')};
  &:hover {
    color: var(--text-green);
  }
`;
