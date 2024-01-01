import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faDocker, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(()=>{
        setTimeout(()=> {
           setLetterClass('text-animate-hover')
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
                <p>
                Hola, I am Shiva Hari, a student of Computer Science pursuing my Masters at University of Utah.
                I did my Bachelors at IIT Bhubaneswar and then I have worked for a couple of years in Brane Enterprises. I am primarily interested in Theory, Algorithms and AI/DL/ML. 
                On the Theory side, I am mostly working on Graph related problems and currently I am exploring lot os aspects of Machine Learning concepts in parallel.  
                </p>
            <p align="LEFT">
            Previously, during my time at Brane Enterprises I have worked mostly on E-Commerce Searches.
            I am interested in the intersection of Search and AI mainly to build effienct Query Intelligence system that semantically understands the human input.
            
            </p>
          <p>
            Apart from Computer Science, I am mainly interested in Cricket and chess. I am glad to meet anyone with a bat or a chess board any day.
          </p>
            </div>
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
        <Loader type="pacman" />
        </div>
    )
}

export default About