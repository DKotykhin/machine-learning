import React, { useState } from 'react';
import { useForm, FieldValues } from "react-hook-form";

import { Box, Button, Typography } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

import Spinner from 'components/spinner/Spinner';
import Upload from 'api/api';
import { IUploadCSVResponse } from 'types/types';

import styles from './uploadIrisForm.module.scss';

interface IUploadIrisForm {
    uploadData: (arg: IUploadCSVResponse) => void;
}

const UploadIrisForm: React.FC<IUploadIrisForm> = ({ uploadData }) => {
    
    const [fileName, setFileName] = useState('');
    const [fileError, setFileError] = useState(false);
    const [loading, setLoading] = useState(false);

    const { register, reset, handleSubmit } = useForm();

    const onChange = (e: any) => {
        setFileName(e.target.files[0].name);
        setFileError(e.target.files[0].type !== 'text/csv');
    };

    const onSubmit = (data: FieldValues): void => {
        if (data.file.length) {
            // console.log(data.file[0].name);
            setLoading(true);
            const formData = new FormData();
            formData.append("file", data.file[0], data.file[0].name);
            Upload.UploadCSV(formData)
                .then((response) => {
                    // console.log(response);
                    setLoading(false);
                    uploadData(response);
                    setFileName("");
                    reset();
                })
                .catch((error) => console.log(error))
        }
    };

    return !loading ? (
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
            {fileError &&
                <Typography color='error' sx={{ mt: 1 }}>
                    Incorrect file type!
                </Typography>
            }
            <Button
                variant='outlined'
                type="submit"
                className={styles.uploadForm__submit}
                disabled={!fileName || fileError}
            >
                Upload .csv
            </Button>
        </Box>
    ) : <Spinner />
}

export default UploadIrisForm;