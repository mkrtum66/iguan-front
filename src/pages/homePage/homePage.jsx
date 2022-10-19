import React from 'react';
import TextWithImage from '../../components/molecules/textWithImage';
import Section, { PillarsWrapper } from './homePageStyled';
import Pillars from '../../components/molecules/pillars';
import { section1Data, section2Data, section3Data } from './mock';
import { useHistory } from 'react-router-dom';
import WhyChooseUs from '../../components/organisms/whyChooseUs';
import HomePageSlider from '../../components/organisms/homePageSlider';

const HomePage = () => {
  const history = useHistory();

  return (
    <div>
      <Section>
        <TextWithImage data={section1Data} onClick={() => history.push('/services')} />
      </Section>
      <PillarsWrapper>
        <Pillars />
      </PillarsWrapper>
      <Section padding={'110px 0'}>
        <TextWithImage data={section2Data} reversed ifSeeMore />
      </Section>
      <Section padding={'110px 0'}>
        <TextWithImage data={section3Data} ifSeeMore />
      </Section>
      <WhyChooseUs />
      <HomePageSlider />
    </div>
  );
};

export default HomePage;
