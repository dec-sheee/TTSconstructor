import {useRef} from 'react';
import CopyToClipboard from '../copyToClipboard/CopyToClipboard';
import './ExampleTextArea.css'
import { setGlobalState, useGlobalState } from '../state/state';
import animeError from'../img/animeError.png'


export const ExampleTextArea = (props) =>{

    const [completeText, setCompleteText] = useGlobalState('completeText');

    const textArea = useRef([]);

    const handleState = (e) =>{
        setCompleteText( e.target.value)

    }
    return(
        <>
            <div > {completeText.length > 500 ?  <img className='anime-error'src={animeError} alt="anime-error"/> : null}</div>
                        <div className='example-text-area-container'>
                            <div className='text-field-main'>
                                <div className='title-example'>Пример текста в донате</div>   
                                <div className='example-text'>
                                    <table className='table'>
                                            <td> 
                                                <div className='td-item'>
                                                     {/* <PlayExampleText/> */} 
                                                     <div className='stub'></div>
                                                </div>
                                            </td>
                                                <td>
                                                    <textarea   
                                                                className='text-area-example'
                                                                placeholder='ТЕКСТ ДОНАТА'
                                                                ref={el=> textArea.current= el}
                                                                onChange={handleState}
                                                                value={completeText}>           
                                                    </textarea>
                                                </td>
                                            <td> 
                                                <div className='td-item'><CopyToClipboard/></div>
                                            </td>
                                    </table>
                                    <div className='text-count'> { completeText.length === 0 ? null : completeText.length}</div>
                                    {/* <CopyToClipboard/> */}
                                </div>
                            </div>
                            <div className='example-line'></div> 
                          
                        </div>                
        </>
    )
}
