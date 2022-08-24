import FirstSection from './components/first';
import FourthSection from './components/fourth';
import SecondSection from './components/second';
import ThirdSection from './components/third';
import Canvas from './components/Canvas';
import './styles/app.css';
import Header from './components/Header';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import { Routes,Route, Link } from 'react-router-dom'


function App() {
  return (
    <div className="app">
      <Canvas>
        <Header/>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Canvas>
    </div>
  );
}

export default App;
