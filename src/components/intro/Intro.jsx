import React, { useEffect, useRef, useState } from "react";
import "../intro/intro.css";
import downArrow from "../../assets/downArrow.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {motion} from 'framer-motion'

const Intro = () => {
  const texts = [
    "Frontend Developer",
    "Web Designer",
    "Photographer"
  ];



  const [index, setIndex] = useState(0);
  const textRef = useRef(null);

  
 

  // background text animate
  const slideVariants ={
    intial : {
      x : '10%',
    },
    animate:{
      x : '-120%',
      transition :{
        duration : 15,
        repeat :Infinity,
        repeatType :'mirror',
      },
    },
  };

  useGSAP(() => {
    gsap.from(".text", {
      y: 250,
      yoyo: true,
      duration: 1,
      opacity: 0,
      stagger: 0.5,
    });

    gsap.to('.introPara',{
      opacity : 1,
      delay : 2,
    });
  
  },
  []);

  

  const downloadResume = () => {
    const resumeUrl = "../resume.pdf";

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "resume.pdf");

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  const [showResume, setShowResume] = useState(false);

  const openResume = () => {
    setShowResume(true);
  };

  const closeResume = () => {
    setShowResume(false);
  };

  const handleHireClick = () => {
    window.location.href = 'amkamble22@gmail.com';
}



  return (
    <>
      <section className="intro">

      <motion.div className="slidingTextContainer" 
      variants ={slideVariants} intial="initial" animate="animate">
        Fronted Developer
      </motion.div>
     
        <div className="introContent">
          <span className="hello text">Hi there!</span>
          {/* <span className='introText'> I'm <span className='introName'>Amol</span> <br/> <h4 ref={textRef}>{MyText[index]}</h4>  </span> */}
          <span className="introText text">
           I'm <span className="introName">Amol</span> 
          </span>
          <motion.h4 className="skill-name text" id="skill-name"  whileHover={{color:"orange"}}  >Fronted Developer </motion.h4>
         

          {/* {texts.map((text, index) => (
        <div key={index} className="text-item">
          <h1 className="text">{text}</h1>
        </div>
      ))} */}


          <p className="introPara">
            A frontend developer passionate about creating sleek and
            user-friendly websites. Proficient in HTML, CSS, JavaScript,
            React.js, and Java, I enjoy bringing ideas to life through clean and
            responsive design. Currently seeking opportunities to contribute and
            grow in a dynamic team environment. Let's build something amazing
            together!
          </p>

          <div className="social-links">
          <a href="https://codepen.io/amkamble" className="social-link"><ion-icon name="logo-codepen"></ion-icon></a>
            <a href="https://in.linkedin.com/in/amkamble" className="social-link"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href="https://www.instagram.com/spydevcode" className="social-link"><ion-icon name="logo-instagram"></ion-icon></a>
            <a href="https://github.com/amkamble" className="social-link"><ion-icon name="logo-github"></ion-icon></a>
          </div>
          <div className="main-btn">
             
              <button className="btn" onClick={openResume}>
                {/* <img src={downArrow} alt="resume image" /> */}
                <ion-icon name="download"></ion-icon>
                Resume
              </button>
          </div>
          
        </div>
        {/* <img src={man} alt="main-profile" className='bg'/> */}

        {showResume && (
          <div className="resumeFrame">
            <div className="close-btn">
              <button onClick={closeResume}>Close Resume</button>
            </div>
            <iframe
              src="../resume.pdf" 
              title="Resume"
              width="100%"
              height="600px"
              className="resume-frame"
              style={{ border: "1px solid #ccc" }}
            >
              This browser does not support PDFs. Please download the PDF to
              view it.
            </iframe>
          </div>
        )}


      
      </section>
    </>
  );
};

export default Intro;


