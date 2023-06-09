import React, { useState } from 'react';
import { useForm, FieldValues } from "react-hook-form";

import { Box, Button, Typography } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

import styles from './uploadForm.module.scss';

interface IUploadForm {
    uploadStatus: (arg: boolean) => void;
    name: string;
}

const UploadForm: React.FC<IUploadForm> = ({ uploadStatus, name }) => {

    const [fileName, setFileName] = useState('');

    const { register, reset, handleSubmit } = useForm();

    const onChange = (e: any) => {
        setFileName(e.target.files[0].name);
    };

    const onSubmit = (data: FieldValues): void => {
        if (data[name].length) {
            console.log(data[name][0].name)
            const formData = new FormData();
            formData.append(name, data[name][0], data[name][0].name);
            setFileName("");
            reset();
            uploadStatus(true);
        }
    };

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            className={styles.uploadForm}
        >
            <Box component="label" onChange={onChange} className={styles.uploadForm__label}>
                <FileUploadIcon color='primary' />
                <Typography color='primary'>
                    {fileName ? fileName : 'Choose file...'}
                </Typography>
                <Box
                    {...register(name)}
                    component="input"
                    type="file"
                    hidden
                />
            </Box>
            <Button
                variant='outlined'
                type="submit"
                className={styles.uploadForm__submit}
                disabled={!fileName}
            >
                Upload .csv
            </Button>
        </Box>
    )
}

export default UploadForm;