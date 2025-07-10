import {
  Wrapper,
  ButtonWrapper,
  Button,
  PrimaryArrow,
  SecondaryArrow,
  ButtonText,
  TextWrapper,
  PageLabel,
  PageNumber,
} from "./styled.js";
import { theme } from "../../theme.js";
import { useNavigate, useLocation } from "react-router-dom";
import { pageQueryParamName } from "../../common/QueryParamName.js";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import { useEffect, useMemo, useCallback } from "react";

const PaginationButton = ({
  onClick,
  disabled,
  children,
  direction,
  isMobile,
}) => (
  <Button disabled={disabled} onClick={onClick}>
    {direction === "left" && (
      <>
        <PrimaryArrow $disabled={disabled} direction={direction} />
        {children === "First" && !isMobile ? (
          <SecondaryArrow $disabled={disabled} direction={direction} />
        ) : (
          ""
        )}
      </>
    )}
    <ButtonText $disabled={disabled}>{children}</ButtonText>
    {direction === "right" && (
      <>
        <PrimaryArrow $disabled={disabled} direction={direction} />
        {children === "Last" && !isMobile ? (
          <SecondaryArrow $disabled={disabled} direction={direction} />
        ) : (
          ""
        )}
      </>
    )}
  </Button>
);

export const Pagination = ({ totalPages }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(
    `(max-width: ${theme.breakpoint.mobileMax}px)`
  );

  const query = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const currentPageFromUrl = parseInt(query.get(pageQueryParamName)) || 1;
  const page = currentPageFromUrl;

  const handleSetCurrentPage = useCallback(
    (newPage) => {
      const maxPages = totalPages > 500 ? 500 : totalPages;
      if (newPage >= 1 && newPage <= maxPages) {
        const params = new URLSearchParams(location.search);
        params.set(pageQueryParamName, newPage);
        navigate(`?${params.toString()}`, { replace: true });
      }
    },
    [location.search, navigate, totalPages]
  );

  useEffect(() => {
    if (!query.get(pageQueryParamName)) {
      handleSetCurrentPage(1);
    }
  }, [location.search, handleSetCurrentPage, query]);

  return (
    <Wrapper>
      <ButtonWrapper>
        <PaginationButton
          disabled={page === 1}
          onClick={() => handleSetCurrentPage(1)}
          direction="left"
          isMobile={isMobile}
        >
          First
        </PaginationButton>
        <PaginationButton
          disabled={page === 1}
          onClick={() => handleSetCurrentPage(page - 1)}
          direction="left"
          isMobile={isMobile}
        >
          Previous
        </PaginationButton>
      </ButtonWrapper>
      <TextWrapper>
        <PageLabel>Page</PageLabel>
        <PageNumber>{page}</PageNumber>
        <PageLabel>of</PageLabel>
        <PageNumber>{totalPages}</PageNumber>
      </TextWrapper>
      <ButtonWrapper>
        <PaginationButton
          disabled={page === totalPages}
          onClick={() => handleSetCurrentPage(page + 1)}
          direction="right"
          isMobile={isMobile}
        >
          Next
        </PaginationButton>
        <PaginationButton
          disabled={page === totalPages}
          onClick={() => handleSetCurrentPage(totalPages)}
          direction="right"
          isMobile={isMobile}
        >
          Last
        </PaginationButton>
      </ButtonWrapper>
    </Wrapper>
  );
};
