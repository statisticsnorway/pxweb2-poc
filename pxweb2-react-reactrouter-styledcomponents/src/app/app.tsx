import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { VariableSelector } from '@pxweb2-poc/pxweb2-ui';
import LanguageChooser from '../components/LanguageChooser';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const { t } = useTranslation();

  return (
    <StyledApp>
      <nav role="navigation">
        <ul>
          <li>
            <Link to="/">{t('home')}</Link>
          </li>
          <li>
            <Link to="/tabell">{t('tabel')}</Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1>{t('apptitle')}</h1>
        <p>{t('test')}</p>
        <p>{t('test', { ns: 'statistics' })}</p>

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

      <footer>
        <LanguageChooser />
      </footer>
    </StyledApp>
  );
}

export default App;
