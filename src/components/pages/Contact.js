import React from 'react';
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();
  const [emailConfirm, setEmailConfirm] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_0e8ia68', 'portfolio_template', form.current, 'LXhl_84KE1irwZ0wI')
      .then((result) => {
          setEmailConfirm(true);
          // console.log(result.text);
          setTimeout(() => {
            if(result) {
              window.location.reload();
            }
          }, 1000)
      }, (error) => {
          console.log(error.text);
      });


  }


  return (
    <>
      <div className='mainDiv'>
          <div className='bubbleDivContact'>
            <h1 className='cHead'>Contact Me</h1>
            <div className="formContainer">
              <form ref={form} onSubmit={sendEmail} className="form">
                <input 
                className="cName"
                type="text"
                placeholder="Name"
                name="name"
                />
                <input 
                className="email"
                type="email"
                placeholder="Email"
                name="email"
                />
                <input 
                className="subject"
                type="text"
                placeholder="Subject"
                name="subject"
                />
                <textarea 
                className="body"
                rows={10}
                columns={8}
                placeholder="Message..."
                name="body"
                />
                <input 
                type="submit"
                className="submit"
                value="Send"
                />
              </form>
            </div>
            {emailConfirm ? 
              <div className='showModal'>
                <p className='mtext'>Email sent successfully!</p>
              </div> : null }
          </div>
          <div className='bubbleDiv2'>
            <h1 className='cHead2'>Github</h1>
            <p className='c2text'>BambooCode98</p>
            <a href="https://github.com/BambooCode98" target="_blank" rel='noreferrer'>
              <div className="githubMark">
                <img
                  src={require('../../images/GitHub-Mark-120px-plus.png')}
                  
                  alt="github"
                />
              </div>
            </a>
          </div>
          <div className='bubbleDiv3'>
            <h1 className='chead3'>Email</h1>
            <p className='c3text'>jw.thomas98@yahoo.com</p>
          </div>
          {/* <div className='bubbleDiv4'>
            

          </div>
          <div className='bubbleDiv5'>
            
          </div> */}

      </div>
    </>
  )
}
