import { useContext } from 'react';
import AuthContext from '../auth'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';


export default function ErrorModal() {
    const { auth } = useContext(AuthContext);
    let isOpen = false;

    if (auth.error != null){
        isOpen = true;
    }
    const handleClose = (event) => {
        isOpen = false;
        auth.setAuthError();
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        width: '60%',
        transform: 'translate(-50%, -50%)',
    };
    

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <Box sx={{ ...style, width: 400 }}>
                <Alert severity="error">
                    {auth.error}      
                <Button onClick={handleClose}>Close</Button>
                </Alert>
            </Box>
        </Modal>
    )
    }