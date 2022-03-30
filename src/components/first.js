import React, {useEffect, useState} from "react";

export default function FirstSection() {
  const [textNum, setTextNum] = useState(0);
  const [animateClass, setAnimateClass] = useState('sec1para-animation');

  const texts = [
    {
      message: 'My name is James Thomas, and I am aiming to be a self-taught full stack developer. My main interests are in frontend and backend development.', 
      id: 0,
      styles: 'sec1para-animation',
    },
    {
      message: 'I am a very quick learner, and have the ability to put the things I learn into use very quickly. I am motivated by challenges, and enjoy working on difficult problems.', 
      id: 1,
      styles: 'sec1para-animation',
    }
  ]

  useEffect(() => {
    if(textNum === 0) {
      setTimeout(() => {
        setTextNum(1);
      }, 9000);
    }
    if (textNum === 1) {
      setTimeout(() => {
        setTextNum(0);
      }, 9000);
    }
  }, [textNum])
 
  useEffect(() => {
    if(animateClass === 'sec1para-animation2') {
      setTimeout(() => {
        setAnimateClass('');
        setAnimateClass('sec1para-animation');
      }, 9000);
    }
    if (animateClass === 'sec1para-animation') {
      setTimeout(() => {
        setAnimateClass('');
        setAnimateClass('sec1para-animation2');
      }, 9000);
    }
  }, [animateClass])


  return(
    <div className="body1">
      <h1 className="header">About Me</h1>
      <div className="sec1para">
        <p className={animateClass}>
          {texts[textNum].message}
        </p>
      </div>
    </div>
  );
}

