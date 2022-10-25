// import './App.css';
// import '../../voices/Voices'
import Voices from '../../voices/Voices';
import {ExampleTextArea} from '../../exampleTextArea/ExampleTextArea';
import Alerts from '../../alerts/Alerts';
import VerticalSlider from '../../verticalSlider/VerticalSlider';
import Footer from '../../footer/footer';
import ExampleModal from '../../exampleModal/exampleModal';
import Header from '../../header/Header';
import InstructionPage from '../../pages/instructionPage/InstructionPage';
import './MainPage.css'


const MainPage = () =>{

    return (
        <>
        <div className='main-wrapper'>
          <div className='main-content'>
            <div className="App">
            <Header/>
              <div className='app-example'>
               Из-за ограничения по безопасности, сайт не может воспроизводить звуки
               пока пользователь хотя бы раз не кликнет мышкой в любом месте.
              </div>
            </div>
    
            <div className='container-app'>
              <div className='Voices-Com'><Voices/></div>
                <div className='modal-slider'>
                <ExampleModal/>
                <VerticalSlider/>
                </div>
              <div className='Alerts-Com'><Alerts/></div>
            </div>
            {/* <InstructionPage/> */}
            <ExampleTextArea />
            {/* <div className='fot-test-header' ></div>
            <div className='fot-test'></div> */}
              <Footer/>
          </div>
       
        </div>

    
        </>
      );

}

export default MainPage;