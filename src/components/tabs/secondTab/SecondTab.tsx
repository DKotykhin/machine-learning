import React, { useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

import styles from './secondTab.module.scss';
import UploadForm from 'components/uploadForm/uploadForm';

const SecondTab: React.FC = () => {

    const [showResult, setShowResult] = useState(false);

    const uploadStatus = (data: boolean) => setShowResult(data);
    const handleReturn = () => setShowResult(false);

    return (
        <Box className={styles.secondTab}>
            <Typography className={styles.secondTab__title}>
                Upload test set
            </Typography>
            {showResult
                ?
                <>
                    <Typography className={styles.secondTab__result}>
                        {"Accuracy: 99%"}
                    </Typography>
                    <Button
                        className={styles.secondTab__button}
                        onClick={handleReturn}
                    >
                        Return to upload .csv
                    </Button>
                </>
                :
                <UploadForm uploadStatus={uploadStatus} name={'test'} />
            }
        </Box>
    )
}

export default SecondTab;