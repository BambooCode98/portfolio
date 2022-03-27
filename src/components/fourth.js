import { useState, useRef } from "react";
import emailjs from 'emailjs-com';

export default function FourthSection() {
  const form = useRef();


  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_0e8ia68', 'portfolio_template', form.current, 'LXhl_84KE1irwZ0wI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return(
    <div className="body4">
      <h1 className="header4">Contact</h1>
      <div className="formContainer">
        <form ref={form} onSubmit={sendEmail} className="form">
          <input 
          className="name"
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
    </div>
  );
}







