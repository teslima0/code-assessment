import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../src/images/logo.svg'
import settings from './../../src/images/setting-2.svg'
import notification from './../../src/images/notification-bing.svg'
import question from './../../src/images/message-question.svg'
import { FiMenu } from "react-icons/fi";
import { useState } from 'react'


const Nav = () => {
 const [isOpen, setIsOpen]= useState(false)
  return (
    <div>
      <div className='flex justify-between border-b border-[#EFEFEF] px-5 lg:px-20 py-6'>
        <div className='flex w-1/5'>
            <img src={logo} alt='logo'/>
        </div>
        
        <div className=' lg:flex justify-between lg:w-4/5'>
         <nav className='hidden lg:flex lg:w-3/5 xl:w-1/2  justify-between text-[#292929] font-medium '>
          <ul className='flex justify-between w-full'>
            <li><Link to="/" className='focus:bg-[#3D006C] focus:text-white focus:py-3 focus:px-6 rounded-[99px]'>Home</Link></li>
            <li><Link to="/dashboard" className='focus:bg-[#3D006C] focus:text-white focus:py-3 focus:px-6 rounded-[99px]'>Dashboard</Link></li>
            <li><Link to="/products" className='focus:bg-[#3D006C] focus:text-white focus:py-3 focus:px-6 rounded-[99px]'>Products</Link></li>
            <li><Link to="/orders" className='focus:bg-[#3D006C] focus:text-white focus:py-3 focus:px-6 rounded-[99px]'>Orders</Link></li>
            <li><Link to="/finance" className='focus:bg-[#3D006C] focus:text-white focus:py-3 focus:px-6 rounded-[99px]'>Finance</Link></li>
          </ul>
        </nav>
        <div className='flex justify-between lg:w-2/6'>
        <div className='flex justify-between lg:w-1/2'>
        <div className='relative mr-4'>
          <p className='absolute bg-[#CFFE98] rounded-full w-4 h-4 text-[10px] text-center'>23</p>
            <img src={notification} alt='notification'/>
        </div>
        <div className='mr-4'>
            <img src={settings} alt='setting'/>
        </div>
        <div className='mr-4'>
            <img src={question} alt='message-question'/>
        </div>
        </div>
        <div className='hidden lg:flex'>
            <div className='w-6 h-6 rounded-full bg-[#D9ADFF] mr-2'></div>
            <select name="store-name" id="store">
                <option value="bag">Store name</option>
            </select>
        </div>
        </div>
         </div>
         <FiMenu className='lg:hidden' onClick={()=>setIsOpen(!isOpen)}/>
    </div>
    <div className='px-6'>
        {isOpen ? (
          <>
 <div className=' lg:hidden relative bg-white'>
         <nav className=' text-[#292929] font-medium '>
          <ul className=''>
            <li className='mb-4'><Link to="/" className='focus:bg-[#3D006C] focus:text-white mb-3 focus:py-3 focus:px-6 rounded-[99px]'>Home</Link></li>
            <li className='mb-4'><Link to="/dashboard" className='focus:bg-[#3D006C]    focus:text-white focus:py-3 focus:px-6 rounded-[99px]'>Dashboard</Link></li>
            <li className='mb-4'><Link to="/products" className='focus:bg-[#3D006C]  mb-3  focus:text-white focus:py-3 focus:px-6 rounded-[99px]'>Products</Link></li>
            <li className='mb-4'><Link to="/orders" className='focus:bg-[#3D006C]  mb-3  focus:text-white focus:py-3 focus:px-6 rounded-[99px]'>Orders</Link></li>
            <li className='mb-4'><Link to="/finance" className='focus:bg-[#3D006C]  mb-3  focus:text-white focus:py-3 focus:px-6 rounded-[99px]'>Finance</Link></li>
          </ul>
        </nav>
        <div className=''>
        
        <div className='flex'>
            <div className='w-6 h-6 rounded-full bg-[#D9ADFF] mr-2'></div>
            <select name="store-name" id="store">
                <option value="bag">Store name</option>
            </select>
        </div>
        </div>
         </div>
          </>
        ):(
          <></>
        )}
        </div>
    </div>
  )
}

export default Nav