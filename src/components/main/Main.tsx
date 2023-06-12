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
                Classify your data with CART!
            </Typography>
            {showTabs && <Tabs data={data} />}
            {showTabs
                ?
                <Button
                    className={styles.main__button}
                    onClick={handleReturn}
                    color='error'
                    variant='outlined'
                >
                    Return
                </Button>
                :
                <>
                    <Typography className={styles.main__subtitle}>
                        Upload set of data in csv format and train CART algorithm
                    </Typography>
                    <UploadIrisForm uploadData={uploadData} />
                </>
            }
        </Box>
    )
}

export default Main;