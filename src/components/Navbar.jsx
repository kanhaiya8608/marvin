import React from 'react'
import LinkGrid from './LinkGrid';
import { MdOutlineArrowDropDown } from "react-icons/md";
function Navbar() {
  const links = [
    { text: 'Home page', url: '#' },
    { text: 'About us', url: '#' },
    { text: 'Generator', url: '#' },
    { text: 'Features', url: '#' },
    { text: 'Pricing-plan', url: '#' },
    { text: 'Collection-2023', url: '#' },
    { text: 'Blog-News', url: '#' },
    { text: 'Career', url: '#' },
    
  ];

  return (
    <div className='nav'>
        <h1 className='logo'>AIPatrn</h1>
<div>
<LinkGrid links={links} />
  </div>

<button className='menu_btn'>Menu <MdOutlineArrowDropDown /></button>

    </div>
  )
}

export default Navbar