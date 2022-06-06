import { useEffect, useRef } from 'react'
import { Breakpoint } from 'react-socks'
import LogoS from '../../../assets/images/me.jpg'
import './index.scss'
const Logo = () => {


    return (
        <Breakpoint xlarge up>
        <div className='logo-container'>
            <img className="solid-logo" src={LogoS} alt="Pic of me" /> 
        </div>
        </Breakpoint>
        )

}

export default Logo