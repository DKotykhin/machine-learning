import React from 'react';

import { Box, Typography } from '@mui/material';
import logo from './logo-32.png';

import styles from './header.module.scss';

const Header: React.FC = () => {
    return (
        <Box className={styles.header}>
            <img src={logo} alt='Classification and Regression Tree' />
            <Typography className={styles.header__text}>
                Classification and Regression Tree
            </Typography>
        </Box>
    )
}

export default Header;