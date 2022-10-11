import { useState } from 'react';
import copy from 'copy-to-clipboard';
import Tooltip from '@mui/material/Tooltip';
import { setGlobalState, useGlobalState } from '../state/state';
import './CopyToClipboard.css';


const CopyToClipboard =() =>{
    const [completeText, setCompleteText] = useGlobalState('completeText');
    const [state, setState] = useState("СКОПИРОВАТЬ ВЕСЬ ТЕКСТ В БУФЕР")
    const [color, setColor] =useState("#242424")

    const copyText = ()=>{
        copy(completeText)
        setState('ТЕКСТ СКОПИРОВАН')
        setColor('white') 

        setTimeout(()=>{
            setState("СКОПИРОВАТЬ ВЕСЬ ТЕКСТ В БУФЕР")} , 1500);

        setTimeout(()=>{
            setColor("#242424")} , 100);
    }

    return(
        <>
         <Tooltip  
                   title={state}
                   arrow="true"
                   placement="right">
            <div  className='copy-text' onClick={()=>copyText()}>
                    <svg
                        className='copy-text-icon'
                        id="Layer_1"
                        height="30"
                        viewBox="0 0 24 24"
                        fill={color}
                        width="30" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m13 20a5.006 5.006 0 0 0 5-5v-8.757a3.972 3.972 0 0 0 -1.172-2.829l-2.242-2.242a3.972 3.972 0 0 0 -2.829-1.172h-4.757a5.006 5.006 0 0 0 -5 5v10a5.006 5.006 0 0 0 5 5zm-9-5v-10a3 3 0 0 1 3-3s4.919.014 5 .024v1.976a2 2 0 0 0 2 2h1.976c.01.081.024 9 .024 9a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3-3zm18-7v11a5.006 5.006 0 0 1 -5 5h-9a1 1 0 0 1 0-2h9a3 3 0 0 0 3-3v-11a1 1 0 0 1 2 0z"/>
                    </svg>
            </div>
        </Tooltip>

        </>
    )
}

export default CopyToClipboard;