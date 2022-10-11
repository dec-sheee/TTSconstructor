import './exampleModal.css'
import {useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import guide from '../img/guide.mp4'



const ExampleModal = () =>{

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'maxContent',
        height: 'maxContent',
        bgcolor: "black",
        // border: '2px solid #000',
        // boxShadow: 24,
        // p: 4,
      };
      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

    return(
        <>
        <div className="example-modal-container">
            <div className='example-modal-content'
                onClick={handleOpen}>
                    <h3 className='example-modal-guide'>
                        микро
                        <br/>
                        гайд
                    </h3>
            </div>
        </div>
         <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">

         <Box sx={style}>
           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
             <video  
                    src={guide}
                    autoplay='autoplay'
             ></video>
           </Typography>
         </Box>
       </Modal>
       </>
    )
}

export default ExampleModal;