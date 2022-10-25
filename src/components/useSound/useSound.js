import { useState } from "react";
import {Howl, Howler} from 'howler';


export const UseSounds = () => {


const [volume, setVolume] = useState(0.5)

    let sound;
      
      const createAudio =(item)=>{
        sound = new Howl({
            src: [item],
          });
          playAudio()
      }
      const playAudio =()=>{
        sound.play();
      }

      const stopAudio =()=>{
        sound.stop()
      }
      
      const changeVol = (vol)=>{
        setVolume(vol)
      }

       Howler.volume(volume);
      
      return{playAudio, createAudio, stopAudio, changeVol, volume}


}

