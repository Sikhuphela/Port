import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '00ABB3' }}>
                <div className="navbar">
                    <Link to="#" className='menu-bars' onClick={showSidebar}>
                        <FaIcons.FaBars />
                    </Link>
                    <div className="social-icons">
                        <a href="https://github.com/Sikhuphela?tab=repositories" className="social-icon"><FaIcons.FaGithub /></a>
                        <a href="https://discord.com/channels/@me" className="social-icon"><FaIcons.FaDiscord /></a>
                        <a href="https://linkedin.com/in/aphiwe-sikhuphela-a80b74284" className="social-icon"><FaIcons.FaLinkedin /></a>
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars' onClick={showSidebar}>
                                <AiIcons.AiOutlineClose />
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