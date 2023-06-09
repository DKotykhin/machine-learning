import React, { useState } from 'react';

import { Button, Box, Typography } from '@mui/material';

import Tabs from 'components/tabs/Tabs';

import styles from './main.module.scss';
import BasicModal from 'components/modal/BasicModal';

const Main: React.FC = () => {

    const [openModal, setOpenModal] = useState(false);

    const handleSwow = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const handleUpload = () => console.log('Upload .csv');

    return (
        <Box className={styles.main}>
            <Typography className={styles.main__title}>
                Page Title
            </Typography>
            <Box className={styles.main__box}>
                <Button
                    variant='outlined'
                    onClick={handleUpload}
                    className={styles.main__button}
                >
                    Upload .csv
                </Button>
                <Button
                    variant='outlined'
                    onClick={handleSwow}
                    className={styles.main__button}
                >
                    Show diagram
                </Button>
            </Box>
            <Tabs />
            <BasicModal openModal={openModal} handleClose={handleClose}/>
        </Box>
    )
}

export default Main;