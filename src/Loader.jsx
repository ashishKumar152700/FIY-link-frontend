import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';

const style = {
    display:'flex',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 70,
  
 
};

export default function BasicModal({name}) {
  const [open, setOpen] = React.useState(false);



  const handleOpen = () => {
    setOpen(true);
    simulateResponse();
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  const simulateResponse = () => {
    setTimeout(() => {
      handleClose(); // Close the modal after receiving a response
    }, 500); // Adjust the time as needed
  };

 

  return (
    <div>
      <Button style={{color:'white',fontWeight:'bolder'}} onClick={handleOpen}>{name} </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         
        <CircularProgress style={{color:'white'}} />
         
        </Box>
      </Modal>
    </div>
  );
}