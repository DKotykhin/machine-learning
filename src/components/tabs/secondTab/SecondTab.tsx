import React, { useState } from 'react';

import { Container, Button, Typography } from '@mui/material';

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
        <Container maxWidth='xs' className={styles.secondTab}>
            <Typography className={styles.secondTab__title}>
                Upload test set
            </Typography>
            <Typography className={styles.secondTab__subtitle}>
                Upload set of data(features values with classes) and CART algorithm will return accuracy of prediction
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
                        Return to upload test set
                    </Button>
                </>
                :
                <UploadTestForm uploadData={uploadData} />
            }
        </Container>
    )
}

export default SecondTab;