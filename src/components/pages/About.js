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
                I am a web developer with a passion to make the internet look good.
              </p>
              <p className='aboutTextextra2'>
                I enjoy coding because it is a subject that gives me the ability to create whatever comes to mind, solve problems, and develop problem-solving skills.
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
                I enjoy creating websites with interesting geometric designs and effects.
              </p>
            {/* <br/> */}
            <br/>
            <p className='aboutparagraph2'>
              My aim is to make a clean website that is pleasing to view, simple to understand, and easy to enjoy.
            </p>
            </div>
          </div>

        </div>
    </>
  )
}
