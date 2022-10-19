import styled from 'styled-components';

const ItemWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 26px 22px;
  min-height: 260px;
  height: 100%;
  overflow: hidden;
`;

export const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
`;

export const ItemBody = styled.div``;

export const UserImage = styled.div`
  min-width: 62px;
  min-height: 62px;
  border-radius: 100px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const UserName = styled.h4``;

export const UserComment = styled.h5`
  text-align: justify;
  color: #303030;
`;

export default ItemWrapper;
