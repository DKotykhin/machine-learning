import React from 'react';

import { Box, Typography } from '@mui/material';

import styles from './footer.module.scss';

const Footer: React.FC = () => {
    return (
        <Box className={styles.footer}>
            <Typography className={styles.footer__text}>
                Copyright &copy; 2023 Stanislav Kotykhin
            </Typography>
        </Box>
    )
}

export default Footer;