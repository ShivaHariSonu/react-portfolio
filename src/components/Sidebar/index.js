import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () =>(
    <div className="nav-bar">
        <Link className="logo" to={'/'}>
            <img src={LogoS} alt='logo'/>
            <img className = "sub-logo" src={LogoSubtitle} alt='slobodan'/>
        </Link>
        <nav>
            <NavLink exact = 'true' activeclassname = 'active' to="/react-portfolio/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'></FontAwesomeIcon>
                
            </NavLink>
            <NavLink exact = 'true' activeclassname = 'about-link' to="/react-portfolio/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'></FontAwesomeIcon>
                
            </NavLink>
            <NavLink exact = 'true' activeclassname = 'contact-link' to="/react-portfolio/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'></FontAwesomeIcon>
                
            </NavLink>

        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/gundetishivahari/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/ShivaHariSonu'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>

)

export default Sidebar