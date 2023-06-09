import React from 'react';

import { Box, Typography, Button } from '@mui/material';

import styles from './secondTab.module.scss';

const SecondTab: React.FC = () => {

    const handleClick = () => console.log('upload');

    return (
        <Box className={styles.secondTab}>
            <Typography className={styles.secondTab__title}>
                Upload test set
            </Typography>
            <Button
                variant='outlined'
                className={styles.secondTab__button}
                onClick={handleClick}
            >
                Upload
            </Button>
            <Typography className={styles.secondTab__result}>
                {"Accuracy: 99%"}
            </Typography>
        </Box>
    )
}

export default SecondTab;