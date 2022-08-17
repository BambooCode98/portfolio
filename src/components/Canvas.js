import React, {useState,useEffect,useRef} from 'react';

export default function Canvas({children}) {
  const canvasContext = useRef(null);
  
  useEffect(() => {
    const canvas = canvasContext.current;
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.beginPath()
    ctx.arc(50,50,10,0,Math.PI*2)
    ctx.fill();
    ctx.closePath();
  },[])

  return (
    <>
      <canvas ref={canvasContext}/>
      <div>
        {children}
      </div>
    </>
  )
}
