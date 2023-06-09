import React, { useState } from 'react';

import { Box, Typography, Button } from '@mui/material';

import Tabs from 'components/tabs/Tabs';
import BasicModal from 'components/modal/BasicModal';
import UploadForm from 'components/uploadForm/uploadForm';

import styles from './main.module.scss';

const Main: React.FC = () => {

    const [openModal, setOpenModal] = useState(false);
    const [showTabs, setShowTabs] = useState(false);

    // const handleSwow = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const uploadStatus = (data: boolean) => setShowTabs(data);
    const handleReturn = () => setShowTabs(false);

    return (
        <Box className={styles.main}>
            <Typography className={styles.main__title}>
                Classification and Regression Tree
            </Typography>
            {showTabs
                ? <Button
                    className={styles.main__button}
                    onClick={handleReturn}
                >
                    Return to upload .csv
                </Button>
                : <UploadForm uploadStatus={uploadStatus} name={'iris'} />
            }
            {/* <Button
                variant='outlined'
                onClick={handleSwow}
                className={styles.main__button}
            >
                Show diagram
            </Button> */}
            {showTabs && <Tabs />}
            <BasicModal openModal={openModal} handleClose={handleClose} />
        </Box>
    )
}

export default Main;