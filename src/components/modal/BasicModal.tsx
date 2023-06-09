import * as React from 'react';

import { Box, Typography, Modal } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BasicModal: React.FC<{ openModal: boolean, handleClose: () => void }> = ({ openModal, handleClose }) => {

    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Title of diagram
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    The diagram should be here
                </Typography>
            </Box>
        </Modal>
    );
}

export default BasicModal;