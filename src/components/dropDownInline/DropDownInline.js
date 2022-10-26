import { useState,useCallback} from 'react';
import './DropDownInline.css'
import { setGlobalState, useGlobalState } from '../state/state';
// import { UseSounds } from '../useSound/useSound';

const DropDownInline = ({eachAlt, name,}) =>{

    const [completeText, setCompleteText] = useGlobalState('completeText');
    const [isDrop, setIsDrop] =useState(false);
    // const {stopAudio,createAudio} = UseSounds();

    const iconDropTrue = 
                        <div className='iconDropTrue'>
                            <lord-icon
                                src="https://cdn.lordicon.com/zvpyzhdi.json"
                                trigger="hover"
                                colors="primary:#777777"
                                state="hover-2"
                                style={{"width":"20px", "height":"20px"}}>
                            </lord-icon>
                        </div>

    const iconDropFalse = 
                        <div className='iconDropFalse'>
                                    <lord-icon
                                                src="https://cdn.lordicon.com/eflfmgmj.json"
                                                trigger="hover"
                                                colors="primary:#777777"
                                                state="hover-1"
                                                style={{"width":"20px", "height":"20px"}}>
                                    </lord-icon>
                        </div>

        const showDrop = () =>{
            setIsDrop(isDrop => !isDrop)
        }

        const handleState = useCallback ((e) =>{
            setCompleteText(completeText => completeText + e)
        },[])

        const itemAlt = eachAlt.map((item,i)=>{
            
            return(
                <div className='eachAlt'
                    key={i}
                    // onMouseEnter={()=>{createAudio(`${eachAltSound[i]}.mp3`)}} 
                    // onMouseLeave={()=>stopAudio()}

                    // onClick={()=>{  handleState(`${name}(${item}): `)
                    //                 stopAudio()}}
                    onClick={()=>handleState(` ${item}: `)}
                                    >
                                            {item}
                </div>
            )
            
        })       
        const container =  
                            <div className="container">
                                <div className='isDropdown-title'>Альтернативное написание голоса
                                    <div className='isDropdown-title-name'> {name} </div>
                                </div>
                                    <div className='container-border'>
                                        <div className='item'>
                                                {itemAlt}
                                        </div>           
                                    </div>
                                <div className='line-eachAlt'></div> 
                            </div>
                        
            return(
                <>
                    <div    className='iconDrop'
                            onClick={()=> showDrop()}> 
                                {!isDrop ? iconDropTrue : iconDropFalse}
                    </div>
                        {isDrop ? container : null}
                </>
            )
}

export default DropDownInline;