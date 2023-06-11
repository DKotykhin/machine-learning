import React, { useState } from 'react';

import { Box, Typography, Button } from '@mui/material';

import Tabs from 'components/tabs/Tabs';
import UploadIrisForm from './uploadIrisForm/UploadIrisForm';

import { IUploadCSVResponse } from 'types/types';

import styles from './main.module.scss';

const Main: React.FC = () => {

    const [showTabs, setShowTabs] = useState(false);
    const [data, setData] = useState<IUploadCSVResponse>();

    const handleReturn = () => setShowTabs(false);
    const uploadData = (data: IUploadCSVResponse) => {
        if (data) setShowTabs(true);
        setData(data);
    }

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
                : <UploadIrisForm uploadData={uploadData} />
            }
            {showTabs && <Tabs data={data} />}
        </Box>
    )
}

export default Main;