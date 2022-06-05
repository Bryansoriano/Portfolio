import { useEffect, useRef } from 'react'
import LogoS from '../../../assets/images/me.jpg'
import './index.scss'
const Logo = () => {


    return (
        <div className='logo-container'>
            <img className="solid-logo" src={LogoS} alt="Pic of me" /> 
        </div>
        
        )

}

export default Logo