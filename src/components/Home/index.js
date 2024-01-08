import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders'
import PersonalPhoto from '../../assets/images/shivahariphoto.png';

const Home = () =>{

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['h','i','v','a',' ','H','a','r','i']
    const jobArray = ['S','o','f','t','w','a','r','e',' ','d','e','v','e','l','o','p','e','r']
    useEffect(()=>{
         setTimeout(()=> {
            setLetterClass('text-animate-hover')
        },4000)
    },[])
    return (
        <>
         <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt = "developer"/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx ={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx ={15}/>
                </h1>
                <h2>Algorithms/ AI/ Systems</h2>
                <Link to = "\contact" className = 'flat-button'>Contact Me</Link>
                <img className= "personal-photo" src={PersonalPhoto} alt='Shiva Hari photo'></img>
                <hr></hr>
                <h2 className="visitor-count">Visitor count</h2>
                <table>
                    <tr>
                        <td className="visitor-p"></td>
                        <td><img src="https://profile-counter.glitch.me/shivaharisonu/count.svg" alt="vistor count" height="50" /></td>
                    </tr>
                </table>
                <p className='visitor-p'>Count was started on 19th Jan 2024.<br />
                Wish me on that day if you remember &#128540; <br/>
                It is somewhat approximate measure of how many times it got visited <br/>
                The error keeps on increasing as you reload &#128529; &#128529;
                </p>

            </div>
            <Logo></Logo>
        </div>
         <div>
            <Loader type="pacman" />
            </div>
        </> 
    )
}

export default Home