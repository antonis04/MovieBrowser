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
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min.js";
import { pageQueryParamName } from "../../common/QueryParamName.js";

const PaginationButton = ({ onClick, disabled, children, direction }) => (
  <Button disabled={disabled} onClick={onClick}>
    {direction === "left" && (
      <>
        <PrimaryArrow $disabled={disabled} direction={direction} />
        {children === "First" ? (
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
        {children === "Last" ? (
          <SecondaryArrow $disabled={disabled} direction={direction} />
        ) : (
          ""
        )}
      </>
    )}
  </Button>
);

export const Pagination = ({ page, totalPages }) => {
  const location = useLocation();
  const history = useHistory();

  const isMobile = window.innerWidth <= theme.breakpoint.mobileMax;

  const handleSetCurrentPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      const params = new URLSearchParams(location.search);
      params.set(pageQueryParamName, page);

      history.push(`${location.pathname}?${params.toString()}`);
    }
  };

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