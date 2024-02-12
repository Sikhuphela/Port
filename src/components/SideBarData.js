// SideBarData.js
import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  
  {
    title: 'About',
    path: '/about',
    icon: <IoIcons.IoMdPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Skills',
    path: '/skills',
    icon: <IoIcons.IoMdCloseCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',   
    path: '/projects',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Contacts',
    path: '/contacts',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
];