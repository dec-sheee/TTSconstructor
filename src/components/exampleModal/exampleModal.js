import './exampleModal.css'
import {useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import guide from '../img/guide.mp4'



const ExampleModal = () =>{

  // const theme = createTheme({
  //   palette: {
  //     background: {
  //       paper: '#fff',
  //     },
  //     text: {
  //       primary: '#173A5E',
  //       secondary: '#46505A',
  //     },
  //     action: {
  //       active: '#001E3C',
  //     },
  //     success: {
  //       dark: '#009688',
  //     },
  //   },
  // });


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'maxContent',
        height: 'maxContent',

        // bgcolor: "primary.main",
        bgcolor: 'black',
        // border: '1px solid green',
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
          {/* <ThemeProvider theme={theme}> */}
         <Box sx={style}>
           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-modal-container'>
              <div className='example-modal-modal-instruction'>
                <div className='example-modal-modal-instruction-title'>
                  <div className='example-modal-modal-instruction-text'> КАК МЕНЯТЬ <span style={{"color":"#D36DA9"}}>ГОЛОСА</span></div>
                </div>
                <div className='example-modal-modal-instruction-discripction'>
                    Для выбора нужного голоса достаточно написать его
                    или любую его альтернативу и поставить двоеточие.
                    Текст после двоеточия будут читаться указанным голосов.
                    <div className='example-modal-modal-instruction-discripction-example-title'>Например</div>
                    <div className='example-modal-modal-instruction-discripction-example-description'>
                      <span style={{"color":"#D36DA9"}}>robot: </span>
                      что пожелаете, хозяин? 
                      <span style={{"color":"#D36DA9"}}> zoomer: </span>
                      один поридж.
                  </div>
                </div>
                  <br/>
                <div className='example-modal-modal-instruction-title'>
                  <div className='example-modal-modal-instruction-text'> КАК МЕНЯТЬ <span style={{"color":"#ad79fa"}}>ЗВУКИ</span></div>
                </div>
                <div className='example-modal-modal-instruction-discripction'>
                    Для включения нужного звука достаточно написать его название после
                    знака решетки.
                    <div className='example-modal-modal-instruction-discripction-example-title'>Например</div>
                    <div className='example-modal-modal-instruction-discripction-example-description'>
                      <span style={{"color":"#ad79fa"}}>zoomer: </span>
                      эта озвучка хрень
                      <span style={{"color":"#ad79fa"}}> #split </span>
                      могли взять другой голос.
                  </div>
                </div>
              </div>
              <div className='example-modal-modal-video'>

                <video  controls
                        src={guide}
                        autoplay='autoplay'
                        style={{"width": "1000px"}}
                ></video>

              </div>
            </div>
           </Typography>
         </Box>
         {/* </ThemeProvider> */}
       </Modal>
       </>
    )
}

export default ExampleModal;