import React from 'react'
import '../../styles/app.css';


export default function About() {
  return (
    <>
      <div className='mainDiv'>
          <div className='bubbleDiv1'>
          </div>
          <div className='bubbleDiv2'>
            <h1 className='about'>About Me</h1>
            <p className='aboutText'>My name is James Thomas.</p>
          </div>
          <div className='bubbleDiv3'>
            <div className='bd3container'>
              <p className='aboutTextextra'>
                Hello!
                <br/>
                I am a software developer, gardener, and a fan of crazy weather.
              </p>
              <p className='aboutTextextra2'>
                I enjoy coding because it is something that gives me the ability to create whatever comes to mind, solve problems, and develop many other skills.
              </p>
            </div>
          </div>
          <div className='bubbleDiv4'>
            <h2 className='about'>My Style</h2>
            <p className='aboutText'>Clean, Simple, and Enjoyable.</p>

          </div>
          <div className='bubbleDiv5'>
            <div className='aboutText2'>
              <p className='aboutparagraph'>
                I enjoy creating websites with interesting geometric designs, effects, and a nice, clean look.
              </p>
              <br/>
              <p className='aboutparagraph2'>
                My aim is to make websites that are eye-catching, simple, and easily enjoyable. 
              </p>
            </div>
          </div>
          <div className='bubbleDiv6'>
            <div className='aboutTextCTA'>
              
            <br/>
            <p className='callToActionPara'>
              If you need a project done, or are looking to hire, my contact information is in the contact section along with a way to email me directly.
            </p>
            </div>
          </div>

        </div>
    </>
  )
}
