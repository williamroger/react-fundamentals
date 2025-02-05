import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.footerBackgroundColor };
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `0 ${theme.spacing.large}px` };
  border-radius: ${({ theme }) => theme.borderRadius };
  margin-top: ${({ theme }) => `${theme.spacing.large}px` };
  
  button {
    font-size: 16px;
    background: transparent;
    border: 0;
    cursor: pointer;
  }
`;