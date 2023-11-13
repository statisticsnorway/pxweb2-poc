import styled from 'styled-components';

/* eslint-disable-next-line */
export interface Pxweb2UiProps {}

const StyledPxweb2Ui = styled.div`
  color: pink;
`;

export function Pxweb2Ui(props: Pxweb2UiProps) {
  return (
    <StyledPxweb2Ui>
      <h1>Welcome to Pxweb2Ui!</h1>
    </StyledPxweb2Ui>
  );
}

export default Pxweb2Ui;
