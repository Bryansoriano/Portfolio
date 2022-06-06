import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-s.png';
import Loader from 'react-loaders'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'r', 'i', 'a', 'n', 'o']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
    return setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
    }, [])

     
    return (
    <>
            <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <span className={`${letterClass} _15`}>  </span>
                    <span className={`${letterClass} _16`}>B</span>
                    <span className={`${letterClass} _17`}>r</span>
                    <span className={`${letterClass} _18`}>y</span>
                    <span className={`${letterClass} _19`}>a</span>
                    <span className={`${letterClass} _20`}>n</span>

                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}   />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={22} />
             
                </h1>
                <h2>Software developer / CS Masters Student</h2>
                        <Link reloadDocument to="/contact" className='flat-button'>CONTACT ME</Link>             
                    </div>
           <Logo />
        </div>

        <Loader type = "pacman" />
    </>

     );
}

export default Home