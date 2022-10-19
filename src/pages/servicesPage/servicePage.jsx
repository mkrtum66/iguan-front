import React, { useState } from 'react';
import ServicePageWrapper, { StyledTabs } from './servicePage.styled';
import Tab from 'react-bootstrap/Tab';
import Container from '../../components/atoms/container';
import TextWithImage from '../../components/molecules/textWithImage';
import { useHistory } from 'react-router-dom';
import { servicesData } from './mock';

const ServicePage = () => {
  const history = useHistory();
  const [key, setKey] = useState(1);
  return (
    <ServicePageWrapper>
      <Container>
        <StyledTabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
          {servicesData.map(data => {
            return (
              <Tab eventKey={data.id} title={data.title} key={data.id}>
                <TextWithImage data={data} onClick={() => history.push('/products')} />
              </Tab>
            );
          })}
        </StyledTabs>
      </Container>
    </ServicePageWrapper>
  );
};

export default ServicePage;
