import './index.scss'
import LogoS from '../../assets/images/b.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link reloadDocument className="logo" to="/">
                <img src={LogoS} alt="Logo" />       
                <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
            </Link>
            <nav>
                <NavLink reloadDocument exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink reloadDocument activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
        
                <NavLink reloadDocument
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li >
                    <a activeclassname="active" className="linkedin"
                        href="https://www.linkedin.com/in/bryan-soriano1/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li className = "gitHub">
                    <a
                        href="https://github.com/Bryansoriano"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
               
            </ul>
        </div>
    )
}

export default Sidebar
