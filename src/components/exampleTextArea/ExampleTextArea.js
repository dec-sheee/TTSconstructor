import {useEffect, useRef} from 'react';
import CopyToClipboard from '../copyToClipboard/CopyToClipboard';
import './ExampleTextArea.css'
import PlayExampleText from '../playExampleText/PlayExampleText';
import { setGlobalState, useGlobalState } from '../state/state';
import animeError from'../img/animeError.png'
import DonateModal from '../donateModal/DonateModal';
import data from '../../data.json';



export const ExampleTextArea = (props) =>{

    const [completeText, setCompleteText] = useGlobalState('completeText');


    const textArea = useRef([]);
    let name = '';
    let link = '';


    const handleState = (e) =>{
        setCompleteText( e.target.value)
    }



    data.voices.map(item => {

            // if(completeText.indexOf(` ${item.name}:`) > -1 && item.verification){
            //     name = item.name
            //     link= item['direct-donation-link']
            // }

            let altWriting =[];
            if(item.verification && item.alternative[0]){
                altWriting=item.alternative[0]

                altWriting.forEach(alt=>{
                        if(completeText.indexOf(` ${alt}:`) > -1 || completeText.indexOf(` ${item.name}:`) > -1){
                                name = item.name
                                link= item['direct-donation-link']
                        }
                    })    
            }    
    })
    


    return(
        <>
            <div > {completeText.length > 200 ?  <img className='anime-error'src={animeError} alt="anime-error"/> : null}</div>
                    <div className='field'>
                        <div className='example-text-area-container'>
                            <div className='text-field-main'>
                                <div className='title-example'></div>   
                                <div className='example-text'>
                                    <table className='table'>
                                            <td> 
                                                <div className='td-item'>
                                                     {/* <PlayExampleText/>  */}
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
                                    <div
                                        className='text-count'
                                        style={completeText.length > 200 ?{ "color":"red"} : null}>
                                            {completeText.length === 0 ? null : completeText.length}                       
                                    </div>
                                    {/* <CopyToClipboard/> */}
                                </div>
                            </div>
                            <div className='example-line'></div> 
                        </div> 

                        <div 
                        className='donation-modal'
                        // style={{
                        //     "marginLeft": "0px",
                        //     "width": "0px",
                        //     "height": "0px"
                        // }}
                        
                        
                        >
                          {name && link ? 
                                        <DonateModal   name ={name}
                                                       link ={link}
                                                    //    altName={altName}
                                                       />
                                        : null}
                          
                        </div> 
            </div>         
        </>
    )
}
