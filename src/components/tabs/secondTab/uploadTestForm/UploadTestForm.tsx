import React, { useState } from 'react';
import { useForm, FieldValues } from "react-hook-form";

import { Box, Button, Typography } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

import Upload from 'api/api';

import styles from './uploadTestForm.module.scss';

interface IUploadForm {
    uploadData: (arg: number) => void;
}

const UploadForm: React.FC<IUploadForm> = ({ uploadData }) => {

    const [fileName, setFileName] = useState('');

    const { register, reset, handleSubmit } = useForm();

    const onChange = (e: any) => {
        setFileName(e.target.files[0].name);
    };

    const onSubmit = (data: FieldValues): void => {
        if (data.file.length) {
            // console.log(data.file[0].name);
            const formData = new FormData();
            formData.append("file", data.file[0], data.file[0].name);
            Upload.UploadTest(formData)
                .then((response) => {
                    // console.log(response);
                    uploadData(response.accuracy)
                    setFileName("");
                    reset();
                })
                .catch((error) => console.log(error))
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
                    {...register("file")}
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