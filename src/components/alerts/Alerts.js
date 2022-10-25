import {useState,useRef} from 'react';
import './Alerts.css'
import data from '../../data.json';
import { setGlobalState, useGlobalState } from '../state/state';
import { UseSounds } from '../useSound/useSound';
import search from '../img/search.png'



const Alerts = () =>{

    const {stopAudio,createAudio} = UseSounds();
    const [completeText, setCompleteText] = useGlobalState('completeText');
    const [value, setValue] = useState('')
    const alertsRef = useRef([]);

    const filtredAlerts = data.alerts.filter(alert =>{
        return alert.name.includes(value.toLocaleLowerCase())
    })


    const handleState = (e) =>{
        setCompleteText(completeText => completeText + e)
    }

    const arrLength =Math.round(data.alerts.length / 3);

    const createCollm =(first, second)=>{
        // let collum= data.alerts.slice(first, second).map((el,i)=>{
            let collum= filtredAlerts.slice(first, second).map((el,i)=>{
            return(
                <div className='alertsName'
                                key={i}
                                ref={el=> alertsRef.current[i]= el}
                                onMouseEnter={()=>{createAudio(`${el.sound}.mp3`)}} 
                                onMouseLeave={()=>stopAudio()}
                                onClick={()=>{handleState(` #${el.name}`)
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
                <div  className='wrapper-title-search'>
                  <div className="alerts-title">ЗВУКИ</div>
                  <img className='search-panel-img' src={search} alt="search"/>
                  <input
                                type="text"
                                placeholder='поиск'
                                className='search-panel-input'
                                onChange={(e)=> setValue(e.target.value)}/>
                </div>

                  <div className='alerts-line'></div>
                  <div className='alerts'>
                    <div className='search-panel'></div>

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