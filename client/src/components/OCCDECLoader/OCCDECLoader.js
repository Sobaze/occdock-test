import React from 'react'
import './OCCDECLoader.scss'
import Logo from '../../assets/img/OCCDEC-logo.png'

const OCCDECLoader = () => {
    return (
        <div className="OCCDECLoader">
            <img  className="OCCDECLoader__content--logo" src={Logo} alt="occdec logotype" />
            <div className="OCCDECLoader__content--dots">
                <div className="OCCDECLoader__content--dot dot-1" ></div>    
                <div className="OCCDECLoader__content--dot dot-2" ></div>    
                <div className="OCCDECLoader__content--dot dot-3" ></div>    
            </div> 
        </div>
    )
}

export default OCCDECLoader
