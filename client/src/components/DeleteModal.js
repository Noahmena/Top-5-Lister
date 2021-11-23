import { useContext } from 'react';
import AuthContext from '../auth'
import { GlobalStoreContext } from '../store'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


export default function DeleteModal() {
    const { auth } = useContext(AuthContext);
    const { store } = useContext(GlobalStoreContext);
    let isOpen = false;
    let name = "";

    if (store.openDelete){
        isOpen = true;
    }
    const handleClose = (event) => {
        event.stopPropagation();
        isOpen = false;
        store.unmarkListForDeletion();
    };

    const handleDelete = (event) => {
        store.deleteMarkedList();
    };

    if (store.listMarkedForDeletion) {
        name = store.listMarkedForDeletion.name;
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        width: '60%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid #000',
        bgcolor: '#e1e4cb'
    };
    

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <Box sx={{ ...style, width: 400 }}>            
                Delete {name} Top 5 list?
                <Button onClick={handleDelete}>Delete</Button>
                <Button onClick={handleClose}>Close</Button>
                
            </Box>
        </Modal>
    )
    }