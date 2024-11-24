import React, { useState } from 'react'

const Navbar = () => {

    const [isPopupLinksVisible, setIsPopupLinksVisible] = useState(false)
    const handleNavLinks = () => {
        setIsPopupLinksVisible(!isPopupLinksVisible)
    }

    return (
        <div className="">
            <div className="absolute top-0 left-0 w-full flex justify-between items-center pt-10 px-5 z-20 bg-transparent">
                <img src="/images/logo.svg" alt="logo-image"/>

                <img src="/images/icon-hamburger.svg" alt="menu-image" onClick={handleNavLinks}/>
                    
            </div>

            <div className={`w-full flex justify-center items-center ${isPopupLinksVisible ? '' : 'hidden'}`}>
                <div className="nav-links absolute z-10 w-[90%] bg-white h-[300px] flex flex-col justify-center items-center gap-10 font-barlow font-bold text-grayish-blue top-32">
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Projects</a>
                    <a href="">Contact</a>

                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;