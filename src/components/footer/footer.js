import './footer.css'


const Footer = () =>{

    return(
        <>
            <div className="footer">
                <div className='footer-wrapper'>
                        <div className='footer-span'>
                            <span className='span-name'>Created by</span>
                        </div>

                        <div className='footer-name'>
                            <a  style={{"color":"#3774b1", "textDecoration": "none"}}
                                target="_blank"
                                href="https://www.twitch.tv/sheeetface">SheeetFace</a>
                            <br/>
                            <a  style={{"color":"#1d9355", "textDecoration": "none"}} 
                                target="_blank" 
                                href="https://www.twitch.tv/declider">Declider</a>
                        </div>
                </div>
            </div>

            
        </>
    )
}

export default Footer;