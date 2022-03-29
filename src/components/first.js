import React, {useEffect, useState} from "react";

export default function FirstSection() {
  const [textNum, setTextNum] = useState(0);
  const [animateClass, setAnimateClass] = useState('sec1para-animation');

  const texts = [
    {
      message: 'My name is James Thomas, and I am aiming to be a self-taught full stack developer. My main interests are in frontend and backend development.', 
      id: 0,
    },
    {
      message: 'I am a very quick learner, and have the ability to put the things I learn into use very quickly. I am motivated by challenges, and enjoy working on difficult problems.', 
      id: 1,
    }
  ]

  console.log(textNum);
  console.log(animateClass);

  useEffect(() => {
    if(textNum === 0) {
      setTimeout(() => {
        setTextNum(1);
      }, 8000);
    }
    if (textNum === 1) {
      setTimeout(() => {
        setTextNum(0);
      }, 8000);
    }
  }, [textNum])
 
  useEffect(() => {
    if(animateClass === '') {
      setTimeout(() => {
        setAnimateClass('sec1para-animation');
      },8000);
    } else if (animateClass === 'sec1para-animation') {
      setTimeout(() => {
        setAnimateClass('');
      }, 8000);
    }
  }, [animateClass])


  return(
    <div className="body1">
      <h1 className="header">About Me</h1>
      <div className="sec1para">
        <p className={animateClass} >{texts[textNum].message}</p>
      </div>
    </div>
  );
}

