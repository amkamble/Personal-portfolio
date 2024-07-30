import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./about.css";
import profile from "../../assets/profile.png";

const items = [
  {
    id: 1,
    title: "",
    img: "https://images.pexels.com/photos/15562025/pexels-photo-15562025/free-photo-of-young-man-standing-in-the-city-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Hello! I'm Amol Kamble, a passionate BCS (Bachelor of Computer Science) student with a keen interest in web design and development. Completed my degree, I am eager to apply my knowledge and skills in creating visually appealing and functional websites.",
  },
  {
    id: 2,
    title: "My Goal",
    img: "https://images.pexels.com/photos/15562025/pexels-photo-15562025/free-photo-of-young-man-standing-in-the-city-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "My goal is to leverage my academic background and practical skills to kickstart my career in web design. I am enthusiastic about contributing to innovative web projects and creating user-friendly interfaces that enhance the digital experience.",
  },
  {
    id: 3,
    title: "Why Web Design?",
    img: "https://images.pexels.com/photos/15562025/pexels-photo-15562025/free-photo-of-young-man-standing-in-the-city-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "I am drawn to web design because it combines creativity with technical skills, allowing me to bring ideas to life on the digital canvas. I am excited about the continuous learning opportunities in this dynamic field and am committed to staying updated with industry trends and best practices.",
  },
  {
    id: 4,
    title: "Interests",
    img: "https://images.pexels.com/photos/15562025/pexels-photo-15562025/free-photo-of-young-man-standing-in-the-city-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "In my free time, I immerse myself in anime, which sparks my creativity and imagination. I also enjoy playing cricket and following exciting matches, which keeps me active and entertained. Traveling is a passion of mine, allowing me to explore new cultures and gain fresh perspectives.",
  },
];

const variants = {
  initial: { fontSize: "2rem", opacity: 0 },
  animate: {
    fontSize: "3rem",
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          {/* <div className="imageContainer" ref={ref}>
        <img src={profile} alt="item image" className='image' />
        </div> */}
          <motion.div className="textContainer" style={{ y }}>
            <motion.h2
              className="title"
              variants={variants}
              initial="initial"
              whileInView="animate"
            >
              {item.title}
            </motion.h2>
            <p className="desc">{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ ref });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="about"
      ref={ref}
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="progress">
        <h1>About Me</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      <img src={profile} alt="item image" className="image" />
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </motion.div>
  );
};

export default About;
