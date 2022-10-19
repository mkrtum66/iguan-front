import React from 'react';
import Container from '../../components/atoms/container';
import TextWithImage from '../../components/molecules/textWithImage';
import ProcessPageWrapper, {
  Col,
  HowDoesItWork,
  ProcessDarkSection,
  Row,
  Title,
} from './processPage.styled';
import { howDoesItWorkData, serviceTopSectionData } from './mock';
import ProcessCard from '../../components/molecules/processCard';

const ProcessPage = () => {
  return (
    <ProcessPageWrapper>
      <ProcessDarkSection>
        <Container>
          <TextWithImage
            data={serviceTopSectionData}
            onClick={() => console.log('hello')}
            withoutButton
          />
        </Container>
      </ProcessDarkSection>
      <HowDoesItWork>
        <Container>
          <Title>How does it work?</Title>
          <Row>
            {howDoesItWorkData.map(item => (
              <Col style={{ gridRow: `${item.id}` }} key={item.id}>
                <ProcessCard data={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </HowDoesItWork>
    </ProcessPageWrapper>
  );
};

export default ProcessPage;
