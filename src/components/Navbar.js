import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from '../components/Button';
import { HashLink as Link} from 'react-router-hash-link';




function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960 ) {
            setButton(false);
        } else {
            setButton(true);
        }
    };


    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/#top' className='navbar-logo' onClick={closeMobileMenu}>
                        Ryan Brooks   
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i class={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/#top' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/#navigate' className='nav-links' onClick={closeMobileMenu}>
                            Portfolio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <a href="https://drive.google.com/file/d/1TAlGp2jwh7mvgQr-BuEPBgXKHJWtC5xq/view?usp=sharing" target='_blank' className='nav-links-mobile' onClick={closeMobileMenu}>
                            View Resume
                        </a>
                    </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>View Resume</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
