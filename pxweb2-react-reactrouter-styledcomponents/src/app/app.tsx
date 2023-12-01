import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { VariableSelector } from '@pxweb2-poc/pxweb2-ui';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <nav role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tabell">Tabell</Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1>Welcome pxweb2-react-reactrouter-styledcomponents!</h1>
        <VariableSelector
          title="Variable 1"
          required={true}
          values={[
            { label: 'Value 1', code: '1' },
            { label: 'Value 2', code: '2' },
          ]}
          code="1"
          onChange={(variableCode: string, valueCode: string[]) => {}}
        />
      </main>
    </StyledApp>
  );
}

export default App;
