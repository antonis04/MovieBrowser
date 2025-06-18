import React from 'react';
import { PaginationContainer, PaginationButton, PageInfo } from './styled';

const Pagination = ({ currentPage = 1, totalPages = 500 }) => {
  return (
    <PaginationContainer>
      <PaginationButton disabled={currentPage === 1}>
        « First
      </PaginationButton>
      <PaginationButton disabled={currentPage === 1}>
        ‹ Previous
      </PaginationButton>
      <PageInfo>
        Page {currentPage} of {totalPages}
      </PageInfo>
      <PaginationButton disabled={currentPage === totalPages}>
        Next ›
      </PaginationButton>
      <PaginationButton disabled={currentPage === totalPages}>
        Last »
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
