import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faA, faS } from '@fortawesome/free-solid-svg-icons';
import { IconContext } from 'react-icons';
import { FaBars, FaGithub, FaDiscord, FaLinkedin } from 'react-icons/fa';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#00ABB3' }}>
                <div className="navbar">
                    <Link to="#" className='menu-bars' onClick={showSidebar}>
                        <FaBars />
                    </Link>
                    <div className="social-icons">
                        <a href="https://github.com/Sikhuphela?tab=repositories" className="social-icon"><FaGithub /></a>
                        <a href="https://discord.com/channels/@me" className="social-icon"><FaDiscord /></a>
                        <a href="https://linkedin.com/in/aphiwe-sikhuphela-a80b74284" className="social-icon"><FaLinkedin /></a>
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars' onClick={showSidebar} >
                            <FontAwesomeIcon icon={faA} style={{ color: '#00ABB3' }} />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='color'></div>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
