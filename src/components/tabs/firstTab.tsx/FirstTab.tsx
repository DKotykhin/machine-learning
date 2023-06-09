import React from 'react';
import { useForm } from "react-hook-form";

import { Box, Typography, Button, Container } from '@mui/material';

import InputField from 'components/inputField/InputField';
import { api } from 'api/api';

import styles from './firstTab.module.scss';

const FirstTab: React.FC = () => {

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    };

    return (
        <Container maxWidth='sm' className={styles.firstTab}>
            <Typography className={styles.firstTab__title}>
                {"Fill the form"}
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                {api?.map((input, i) => (
                    <Box key={i}>
                        <InputField
                            label={input}
                            error={errors[input]}
                            control={control}
                            defaultValue=""
                        />
                    </Box>
                ))}
                <Button
                    className={styles.firstTab__submit_button}
                    type="submit"
                >
                    {"Classify"}
                </Button>
            </Box>
            <Typography className={styles.firstTab__result}>
                {"Result: Selosa"}
            </Typography>
        </Container>
    )
}

export default FirstTab;