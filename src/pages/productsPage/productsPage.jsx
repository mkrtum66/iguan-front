import React from 'react';
import ProductsPageWrapper, {
  ButtonWrapper,
  OurProducts,
  PerProductWrapper,
  ProductsWrapper,
  Title,
} from './productsPage.styled';
import Container from '../../components/atoms/container';
import TextWithImage from '../../components/molecules/textWithImage';
import { productsData, productsPageData } from './mock';
import ProductItem from '../../components/molecules/productItem';
import Button from '../../components/atoms/button';

const ProductsPage = () => {
  return (
    <ProductsPageWrapper>
      <Container>
        <TextWithImage data={productsPageData} withoutButton />
        <OurProducts>
          <Title>Our Products</Title>
          <ProductsWrapper>
            {productsData.map(item => (
              <PerProductWrapper key={item.id}>
                <ProductItem itemData={item} />
              </PerProductWrapper>
            ))}
          </ProductsWrapper>
          {productsData.length > 8 ? (
            <ButtonWrapper>
              <Button size={'xl'}>Meet the whole jobs</Button>
            </ButtonWrapper>
          ) : (
            ''
          )}
        </OurProducts>
      </Container>
    </ProductsPageWrapper>
  );
};
export default ProductsPage;
