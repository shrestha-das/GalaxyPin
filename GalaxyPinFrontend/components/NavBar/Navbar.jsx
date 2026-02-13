import React from 'react'

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
