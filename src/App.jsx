import React from 'react';
import { Grommet } from 'grommet';
import Layout from '@clarityhub/unity-web/lib/scaffolding/Layout';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';
import NewEntry from './modules/NewEntry';
import Header from './layout/Header';

function App() {
  return (
    <Grommet plain>
      <Header />
      <Layout>
        <Box padding="medium">
          <NewEntry />
        </Box>
      </Layout>
    </Grommet>
  );
}

export default App;
