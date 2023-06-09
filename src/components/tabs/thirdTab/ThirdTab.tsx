import React from 'react';

import { Container } from '@mui/material';

import styles from './thirdTab.module.scss';

const ThirdTab: React.FC = () => {
    return (
        <Container maxWidth='sm' className={styles.thirdTab}>
            The diagram should be here
        </Container>
    )
}

export default ThirdTab;