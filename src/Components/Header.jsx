import React, { useState } from 'react'
import profilePic from '../assets/profile1.jpeg'
import icon from '../assets/icon.png'
import { EllipsisVertical } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useActiveItem } from '../context/ActiveItemContext.jsx';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const navigate=useNavigate()
  const { activeItem } = useActiveItem();
  

  return (
    <>
    {/*  desktop */}
     <nav className='hidden bg-black md:block w-full h-[50px] border-b-1 border-primary-300 fixed top-0 left-0 z-10'>
       <div className='flex  justify-between h-full px-3'>
        {/* left */}
        <div className=' flex w-[188px] space-x-4 items-center border-r-1 border-primary-300'>
          <div className='w-[30px] h-[30px] rounded-full object-cover bg-gray-300 '>

          </div>
          <h1>
            Vertxlabs.lnc
          </h1>
            
        </div>
        {/* middel */}
        <div className='flex flex-1 items-center'>
        <h1 className="text-white ps-6">{activeItem}</h1> 
        </div>
        {/* right */}
        <div className='flex  justify-between px-5 w-[200px] border-l-1 border-primary-300'> 
           <div className='flex h-full items-center text-white hover:text-gray-400' >
               <button  className='flex h-full items-center cursor-pointer text-white hover:text-gray-400'>Activity</button>
           </div>
           <div className='flex h-full items-center border-l-1 ps-4 border-primary-300 '>
                <button className='flex h-full items-center cursor-pointer text-white hover:text-gray-400' >Log out</button>
           </div>
        </div>

        </div> 
     </nav>
      {/* mobile */}
      <nav className='md:hidden bg-black fixed top-0 left-0 right-0 border-t border-primary-300 h-[60px] z-10 '>
        <div className='flex justify-between items-center h-full px-3 py-2'>
           {/* left */}
           <div className='w-[15%]'>
              <img onClick={()=>navigate('/profile')} className='w-10 h-10 rounded-full object-cover ' src={profilePic} alt="no" />
           </div>
           {/* middel */}
           <div className='flex justify-center flex-1'>
            <img 
              className='h-10 object-contain' 
              onClick={()=>navigate("/analytic")}
              src={icon} 
              alt="Logo" 
            />
          </div>
           {/* right */}
           <div className='flex w-[10%] justify-ceter '>
           <button 
              onClick={toggleMenu}
              className='text-white hover:text-primary-200 focus:outline-none'
              aria-label="Toggle menu"
            >
              <EllipsisVertical size={24} />
            </button>
           </div>
        </div>
      </nav>
      {/* Mobile Menu - Toggleable */}
      {isMenuOpen && (
        <div className='md:hidden h-full fixed top-[60px] right-0 w-[200px] z-100 bg-[rgb(2,2,2)]  shadow-lg'>
          <div className='p-4 flex flex-col justify-center space-y-3'>
            <button className='block w-full bg-transparent   text-zinc-500 hover:text-white hover:bg-primary-400 p-2 rounded'>
              Activity
            </button>
            <button className='block w-full bg-transparent  text-zinc-500 hover:text-white hover:bg-primary-400 p-2 rounded'>
              Log out
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Header