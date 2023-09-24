import './index.scss'
import { Icon } from '@iconify/react';
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {

    return (
        <div className="container about-page">
            <div className="text-zone">
            <h1>
                About Me
            </h1>
            <p className='para'>
                I'm a computer science undergrad student and a practicing fullstack web developer looking for an opportunity to work with the latest technologies on challenging and diverse projects.
            </p>
            <p className='para'>
                I'm experienced with various web development technologies including HTML5, CSS3, JavaScript, TypeScript, ReactJS, NodeJS, ExpressJS. I'm also familiar with RDBMS like MySQL and NoSQL databases like MongoDB.
            </p>
            <p className='para'>
                I have also worked with various tools like Postman for API testing, Jira for agile product management and Git and GitHub for version control.
            </p>
            <p className='para'>
                I'm a motivated individual, keen on learning new skills and technologies to make a positive contribution.
            </p>
            
            </div>
            
          
            <div className="face1">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
            <Icon icon="simple-icons:mongodb" color='#086122'/>
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            
        </div>
       
    )
}

export default About