import React from 'react';
import { useHistory } from 'react-router-dom';
import FooterLogo from '../../../assets/photos/FooterLogo';
import PhoneIcon from '../../../assets/icon/PhoneIcon';
import EmailIcon from '../../../assets/icon/EmailIcon';
import FacebookIcon from '../../../assets/icon/FacebookIcon';
import LinkedinIcon from '../../../assets/icon/LinkedinIcon';
import Container from '../../atoms/container';
import FooterWrapper, {
  Col,
  ContactRow,
  CopyRight,
  FooterContent,
  FooterLink,
  FooterLinks,
  FooterLogoWrapper,
  LetsTalk,
  Link,
  Row,
  Text,
} from './footer.styled';
import Button from '../../atoms/button';
const Footer = () => {
  const history = useHistory();
  const date = new Date();

  return (
    <FooterWrapper className="footer">
      <Container>
        <FooterContent>
          <FooterLogoWrapper>
            <FooterLogo />
          </FooterLogoWrapper>
          <Row>
            <Text>
              <h6>
                Sometimes things that you wouldn’t think would be a good combination end up being
                the perfect combination, like YOU and US. Here at Iguan Systems, we turn the
                impossible into absolutely possible.
              </h6>
            </Text>
            <FooterLinks>
              <Col>
                <Link to={'/services'}>Services</Link>
                <Link to={'/process'}>Our Process</Link>
              </Col>
              <Col>
                <Link to={'/products'}>Our Products</Link>
                <Link to={'/aboutUs'}>About Us</Link>
              </Col>
              <Col>
                <Link to={'/career'}>Career</Link>
                <Link to={'/contactUs'}>Contact us</Link>
              </Col>
            </FooterLinks>
            <LetsTalk>
              <h4>Want to talk about your project?</h4>
              <Button outlined onClick={() => history.push('/contactUs')}>
                Let’s Talk
              </Button>
            </LetsTalk>
          </Row>
          <ContactRow>
            <FooterLink href={'tel:+37410310313'}>
              <PhoneIcon />
              <h5>+374 (10) 310313</h5>
            </FooterLink>
            <FooterLink href={'mailto:hr.iguan@gmail.com'}>
              <EmailIcon />
              <h5>hr.iguan@gmail.com</h5>
            </FooterLink>
            <FooterLink href={'https://www.linkedin.com/company/iguan-systems'}>
              <LinkedinIcon />
              <h5>Linkedin </h5>
            </FooterLink>
            <FooterLink href={'https://www.facebook.com/iguansystems'}>
              <FacebookIcon />
              <h5>Facebook</h5>
            </FooterLink>
          </ContactRow>
        </FooterContent>
      </Container>
      <CopyRight>
        <h5>Copyright © {date.getFullYear()} Iguan Systems | All Rights Reserved</h5>
      </CopyRight>
    </FooterWrapper>
  );
};

export default Footer;
