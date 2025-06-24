import React from 'react';
import { PaginationContainer, PaginationButton, PageInfo } from './styled';

const Pagination = ({ currentPage = 1, totalPages = 500, onPageChange }) => {
  const handlePageChange = (page) => {
    if (onPageChange && page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <PaginationContainer>
      <PaginationButton 
        disabled={currentPage === 1}
        onClick={() => handlePageChange(1)}
      >
        « First
      </PaginationButton>
      <PaginationButton 
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        ‹ Previous
      </PaginationButton>
      <PageInfo>
        Page {currentPage} of {totalPages}
      </PageInfo>
      <PaginationButton 
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next ›
      </PaginationButton>
      <PaginationButton 
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(totalPages)}
      >
        Last »
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
