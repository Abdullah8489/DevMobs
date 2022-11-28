import React from 'react'
import './contact.css'
// import emailjs from '@emailjs/browser';

export default function contact() {

  // const form = useRef();

   const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
   };

  return (
    <>
    <div className="contactus-wrapper">

      <img className='contact-main-img' src="/images/contact.jpg" alt="background" />
      <h3 className='contact-main-heading'>Contact Us Form</h3>
    
    <div className="form-container">
      
      <form className='form' onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">
              Your Name
              <input
                type="text"
                id="name"
                name="name"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Your Email
              <input
                type="email"
                id="email"
                name="email"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Your message
              <textarea
                type="text"
                id="message"
                name="message"
              />
            </label>
          </div>
          <button type="submit">Send</button>
        </form>

        <div className="gif-image">
          <h3>isme gif dal dena</h3>
          <h3>or form me</h3>
          <h3>border ke property</h3>
          <h3>khatam kr lena</h3>
        </div>

    </div>
    </div>
    </>
  )
}
