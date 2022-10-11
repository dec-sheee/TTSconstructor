import {useState} from 'react'
import './App.css';
import '../voices/Voices'
import Voices from '../voices/Voices';
import {ExampleTextArea} from '../exampleTextArea/ExampleTextArea';
import Alerts from '../alerts/Alerts';
import VerticalSlider from '../verticalSlider/VerticalSlider';
import Footer from '../footer/footer';
import animeNote from '../img/animeNote.png'
import ExampleModal from '../exampleModal/exampleModal';


function App() {

const [showAnimeNote, setShowAnimeNote] = useState('anime-note')
const zvuk = `{Звук}`

  return (
    <>
    
        <div className="App">
        <img  className={showAnimeNote}
              src={animeNote}
              alt="anime-note"
              onClick={()=> setShowAnimeNote('anime-note-hide')}
              />

          <div className='app-example'>
            Для переключения голоса нужно указать нужный голос и поставить после него двоеточие - <span style={{'color': '#d36da9'}}>Голос:</span> <br/>
            Для воспроизведения звука нужно указать нужный звук после хэштега - <span style={{'color': '#8e73dc'}}> {zvuk}</span>
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
        <Footer/>
    </>
  );
}

export default App;
