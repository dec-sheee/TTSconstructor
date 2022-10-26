
import data from '../../data.json';
import donate from '../img/donate.png'
import "./DonateModal.css"

const DonateModal = ({name,link}) =>{


        return(
            <div className='donate-container'>
                <div className='donate-container-text-header'>
                    Ты используешь голос
                </div>

                <div className='donate-container-name'> {name}</div>

                <div className='donate-container-text'>
                    Если хочешь задонатить именно этому человеку,
                    <br/>
                    то ссылка ниже
                </div>
                <div className='donate-container-img'>
                    <a  href={link}
                        target="_blank">
                        <img  
                            className='donate-img'
                            src={donate} 
                            alt="donate-link"
                            />
                    </a>
                </div>
            </div>
            
        )
    
}

export default DonateModal;