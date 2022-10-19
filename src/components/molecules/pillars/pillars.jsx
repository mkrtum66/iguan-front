import React, { useState } from 'react';
import Container from '../../atoms/container';
import Wrapper, {
  Card,
  CardDescription,
  CardDesktopButtonWrapper,
  CardMobileButtonWrapper,
  CardTitle,
  CardTitleWrapper,
  Iguana,
  Row,
  Title,
} from './pillars.styled';
import TeamIcon from '../../../assets/icon/TeamIcon';
import WorkersIcon from '../../../assets/icon/WorkersIcon';
import Button from '../../atoms/button';
import iguana from '../../../assets/photos/iguana.png';
import IconWithBackground from '../../atoms/iconWithBackground';

const Pillars = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  const handleShowMore = () => {
    setShowMore1(prevState => !prevState);
    setShowMore2(prevState => !prevState);
  };

  return (
    <Container>
      <Wrapper>
        <Title>The load of our success stands on 2 pillars</Title>
        <Row>
          <Card>
            <CardTitleWrapper>
              <IconWithBackground src={<TeamIcon />} />
              <CardTitle>Team force</CardTitle>
            </CardTitleWrapper>
            <CardDescription showMore={showMore1}>
              Behind many successful large-scale projects stands a strong team of individuals
              committed and united for a single goal that is success. We believe that the best way
              of achieving what you consider success is through good teamwork. At Iguan Systems we
              pay utmost attention to teamwork, mutual understanding and interpersonal
              relationships, because these are the pledges for a coherent work process that leads to
              a successful end result. Our experts are not only packed with a wide range of
              skill-sets that serves as a guarantee for an immaculate outcome of any project they
              take on, but are also filled with compassion and indulgence for your time, finances
              and of course nerves. We will help you get your idea out into the world through proper
              means and necessary support.
            </CardDescription>
            <CardMobileButtonWrapper>
              <Button outlined onClick={() => setShowMore1(!showMore1)}>
                See More
              </Button>
            </CardMobileButtonWrapper>
          </Card>
          <Card>
            <CardTitleWrapper>
              <IconWithBackground src={<WorkersIcon />} />
              <CardTitle>Individual force</CardTitle>
            </CardTitleWrapper>
            <CardDescription showMore={showMore2}>
              Our experience in the field has proven us the absolute possibility to achieve the
              desired result with just a single professional in charge. Choosing a single
              well-seasoned specialist to carry out a specific portion or the whole entirety of a
              project can sometimes be the better option for you as a client. Finding that perfect
              match, however, is not an easy task. Having a long line of skilled individual
              specialists, Iguan Systems is able to lead you to that one perfect candidate who will
              help you create a fully functioning project that will serve its purpose and stand out
              in the global market. Find your OTP among our numerous talents and pave your way to
              success within a short period of time.
            </CardDescription>
            <CardMobileButtonWrapper>
              <Button outlined onClick={() => setShowMore2(!showMore2)}>
                See More
              </Button>
            </CardMobileButtonWrapper>
          </Card>
        </Row>
        <CardDesktopButtonWrapper>
          <Button outlined onClick={handleShowMore}>
            See More
          </Button>
        </CardDesktopButtonWrapper>
        <Iguana>
          <img src={iguana} alt="any" />
        </Iguana>
      </Wrapper>
    </Container>
  );
};

export default Pillars;
