import {useRef} from 'react';
import './Alerts.css'
import data from '../../data.json';
import { setGlobalState, useGlobalState } from '../state/state';
import { UseSounds } from '../useSound/useSound';



const Alerts = () =>{

    const {stopAudio,createAudio} = UseSounds();
    const [completeText, setCompleteText] = useGlobalState('completeText');
    const alertsRef = useRef([]);

    const handleState = (e) =>{
        setCompleteText(completeText => completeText + e)
    }

    const arrLength =Math.round(data.alerts.length / 3);

    const createCollm =(first, second)=>{
        let collum= data.alerts.slice(first, second).map((el,i)=>{
            return(
                <div className='alertsName'
                                key={i}
                                ref={el=> alertsRef.current[i]= el}
                                onMouseEnter={()=>{createAudio(`${el.sound}.mp3`)}} 
                                onMouseLeave={()=>stopAudio()}
                                onClick={()=>{handleState(` {${el.name}}`)
                                              stopAudio()}} 
                                >    
                                    {el.name}
                </div>
            )
        })
        return collum
    }

    const collumOne = createCollm(0,arrLength);
    const collumTwo = createCollm(arrLength,arrLength*2);
    const collumThree = createCollm(arrLength*2);

 
    return(
        <>
        <div className='alerts-container'>
                  <div className="alerts-title">ALERTS</div>
                  <div className='alerts-line'></div>
                  <div className='alerts'>
                    <div className='collum-container'>
                         <div className='collum-one'>{collumOne}</div>
                        <div className='collum-two'>{collumTwo}</div>
                        <div className='collum-three'>{collumThree}</div>

                        {/* <div className='collum-one'>{createCollm(0,arrLength)}</div>
                        <div className='collum-two'>{createCollm(arrLength,arrLength*2)}</div>
                        <div className='collum-three'>{createCollm(arrLength*2)}</div> */}
                    </div>
                  </div>
        </div> 
        </> 
    )
}

export default Alerts;