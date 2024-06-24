import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { GoVideo } from "react-icons/go";
import NotInterestedIcon from '@mui/icons-material/NotInterested';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 530,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height:'60%'
};

export default function BasicModal({product}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);    
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{justifyContent:'flex-end'}}>  {product.productVideo!=null ? <GoVideo /> : <NotInterestedIcon
      style={{fontSize:'0.99rem'}}/>}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}  >
        <iframe className='sm:justify-normal mx-[38px] sm:mx-0 mt-[-9px]  w-[24rem] sm:w-[30vw] absolute h-[50vh] ' 
        src={product.productVideo}
          allowFullScreen
         ></iframe>
        </Box>
      </Modal>
    </div>
  );
}