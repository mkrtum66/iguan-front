import React, { useState } from 'react';
import Container from '../../atoms/container';
import Title, { Description, Image, ImageWrapper, Row, TextColumn } from './TextWithImage.styled';
import Button from '../../atoms/button';

const TextWithImage = ({
  reversed = false,
  ifSeeMore = false,
  onClick,
  data,
  withoutButton = false,
}) => {
  let buttonValue = '';
  const [more, setMore] = useState(false);

  if (ifSeeMore) {
    if (more) {
      buttonValue = 'See Less';
    } else {
      buttonValue = 'See More';
    }
  } else {
    buttonValue = data.buttonText;
  }

  const toggleMore = () => setMore(prevState => !prevState);

  return (
    <Container>
      {data ? (
        <Row reversed={reversed}>
          <TextColumn ifSeeMore={ifSeeMore}>
            <Title>{data.title}</Title>
            <Description ifSeeMore={ifSeeMore} more={more}>
              {data.description}
            </Description>
            {!withoutButton ? (
              <Button onClick={ifSeeMore ? toggleMore : onClick} outlined={!!data.buttonOutlined}>
                {buttonValue}
              </Button>
            ) : (
              ''
            )}
          </TextColumn>
          <ImageWrapper ifSeeMore={ifSeeMore}>
            <Image src={data.imgUrl} alt="any" />
          </ImageWrapper>
        </Row>
      ) : (
        <h2>No Data</h2>
      )}
    </Container>
  );
};

export default TextWithImage;
