import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 40px 0;
  padding: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const PaginationButton = styled.button`
  background-color: ${({ disabled, theme }) => disabled ? theme.color.grey : theme.color.lightblue};
  color: ${({ disabled, theme }) => disabled ? theme.color.darkergrey : theme.color.blue};
  border: none;
  border-radius: 5px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 400;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  min-width: 80px;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 8px 12px;
    font-size: 12px;
    min-width: 60px;
  }
`;

export const PageInfo = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.color.black};
  margin: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    margin: 0 8px;
  }
`;
