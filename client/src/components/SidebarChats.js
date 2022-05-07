import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebarchats.css'

function SidebarChats() {
  return (
    <div className='sidebarChats'>
        <Avatar src='https://image.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg'/>
        <div className='sidebarChat_info'>
            <h2>Username</h2>
            <p>This is the last message sent</p>
        </div>
    </div>
  )
}

export default SidebarChats