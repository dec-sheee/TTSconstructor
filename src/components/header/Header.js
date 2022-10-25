import './Header.css'
import {NavLink} from 'react-router-dom';


const Header = () => {

    return(
        <div className="header-container">
            <div className='header-title'>TTS constructor
            <div className='header-instruction-text'>
                        ТЫ СТРИМЕР И ТОЖЕ <br/> ХОЧЕШЬ СВОЙ ГОЛОС ? 
                        <NavLink  to="/instruction">
                            <button className='header-instruction-button'>
                                <span className='header-instruction-span'>FAQ</span>
                            </button>  
                        </NavLink>      
                </div>
            </div>
            <div className='header-instruction'>
                {/* <div className='header-instruction-text'>
                        ТЫ СТРИМЕР И ТОЖЕ <br/> ХОЧЕШЬ СВОЙ ГОЛОС ? 
                        <NavLink  to="/instruction">
                            <button className='header-instruction-button'>
                                <span className='header-instruction-span'>FAQ</span>
                            </button>  
                        </NavLink>      
                </div> */}
                
            </div>
        </div>
    )
}

export default Header;