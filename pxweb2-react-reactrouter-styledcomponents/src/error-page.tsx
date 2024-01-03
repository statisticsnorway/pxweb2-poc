import styled from 'styled-components';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const StyledErrorPage = styled.div`
  color: pink;
`;

function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <StyledErrorPage>
        <div id="error-page">
          <h1>Oops! {error.status}</h1>
          <p>{error.statusText}</p>
          {error.data?.message && <p>{error.data.message}</p>}
        </div>
      </StyledErrorPage>
    );
  }

  if (error instanceof Error) {
    return (
      <StyledErrorPage>
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an error has occured.</p>
          <p>
            <i>{error.message}</i>
          </p>
        </div>
      </StyledErrorPage>
    );
  }

  return (
    <StyledErrorPage>
      <div id="error-page">
        <h1>Oops! </h1>
        <p>Sorry, an unexpected error has occured.</p>
      </div>
    </StyledErrorPage>
  );
}

export default ErrorPage;
