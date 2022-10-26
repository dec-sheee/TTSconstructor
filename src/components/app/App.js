
// import './App.css';
// import '../voices/Voices'
import Voices from '../voices/Voices';
import {ExampleTextArea} from '../exampleTextArea/ExampleTextArea';
import Alerts from '../alerts/Alerts';
import VerticalSlider from '../verticalSlider/VerticalSlider';
import Footer from '../footer/footer';
import ExampleModal from '../exampleModal/exampleModal';
import Header from '../header/Header';
import InstructionPage from '../pages/instructionPage/InstructionPage';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from '../pages/mainPage/MainPage';
import FormPage from '../pages/formPage/FormPage';


function App() {


  return (
    <>
        {/* <div className="App">
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

        <ExampleTextArea />
        <Footer/> */}
        <Router>
            <Routes>
                <Route  path="/" element={<MainPage/>}/>
                <Route  path="/instruction" element={ <InstructionPage/>}/>
                <Route  path="/form" element={ <FormPage/>}/>
            </Routes>
        </Router>

    </>
  );
}

export default App;
