import { useState, useEffect } from 'react';
import dc from '../images/projects/dcvillains.png';
import storepage from '../images/projects/storepage.png';
import todolist from '../images/projects/todolist.png';
import weatherapp from '../images/projects/weatherapp.png';

const images = [
  {
    path: dc, 
    title: 'dc', 
    id: 1
  },
  {
    path: storepage, 
    title: 'storepage', 
    id: 2
  }, 
  {
    path: todolist, 
    title: 'todolist',
    id: 3
  }, 
  {
    path: weatherapp, 
    title: 'weatherapp',
    id: 4
  }
]

export default function ThirdSection() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    
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
      <div className='projContainer'>
        <p className='leftArrow' onClick={leftClick}>&lt;</p>
        <img 
        src={images[index].path}
        alt={images[index].title}
        className={images[index].title}
        />
        <p className='rightArrow' onClick={rightClick}>&gt;</p>
        <div className='dot1' />
        <div className='dot2' />
        <div className='dot3' />
        <div className='dot4' />
      </div>
    </div>
  );
}