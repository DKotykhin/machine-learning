import React from 'react';

import { Container } from '@mui/material';
import { BASE_URL } from 'api/api';

import { IUploadCSVResponse } from 'types/types';

import styles from './thirdTab.module.scss';

const ThirdTab: React.FC<{ data: IUploadCSVResponse | undefined }> = ({ data }) => {

    const imgUrl = data ? `${BASE_URL}/static/${data.photoId}.png` : '';

    return (
        <Container maxWidth='sm' className={styles.thirdTab}>
            <img src={imgUrl} alt='test diagram' />
        </Container>
    )
}

export default ThirdTab;