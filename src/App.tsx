import React from 'react';

import { Box } from '@mui/material';

import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import Main from 'components/main/Main';

import styles from './app.module.scss';

const App: React.FC = () => {
  return (
    <Box className={styles.app}>
      <Header />
      <Box className={styles.main}>
        <Main />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
