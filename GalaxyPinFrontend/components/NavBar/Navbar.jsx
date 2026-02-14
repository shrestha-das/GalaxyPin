import React, {useState, useEffect} from 'react';
import Image from "next/image";
import Link from "next/link";

// import icon
import {MdNotification} from "react-icons/md";
import {BsSearch} from "react-icons/bs";
import {CgMenuLeft, CgMenuRight} from "react-icons/cg";
// internal import
import Style from "./Navbar.module.css";

// import other components
import Profile from './Profile/Profile'
import Notification from './Notification/Notification'
import Discover from './Discover/Discover'
import Sidebar from './Sidebar/Sidebar'

const Navbar = () => {
  return (
    <div>
      <Profile />
      <Notification />
      <Discover />
      <Notification />
      <Sidebar />
    </div>
  )
}

export default Navbar
