import React, { useState } from 'react';
import photo1 from '../../assets/photos/ourProd1-2.svg';
import robot from '../../assets/photos/robot.png';
import TopSection, {
  BTitle,
  GrowCartDesktop,
  GrowCartModile,
  GrowCartsWrapperDesktop,
  GrowCartsWrapperMobile,
  GrowRow,
  GrowWithUs,
  ImageWrapper,
  JobsCol,
  JobsRow,
  OurPositions,
  PositionItem,
  PositionList,
  PositionListWrapper,
  RobotImage,
  Row,
  SearchWrapper,
  Text,
  TextWrapper,
  Title,
} from './careerPage.styled';
import Container from '../../components/atoms/container';
import { positions, positionsList } from './mock';
import PositionCart from '../../components/molecules/positionCart';
import { useHistory } from 'react-router-dom';
import Search from '../../components/atoms/search';
import Pagination from '../../components/atoms/pagination';

const CareerPage = () => {
  const history = useHistory();
  const [positionFilter, setPositionFilter] = useState('all');
  const [search, setSearch] = useState('');

  const handleChangePosition = value => {
    setPositionFilter(value);
  };

  return (
    <div>
      <TopSection>
        <Container>
          <Row>
            <TextWrapper>
              <Title>
                Want to make a prospective career? <br />
                <span> We got you covered!</span>
              </Title>
              <Text>
                Iguan Systems gives you an opportunity and the platform to realize your goals. Our
                specialists are packed with talent and skills to make sure your product has every
                chance to stand out in the market.
              </Text>
            </TextWrapper>
            <ImageWrapper>
              <img src={photo1} alt="any" />
            </ImageWrapper>
          </Row>
        </Container>
      </TopSection>
      <Container>
        <GrowWithUs>
          <BTitle>How can you grow with us?</BTitle>
          <GrowCartsWrapperDesktop>
            <GrowRow>
              <GrowCartDesktop>
                We give you a chance to expand your skills by not only providing you with the
                necessary resources and means, but also by letting you find your true calling and
                revealing the full extent of your telanet.
              </GrowCartDesktop>
              <GrowCartDesktop right>
                We believe that practice is the better teacher , hence we give you a large number of
                opportunities to turn your theoretical knowledge into practical skills faster and
                more efficiently.
              </GrowCartDesktop>
            </GrowRow>
            <GrowRow>
              <GrowCartDesktop>
                We don’t solely rely on your primary skills and abilities. With us you have a chance
                to learn new technologies and expand your techstack even further for your own
                benefit and your future career.
              </GrowCartDesktop>
              <RobotImage>
                <img src={robot} alt="any" />
              </RobotImage>
              <GrowCartDesktop right>
                Working on fast-paced ongoing projects is the key to self-improvement, that’s why we
                make sure you’re fully involved in real projects and are surrounded with specialists
                that are eager to help you overcome any obstacle that will occur along the way,
              </GrowCartDesktop>
            </GrowRow>
          </GrowCartsWrapperDesktop>
          <GrowCartsWrapperMobile>
            <GrowCartModile>
              We give you a chance to expand your skills by not only providing you with the
              necessary resources and means, but also by letting you find your true calling and
              revealing the full extent of your telanet.
              <img src={robot} alt="any" />
            </GrowCartModile>
            <GrowCartModile right>
              We believe that practice is the better teacher , hence we give you a large number of
              opportunities to turn your theoretical knowledge into practical skills faster and more
              efficiently.
              <img src={robot} alt="any" />
            </GrowCartModile>
            <GrowCartModile>
              We don’t solely rely on your primary skills and abilities. With us you have a chance
              to learn new technologies and expand your techstack even further for your own benefit
              and your future career.
              <img src={robot} alt="any" />
            </GrowCartModile>
            <GrowCartModile right>
              Working on fast-paced ongoing projects is the key to self-improvement, that’s why we
              make sure you’re fully involved in real projects and are surrounded with specialists
              that are eager to help you overcome any obstacle that will occur along the way.
              <img src={robot} alt="any" />
            </GrowCartModile>
          </GrowCartsWrapperMobile>
        </GrowWithUs>
        <OurPositions>
          <BTitle>Open positions</BTitle>
          <PositionListWrapper>
            <PositionList>
              {positionsList.map(item => (
                <PositionItem
                  key={item.id}
                  className={item.value === positionFilter && 'active'}
                  onClick={() => handleChangePosition(item.value)}
                >
                  {item.label}
                </PositionItem>
              ))}
            </PositionList>
          </PositionListWrapper>
          <SearchWrapper>
            <Search
              value={search}
              onChange={e => setSearch(e.target.value)}
              onClick={() => console.log('searched', search)}
            />
          </SearchWrapper>
          <JobsRow>
            {positions.map(job => {
              return (
                <JobsCol key={job.id}>
                  <PositionCart data={job} onClick={() => history.push(`/currentJob/${job.id}`)} />
                </JobsCol>
              );
            })}
          </JobsRow>
          <Pagination count={12} perPage={8} activePage={1} />
        </OurPositions>
      </Container>
    </div>
  );
};

export default CareerPage;
