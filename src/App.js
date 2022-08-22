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
        {/* <div className='mainDiv'>
          <div className='bubbleDiv1'>
          </div>
          <div className='bubbleDiv2'>
            <h1 className='about'>About Me</h1>
            <p className='aboutText'>My name is James Thomas.</p>
          </div>
          <div className='bubbleDiv3'>
            <p className='aboutText2'>I am aspiring to be a software developer, game developer, and someone that makes interesting webpages.
            <br/>
            <br/>
            I enjoy coding because it is a subject that gives me the ability to create so many things.
            </p>
          </div>
          <div className='bubbleDiv4'>
            <h2 className='about'>My Style</h2>
            <p className='aboutText'>Clean, Simple, and Enjoyable.</p>

          </div>
          <div className='bubbleDiv5'>
            <p className='aboutText2'>I enjoy creating websites with interesting geometric designs and effects.
            <br/>
            <br/>
            I aim to make a clean website that is pleasing to view, simple to understand, and easy to enjoy.
            </p>
          </div>

        </div> */}
        {/* <About/> */}
        {/* turn the current code into a page component and make the projects and contacts into component pages. these pages will then be flipped/navigated betweeen with react router */}
      </Canvas>
    </div>
  );
}

export default App;
