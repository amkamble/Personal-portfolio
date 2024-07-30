import React from 'react';
import  { useState } from 'react';
import {motion} from 'framer-motion'
import './skills.css'; // Stylesheet for styling the skills component
import apple from '../../assets/apple.svg'


const ShowMoreText = ({ text, maxLength }) => {
  const [showAll, setShowAll] = useState(false);

  // Toggle the state to show or hide all text
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayText = showAll ? text : text.slice(0, maxLength);

  return (
    <div>
      <p>{displayText}</p>
      {text.length > maxLength && (
        <button onClick={toggleShowAll} className="show-more-button">
          {showAll ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  );
};


const variants ={
  initial :{ x : -200, opacity : 0},
  animate :{ x : 0, opacity : 1, 
      transition :{
          duration :1,
          staggerChildren : 0.1,
      }
   }
}


const Skillss = () => {
 
  const powerDescription = "As a dedicated and dynamic fresher, I bring proficiency in HTML, CSS, JavaScript, React.js, SQL, and Java to the table. My skills are complemented by a strong foundation in design principles, ensuring responsive and user-friendly interfaces. Eager to contribute my enthusiasm and adaptability to a forward-thinking team.";

  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'Tailwind', level: 80 },
    { name: 'JavaScript', level: 65 },
    { name: 'React.js', level: 75 },
    { name: 'SQL', level: 70 },
    { name: 'Java', level: 50 }
  ];

  return (
    
    <motion.div className="skills" variants={variants} initial ="initial" whileInView="animate">
      <motion.h2 className='my-skills' variants={variants}>My Skills</motion.h2>
      {/* <p className="power-description">{powerDescription}</p> */}
      <ShowMoreText text={powerDescription} maxLength={100} />
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-progress">
              <div
                className="skill-progress-bar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
    
  );
};


export default Skillss;
