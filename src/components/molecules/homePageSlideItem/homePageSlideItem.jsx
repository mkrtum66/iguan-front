import React from 'react';
import ItemWrapper, {
  ItemBody,
  ItemHeader,
  UserComment,
  UserImage,
  UserName,
} from './homePageSlideItem.styled';

const HomePageSlideItem = ({ data }) => {
  return (
    <ItemWrapper>
      <ItemHeader>
        <UserImage>
          <img src={data.userImage} alt="any" />
        </UserImage>
        <UserName>{data.userName}</UserName>
      </ItemHeader>
      <ItemBody>
        <UserComment>{data.userComment}</UserComment>
      </ItemBody>
    </ItemWrapper>
  );
};

export default HomePageSlideItem;
