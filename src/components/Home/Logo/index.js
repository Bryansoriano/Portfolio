import { useEffect, useRef } from 'react'
import LogoS from '../../../assets/images/b.png'
import './index.scss'
const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

  

    return (



        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" />
      
        </div>
        
        )

}

export default Logo