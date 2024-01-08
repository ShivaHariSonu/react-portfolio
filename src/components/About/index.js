import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faDocker, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import Resume from '../../assets/files/resume.pdf'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate-hover-aboutme')
    useEffect(()=>{
        setTimeout(()=> {
           setLetterClass('text-animate-hover-aboutme')
       },3000)
   },[])
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass = {letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} 
                    idx={15}>
                    </AnimatedLetters>
                </h1>
                <hr/>
                <h2>Gundeti Shiva Hari</h2>
                <a href={Resume}><h3>CV</h3></a>
                <p>
                  Hola! I am Gundeti Shiva Hari
                </p>
                <p>
                Currently, I am a Master student at <a href="https://www.cs.utah.edu/"> School of Computing, University of Utah</a>
                </p>
                <p> Previously, I was a SDE 2 at <a href="https://www.braneenterprises.com/"> Brane Enterprises</a> where I have worked in the Data Platform and Search team.</p>
                <p>
                  I was an undergrad at <a href='https://www.iitbbs.ac.in/electrical--programs.php?code=es'>School of Electrical Sciences, IIT Bhubaneswar</a> where I have received a bachelor's degree in Electrical Engineering.
                </p>
                <h4>Other Activities</h4>
                <p>Usually, I spend my time solving problems on <a href="https://leetcode.com/shivahari/">Leetcode</a>.</p>
                <p>Also, I am interested in competitive programming and participated <a href="https://icpc.global/regionals/finder/Rocky-Mountain-2024/teams">ICPC Rocky Mountain Regional Contest</a> for team whynotcombinator</p>
                <p> These days, I am spending more time in Theory research (mainly on Graphs) and Deep Learning, AI, ML stuff. </p>
                <h4 >Contact</h4>
                <ul>
                  <li><a href="mailto:shivaharigundeti@gmail.com">shivaharigundeti@gmail.com</a></li>
                  <li><a href="mailto:gsh10@iitbbs.ac.in">gsh10@iitbbs.ac.in</a></li>
                  <li><a href="mailto:u1460836@utah.edu">u1460836@utah.edu</a></li>
                </ul>
                <p>
                  Also, you can use <a href='/react-portfolio/contact'>contact page</a> to mail me. If you follow the map and want to reach my location, inform me prior &#128517;
                </p>
          </div>
        <a href={Resume}>
          <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faDocker} color="#0db7ed" />
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
                  <FontAwesomeIcon icon={faDatabase} color="#000435" />
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
              </div>
          </div>
        </a>
        <Loader type="pacman" />
        </div>
    )
}

export default About