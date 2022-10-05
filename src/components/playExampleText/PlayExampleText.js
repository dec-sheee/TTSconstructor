import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import './PlayExampleText.css';


const PlayExampleText =() =>{
    const [state, setState] = useState(false);
    console.log(state);

    //! странно,  неправильно отображается один раз +  я не могу сместить ровно
    //! скорее всего ребует замены на статические смайлы
    //! но пока даже непонятно будет ли этот компонент или нет 
    


    const playIcon =
                <div className='play-icon'> 
                    <lord-icon
                        src="https://cdn.lordicon.com/fetyzpiw.json"
                        trigger="click"
                        colors="primary:#000000"
                        state="morph-play-pause"
                        style={{"width":"45px"," height":"45px"}}>
                    </lord-icon>
                </div>

    const stopIcon =
            <div className='play-icon'> 
                <lord-icon
                    src="https://cdn.lordicon.com/fetyzpiw.json"
                    trigger="click"
                    colors="primary:#000000"
                    state="morph-pause-play"
                    style={{"width":"45px"," height":"45px"}}>
                </lord-icon>
            </div>

    const playExample = ()=>{
        setState(!state)
        // console.log(state)
    }


    return(
        <>
         <Tooltip  
                   title="ПРОСЛУШАТЬ ПРИМЕР"
                   arrow="true"
                   placement="left">
            <div  className='play' onClick={()=>playExample()}>
                            {state ?  stopIcon : playIcon}
            </div>
        </Tooltip>

        </>
    )
}

export default PlayExampleText;