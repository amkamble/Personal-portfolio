import React, { useRef } from 'react'
import '../contact/contact.css'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'; 



const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  


  emailjs
    .sendForm('service_dham7wr', 'template_snl3sej', form.current, {
      publicKey: 'cCl3u1fuw0nPjjk4_',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        e.target.reset() 
        alert('Mail was sent sucessfullt ')
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};

  return (
    <>
    <section className='contact-section'>
      <motion.div
       

      id="contact">
        <h1 className='contactPageTitle'>Contact form</h1>
       <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
       <form action="#" className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type="text" className='name' placeholder='Your Name' name='your_name' />
        <input type="email" className='email' placeholder='Your Email' name='your_email' />
        <textarea name="message" className="msg" rows={5} placeholder='Your Message'></textarea>
        <button className="btn" type='submit' value="Send"> <ion-icon name="send"></ion-icon> Submit</button>
       </form>
       </motion.div>
      
    </section>
    
    </>
  )
}

export default Contact