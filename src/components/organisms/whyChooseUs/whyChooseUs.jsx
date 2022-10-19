import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from '../../atoms/container';
import Title, {
  AccordionWrapper,
  CartWrapper,
  Image,
  ItemHeader,
  Row,
  StyledAccordion,
  StyledItem,
} from './whyChooseUs.styled';
import WhyUsCart from '../../molecules/whyUsCart';
import { whyChooseUsData } from '../../../pages/homePage/mock';
import photo5 from '../../../assets/photos/sec5.png';
import IconWithBackground from '../../atoms/iconWithBackground';

const WhyChooseUs = () => {
  return (
    <Container>
      <Title>Why choose us?</Title>
      <Row align={'center'}>
        <CartWrapper>
          {whyChooseUsData.map(item => (
            <WhyUsCart key={item.id} cartData={item} />
          ))}
        </CartWrapper>
        <AccordionWrapper>
          <StyledAccordion>
            {whyChooseUsData.map(item => {
              return (
                <StyledItem eventKey={item.id} key={item.id}>
                  <ItemHeader>
                    <IconWithBackground src={item.icon} />
                    <h4>{item.title}</h4>
                  </ItemHeader>
                  <Accordion.Body>
                    <h5>{item.body}</h5>
                  </Accordion.Body>
                </StyledItem>
              );
            })}
          </StyledAccordion>
        </AccordionWrapper>
        <Image>
          <img src={photo5} alt="any" />
        </Image>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
