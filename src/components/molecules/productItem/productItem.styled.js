import styled from 'styled-components';

const ProductItemWrapper = styled.div`
  width: 100%;
  height: auto;
  cursor: pointer;
  transition: all 150ms ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const ImageWrapper = styled.div`
  padding: 22px;
  background-color: var(--background-grey);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    margin: 0 auto;
  }
`;

export const Title = styled.h4`
  margin: 10px 0;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Description = styled.h5`
  font-weight: 400;
  color: var(--text-dark2);
  text-transform: capitalize;
`;

export default ProductItemWrapper;
