import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import '../Project/project.css';
import {motion} from 'framer-motion'
import projectsData from '../Project/projectData.json';

const ShowMoreText = ({ text, maxLength }) => {
  const [showAll, setShowAll] = useState(false);

  // Toggle the state to show or hide all text
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Truncate the text if it exceeds maxLength when not showing all
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

const Projects = () => {
  const projectPara =
    'My portfolio showcases projects where I harness the power of technology to transform ideas into impactful solutions. Through proficiency in HTML, CSS, JavaScript, and React.js, I have crafted dynamic web applications that redefine user experiences. From conceptualization to deployment, each project reflects my commitment to innovation and excellence. By leveraging cutting-edge frameworks and design principles, I ensure that every product not only meets but exceeds expectations, driving transformative outcomes for clients and users alike.';

  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    speed: 100,
    transition: true,
    axis: null,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
  };



  return (
    <div className="project-section" id="project" >
      <h1 className="project-head">Projects</h1>
      <ShowMoreText text={projectPara} maxLength={102} />
      <div className="projects-container" >
        {projectsData.projects.map((project, index) => (
          <Tilt key={index} options={defaultOptions}>
            <div className="project-card" >
              <img src={project.image} alt={project.name} className="project-image" />
              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                {/* <p className="project-description">{project.description}</p> */}
                <ShowMoreText text={project.description} maxLength={60} />
                <div className="project-links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                  {/* Uncomment if you have a demo link */}
                  {/* <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">Demo</a> */}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Projects;
