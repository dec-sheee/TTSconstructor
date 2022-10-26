import './footer.css'
import dotane from '../img/support-donate.png'


const Footer = () =>{

    return(
        <>
            <footer className="footer">
                {/* <div className='footer-line'></div> */}
                <div className='footer-wrapper'>
                        <div className='footer-support'>
                            <span className='support'>support the project</span>
                            <a  target="_blank"
                                href="https://donate.qiwi.com/payin/declider">
                            <img src={dotane}
                                 alt='support-project'
                                 className='support-img'/>
                            </a>
                        </div>
                        <div className='footer-span'>
                            <span className='span-name'>Created by</span>
                        </div>

                        <div className='footer-name'>
                            <a  style={{"color":"#1d9355", "textDecoration": "none"}} 
                                target="_blank" 
                                href="https://www.twitch.tv/declider">declider &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</a> (TTS Application)
                            <br/>
                            <a  style={{"color":"#3774b1", "textDecoration": "none"}} 
                                target="_blank" 
                                href="https://www.twitch.tv/vanilnyj_pekan">vanilnyj_pekan &nbsp;</a> (Support with TTS)
                            <br/>
                            <a  style={{"color":"#3774b1", "textDecoration": "none"}}
                                target="_blank"
                                href="https://www.twitch.tv/sheeetface">SheeetFace &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> (frontend)
                        </div>
                </div>
            </footer>

            
        </>
    )
}

export default Footer;