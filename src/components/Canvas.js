import React, {useState,useEffect,useRef} from 'react';

export default function Canvas({children}) {
  const canvasContext = useRef(null);
  let particleArray = [];

  
  
  useEffect(() => {
    const canvas = canvasContext.current;
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.outerHeight+250;
    window.screen.orientation.addEventListener('change', (e) => {
      e.preventDefault();
      ctx.canvas.width = window.innerWidth+100;
      ctx.canvas.height = window.outerHeight+250;
      ctx.fillStyle = 'white'
    })
    ctx.fillStyle = 'white'
    function createParticle(x,y,size,g,w,color) {
      let gravity = g;
      let wind = w;
      return {
        x: x,
        y: y,
        gravity,
        wind,
        size,
        color,
        update() {
          y += gravity;
          x += wind;
    
          if(x > canvas.width || y > canvas.height || x < 0 || y < 0) 
            {
            x = Math.random()*canvas.width;
            y = 10;
          }
        },
        draw() {
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        },
      }
    }

    function particles() {
      for(let i=0; i<50; i++) {
        particleArray.push(createParticle(Math.random()*canvas.width*10,Math.random()*canvas.height*10,Math.random()*10,Math.random()*3,Math.sin((Math.random()*2)-1),'blue'))
      }
    
    }
    particles()


    function animate() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
    
      particleArray.forEach(particle => {
        particle.update();
        particle.draw();
      })
    
      requestAnimationFrame(animate)
      
    }
    animate()
  })

  return (
    <>
      <canvas ref={canvasContext}/>
      <div>
        {children}
      </div>
    </>
  )
}
