
import Canvas from './components/Canvas';
import './styles/app.css';
import Header from './components/Header';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import { Routes,Route} from 'react-router-dom';
import { useRef } from 'react'


function App() {
  // const mainDivContext = useRef(null)
  


  return (
    <div className="app">
      <Canvas>
        <Header/>
        {/* <div className='maindivprime' ref={mainDivContext} > */}
          <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        {/* </div> */}
      </Canvas>
    </div>
  );
}

export default App;
