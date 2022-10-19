import React, { useState } from 'react';
import { NextButton, Page, PageNumbers, PaginationWrapper, PrevButton } from './pagination.styled';
import PaginationIcon from '../../../assets/icon/PaginationIcon';

const Pagination = ({ count = 1, perPage = 1, activePage }) => {
  const [active, setActive] = useState(activePage);

  const pageCount = Math.ceil(count / perPage);
  const pages = Array.from(Array(pageCount).keys());

  const increment = () => {
    if (active !== pages.length) {
      setActive(prevState => prevState + 1);
    }
  };

  const decrement = () => {
    if (active > 1) {
      setActive(prevState => prevState - 1);
    }
  };

  return (
    <PaginationWrapper>
      <PrevButton onClick={decrement}>
        <PaginationIcon />
      </PrevButton>
      <PageNumbers>
        {pages.map(page => (
          <Page key={page + 1} onClick={() => setActive(page + 1)} active={active === page + 1}>
            {page + 1}
          </Page>
        ))}
      </PageNumbers>
      <NextButton onClick={increment}>
        <PaginationIcon />
      </NextButton>
    </PaginationWrapper>
  );
};

export default Pagination;
