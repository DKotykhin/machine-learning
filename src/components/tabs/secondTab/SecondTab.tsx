import React, { useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

import UploadTestForm from './uploadTestForm/UploadTestForm';

import styles from './secondTab.module.scss';

const SecondTab: React.FC = () => {

    const [showResult, setShowResult] = useState(false);
    const [accuracy, setAccuracy] = useState<number>();

    const handleReturn = () => setShowResult(false);
    const uploadData = (data: number) => {
        if (data) setShowResult(true);
        setAccuracy(data);
    }

    return (
        <Box className={styles.secondTab}>
            <Typography className={styles.secondTab__title}>
                Upload test set
            </Typography>
            {showResult
                ?
                <>
                    {accuracy &&
                        <Typography className={styles.secondTab__result}>
                            {"Accuracy: "}{Math.floor(accuracy * 100)}{"%"}
                        </Typography>
                    }
                    <Button
                        className={styles.secondTab__button}
                        onClick={handleReturn}
                    >
                        Return to upload .csv
                    </Button>
                </>
                :
                <UploadTestForm uploadData={uploadData} />
            }
        </Box>
    )
}

export default SecondTab;