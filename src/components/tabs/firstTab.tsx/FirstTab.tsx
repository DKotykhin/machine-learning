import React, { useState } from 'react';
import { useForm, FieldValues } from "react-hook-form";

import { Box, Typography, Button, Container } from '@mui/material';

import InputField from 'components/inputField/InputField';
import Upload from 'api/api';
import { formData } from './formData';

import { IUploadCSVResponse } from 'types/types';

import styles from './firstTab.module.scss';

const FirstTab: React.FC<{ data: IUploadCSVResponse | undefined }> = ({ data }) => {

    const [result, setResult] = useState("");
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data: FieldValues) => {
        const newData = formData(data);
        // console.log(newData);
        reset();
        Upload.UploadForm(newData)
            .then((response) => {
                // console.log(response);
                setResult(response.result)
            })
            .catch((error) => console.log(error))
    };

    return (
        <Container maxWidth='xs' className={styles.firstTab}>
            <Typography className={styles.firstTab__title}>
                {"Fill the form"}
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                {data?.features.map((input, i) => (
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
                {result ? `Result: ${result}` : ""}
            </Typography>
        </Container>
    )
}

export default FirstTab;