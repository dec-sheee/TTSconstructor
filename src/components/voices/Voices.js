import {useRef,useCallback } from 'react';
import badge from '../img/verified-badge.png'
import directIMG from '../img/direct-donationalerts.png' 
import twitchIMG from '../img/twitch.png'
import './Voices.css';
import Tooltip from '@mui/material/Tooltip';
import DropDownInline from '../dropDownInline/DropDownInline';
import data from '../../data.json';
import { UseSounds } from '../useSound/useSound';
import { setGlobalState, useGlobalState } from '../state/state';




const Voices =()=>{

    const [completeText, setCompleteText] = useGlobalState('completeText');
    const {stopAudio,createAudio} = UseSounds();

    let imgBadge = '';

    const itemRefs = useRef([]);
    const lineRef = useRef([]);

    let eachAlt = [];
    let eachAltSound = [];



         
    const handleState = useCallback ((e) =>{
        setCompleteText(completeText => completeText + e)
    },[])

    

    const nameVoices = data.voices.map((elem, i )=>{
        if (elem.verification){
            imgBadge = <img className='badge' src={badge} alt="badge"/>
        }else{
            imgBadge = '';
        }

        
        if(elem.alternative[0]){
            eachAltSound = elem.alternative[1]
            eachAlt =elem.alternative[0].map((el,i)=>{
                return (el)
              }); 
        }

        let dropdown =  elem.alternative ? (<div className='dropdown-inline'> <DropDownInline   eachAlt={eachAlt}
                                                                                                name = {elem.name}
                                                                                                // eachAltSound={eachAltSound}
                                                                                                /> 
                                            </div>) : null;

        return(
                <>
                {elem.blocked ? 
                
                            <div className= 'nameVoices-blocked'>
                                <Tooltip  
                                    title="     В ДАННЫЙ МОМЕНТ ЭТОТ ГОЛОС НЕДОСТУПЕН,
                                                НО СКОРО ОБЯЗАТЕЛЬНО ПОЯВИТСЯ :)"
                                    arrow="true"
                                    placement="right">
                                        <h1 className='blocked-style'
                                            style={{'color': elem['color-name']}}
                                                        key={i}> 
                                                                {elem.name} {imgBadge}   
                                        </h1> 
                                </Tooltip>       
                            </div>
                                
                : 
                            <div className='voices-container'>
                                <table className='voices-dropdownS'>
                                    <td>
                                        <div className=  'nameVoices'             
                                            ref={el=> lineRef.current[i]= el}>
                                                    <h1 className='name'
                                                        style={{'color': elem['color-name']}}
                                                        key={i}
                                                        ref={el=> itemRefs.current[i]= el}
                                                        onMouseEnter={()=>{createAudio(`${elem.sound}.mp3`)}} 
                                                        onMouseLeave={()=>stopAudio()}
                                                        onClick={()=>{  handleState(` ${elem.name}: `)
                                                                        stopAudio()}}> 
                                                                {elem.name} {imgBadge}   
                                                    </h1> 
                                        </div>
                                    </td>
                                        <td>
                                            {dropdown}
                                        </td>
                                        
                                        {elem['social-link'] ? 
                                            <td>
                                                <div    className='social-link'
                                                        style={elem.alternative ?   {"marginLeft": "28px"}:{"marginLeft": "600px"} }
                                                        key={i}>
                                                            <a href={elem['social-link']} 
                                                                target="_blank"
                                                                rel="noreferrer">
                                                                {/* <img src="https://img.icons8.com/ios-filled/50/777777/twitch.png" */}
                                                                <img src={twitchIMG}
                                                                        alt="twitch"
                                                                        className='link-img'/> 
                                                            </a>
                                                </div>
                                            </td>
                                        : null}

                                        {elem['direct-donation-link'] ? 
                                            <td>
                                                <div    className='social-link'
                                                        style={elem['social-link'] ?  {"marginLeft": "25px"}:{"marginLeft": "600px"} }
                                                        key={i}>
                                                            <a href={elem['direct-donation-link']} 
                                                                target="_blank"
                                                                rel="noreferrer">
                                                                <img src={directIMG}
                                                                        // style={{"width": "25px", "height": "26px"}}
                                                                        alt="stream-elements"
                                                                        className='link-img'/> 
                                                            </a>
                                                </div>
                                            </td>
                                        : null}

                                </table>
                                
                            </div> 
                            
                }
                </>
            )
    })

    return(
        <div className='voices-container'>
                  
            <div className="voices-title">ГОЛОСА</div>
            <div className='voices-line'></div>
            <div className='voices'>{nameVoices}</div>
            <div className='toggle-mouseFollowing '></div> 
            
        </div>
    )
}
export default Voices;




