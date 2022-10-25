import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme } from '@mui/material/styles';
import { UseSounds } from '../useSound/useSound';
import './verticalSlider.css'

export default function VerticalSlider() {

  const {changeVol, volume} = UseSounds();

  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#777777',
        darker: '#777777',
      },
    },
  });

  return (
    <>

    <div className='vertical-slider'>
    <img className='volume-max' src="https://img.icons8.com/ios-filled/20/464646/speaker.png" alt="volume"/>
        <Box sx={{ height: 160 }}>
          <Slider
            sx={{
              '& input[type="range"]': {
                WebkitAppearance: 'slider-vertical',
              },
            }}
            theme={theme}
            orientation="vertical"
            defaultValue={0.5}
            step={0.1}
            max={1}
            min={0}
            aria-label="Volume"
            // valueLabelDisplay="auto"
            onKeyDown={preventHorizontalKeyboardNavigation}
            onChange={(e)=>changeVol(e.target.value)}
          />
        </Box>
        {volume ? <img className='volume' src="https://img.icons8.com/ios-filled/20/464646/low-volume.png" alt="low-volume"/> : 
                  <img className='volume' src="https://img.icons8.com/ios-filled/20/464646/mute--v1.png" alt='mute-volume'/>}

    </div>
    </>
  );
}