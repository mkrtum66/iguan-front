import React, { useEffect, useState } from 'react';
import Container from '../../components/atoms/container';
import CurrentJobPageStyled, {
  DashedRow,
  LeftSide,
  PositionCartWrapper,
  Requirements,
  SendCvButtonWrapper,
  SequenceCol,
  SequenceWrapper,
  TitleDescription,
  TopPart,
} from './currentJobPage.styled';
import PositionCart from '../../components/molecules/positionCart';
import { positions, sequence } from '../careerPage/mock';
import CheckMarkIcon from '../../assets/icon/CheckMarkIcon';

import dashedRow from '../../assets/photos/dashed-row-horizontal.svg';
import Sequence from '../../components/atoms/sequence';
import Button from '../../components/atoms/button';
import { useHistory } from 'react-router-dom';

const CurrentJobPage = ({ match }) => {
  const history = useHistory();
  const [currentJob, setCurrentJob] = useState({});

  useEffect(() => {
    setCurrentJob(positions.filter(item => item.id.toString() === match.params.id)[0]);
  }, [match.params.id]);

  if (Object.keys(currentJob).length === 0) {
    return <div>Loader</div>;
  }
  return (
    <div>
      <Container>
        <CurrentJobPageStyled>
          <LeftSide>
            <TopPart>
              <TitleDescription>
                <h1>{currentJob.position}</h1>
                {currentJob.jobDescription &&
                  currentJob.jobDescription.map(desc => <h4 key={desc.id}>{desc.text}</h4>)}
              </TitleDescription>
            </TopPart>
            <Requirements>
              {currentJob.experience && (
                <div>
                  <h2>Experience:</h2>
                  <ul>
                    {currentJob.experience.map(item => (
                      <li key={item.id}>
                        <CheckMarkIcon />
                        <h3>{item.text}</h3>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {currentJob.techSkills && (
                <div>
                  <h2>Tech skills:</h2>
                  <ul>
                    {currentJob.techSkills.map(item => (
                      <li key={item.id}>
                        <CheckMarkIcon />
                        <h3>{item.text}</h3>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {currentJob.softSkills && (
                <div>
                  <h2>Soft skills:</h2>
                  <ul>
                    {currentJob.softSkills.map(item => (
                      <li key={item.id}>
                        <CheckMarkIcon />
                        <h3>{item.text}</h3>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {currentJob.appreciated && (
                <div>
                  <h2>Appreciated:</h2>
                  <ul>
                    {currentJob.appreciated.map(item => (
                      <li key={item.id}>
                        <CheckMarkIcon />
                        <h3>{item.text}</h3>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Requirements>
          </LeftSide>
          <PositionCartWrapper>
            <PositionCart
              data={currentJob}
              onClick={() => history.push(`/sendCv/${currentJob.id}`)}
            />
          </PositionCartWrapper>
        </CurrentJobPageStyled>
        <SequenceWrapper>
          <DashedRow>
            <img src={dashedRow} alt="any" />
          </DashedRow>
          {sequence.map(item => (
            <SequenceCol key={item.id}>
              <Sequence data={item} />
            </SequenceCol>
          ))}
        </SequenceWrapper>
      </Container>
      <SendCvButtonWrapper>
        <Button onClick={() => history.push(`/sendCv/${currentJob.id}`)}>Send CV</Button>
      </SendCvButtonWrapper>
    </div>
  );
};

export default CurrentJobPage;
