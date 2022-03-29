import { useState, useEffect } from 'react';
import dc from '../images/projects/dcvillains.png';
import storepage from '../images/projects/storepage.png';
import todolist from '../images/projects/todolist.png';
import weatherapp from '../images/projects/weatherapp.png';

const images = [
  {
    path: dc, 
    title: 'DC',
    infoLink: 'https://github.com/BambooCode98/DC-Villians',
    link: 'https://bamboocode98.github.io/DC-Villians/',
    id: 1
  },
  {
    path: storepage, 
    title: 'Storepage',
    infoLink: 'https://github.com/BambooCode98/restaurant-page',
    link: 'https://bamboocode98.github.io/restaurant-page/',
    id: 2
  }, 
  {
    path: todolist, 
    title: 'Todolist',
    infoLink: 'https://github.com/BambooCode98/to-do-list',
    link: 'https://bamboocode98.github.io/to-do-list/',
    id: 3
  }, 
  {
    path: weatherapp, 
    title: 'WeatherApp',
    infoLink: 'https://github.com/BambooCode98/weather-app',
    link: 'https://bamboocode98.github.io/weather-app/',
    id: 4
  }
]


export default function ThirdSection() {
  const [index, setIndex] = useState(0);
  const [color1, setColor1] = useState('#e4e4e43f');
  const [color2, setColor2] = useState('#e4e4e43f');
  const [color3, setColor3] = useState('#e4e4e43f');
  const [color4, setColor4] = useState('#e4e4e43f');


  useEffect(() => {
  
    if(index === 0) {
      setColor1('white')
    } else {
      setColor1('#e4e4e43f')
    }
    if(index === 1) {
      setColor2('white')
    } else {
      setColor2('#e4e4e43f')
    }
    if(index === 2) {
      setColor3('white')
    } else {
      setColor3('#e4e4e43f')
    }
    if(index === 3) {
      setColor4('white')
    } else {
      setColor4('#e4e4e43f')
    }
  }, [index])
  

  function leftClick() {
    setIndex( value => {
      if(value > 0) {
        return value - 1;
      } else if(value === 0) {
        return value;
      }
    })
  }

  function rightClick() {
    setIndex(value => {
      if(value < 3) {
        return value + 1
      } else if(value === 3) {
        return value;
      }
    })
  }


  return(
    <div className="body3">
      <h1 className="header3">Projects I Have Created</h1>
      <p className='sect3text'>Click on the project for a live demo, or click on the project title for an overview.</p>
      <div className='projContainer'>
        <p className='leftArrow' onClick={leftClick}>&lt;</p>
        <a href={images[index].link} target="_blank">
        <img 
        src={images[index].path}
        alt={images[index].title}
        className={images[index].title}
        />
        </a>
        <p className='rightArrow' onClick={rightClick}>&gt;</p>
        <div className='dot1' style={{backgroundColor: color1}}/>
        <div className='dot2' style={{backgroundColor: color2}}/>
        <div className='dot3' style={{backgroundColor: color3}}/>
        <div className='dot4' style={{backgroundColor: color4}}/>
      </div>
      <a href={images[index].infoLink} target="_blank">
        <h3 className='projectTitle'>{images[index].title}</h3>
      </a>
    </div>
  );
}