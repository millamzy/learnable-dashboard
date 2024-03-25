import React from 'react'

import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { Link } from 'react-router-dom'


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
    <div className='sidebar-title'>
        <div className='sidebar-brand'>
             learnable
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
    </div>

    <ul className='sidebar-list'>
        <Link to='/'>
            <li className='sidebar-list-item'>
                <BsGrid1X2Fill className='icon'/> Dashboard
            </li>
        </Link>
        <Link to='products'>
            <li className='sidebar-list-item'>
                <BsFillArchiveFill className='icon'/> Products Design
            </li>
        </Link>
        <Link to = 'frontend'>
            <li className='sidebar-list-item'>
                <BsFillGrid3X3GapFill className='icon'/> Frontend
            </li>
        </Link>
       <Link to= 'backend'>
            <li className='sidebar-list-item'>
                <BsPeopleFill className='icon'/> Backend
            </li>
       </Link>
        <Link to = 'web3'>
            <li className='sidebar-list-item'>
                <BsListCheck className='icon'/> Web3
            </li>
        </Link>
    </ul>
</aside>
  )
}

export default Sidebar