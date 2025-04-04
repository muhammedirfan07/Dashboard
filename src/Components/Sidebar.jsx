import React  from 'react'
import { useLocation } from 'react-router-dom'
import {
    LayoutDashboard,
    BarChart,
    Earth,
    Loader,
    Plus,
    Bell

} from 'lucide-react'
import profilePic from '../assets/profile1.jpeg'
import { useNavigate } from 'react-router'
import { useActiveItem } from '../context/ActiveItemContext.jsx';


const Sidebar = () => {
    const location = useLocation()
    const navigate=useNavigate()
    const { setActiveItem } = useActiveItem();

    // Navigation items
    const listItems = [
        { name: 'Dashboard', icon: <LayoutDashboard className='md:hidden' size={20} />, path: '/', showOnMobile: true, showOnDesktop: true },
        { name: 'Analytics', icon: <BarChart className='md:hidden' size={20} />, path: '/analytic', showOnMobile: true, showOnDesktop: true },
        { name: 'Connect', icon: <Earth className='md:hidden' size={20} />, path: '#', showOnMobile: true, showOnDesktop: true },
        { name: 'Activity', icon: <Bell size={20} />, path: '#', showOnMobile: true, showOnDesktop: false }, 
        { name: 'Dealroom', icon: <Loader className='md:hidden' size={20} />, path: '#', showOnMobile: true, showOnDesktop: true },
        { name: 'Profile', icon: null, path: '/profile', showOnMobile: false, showOnDesktop: true },
        { name: 'Settings', icon: null, path: '#', showOnMobile: false, showOnDesktop: true }
    ]

    const mobileItems = listItems.filter(item => item.showOnMobile)
    const desktopItems = listItems.filter(item => item.showOnDesktop)
    const isActive = (path) => { 
        return location.pathname === path;
      };
      const handleItemClick = (item) => {
        setActiveItem(item.name);  
        navigate(item.path);
    };

    return (
        <>
            {/* Desktop Sidebar */}
            <div className=' hidden overflow-hidden md:flex flex-row fixed top-[50px] bottom-0 left-0 w-[200px] border-r border-primary-300 '>
                {/* Main Sections */}
                <div className='  relative flex flex-col justify-between h-full border-r border-primary-300  '>
                    <div className='relative flex-col justfy-between   p-2 border-b border-primary-300'>
                        <img onClick={()=>navigate("/profile")} className='w-[30px] h-[30px] rounded-full object-cover cursor-pointer' src={profilePic} alt="no" />
                        <span className=" float-end mt-[-5px]  relative flex size-2">
                            <span className="absolute  inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
                        </span>
                    </div>
                    <div className='px-2 py-3 border-t border-primary-300'>
                        <Plus />
                    </div>
                </div>
                <div className='py-3 flex-1 p-2 space-y-2'>
                    {desktopItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleItemClick(item)}
                            className={`flex text-md items-center py-2 cursor-pointer rounded-lg transition-colors ${
                                isActive(item.path) ? 'text-white' : 'text-zinc-700 hover:text-white'
                              }`}
                        >
                            <span className='mr-3'>{item.icon}</span>
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Mobile Bottom Navigation */}
            <div className='md:hidden  bg-black fixed bottom-0 left-0 right-0 border-t border-primary-300 h-[60px] z-10 '>
                <div className='flex h-full justify-around items-center'>
                    {mobileItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.path}
                            className={`flex flex-col items-center justify-center  p-2 text-xs ${
                                isActive(item.path) ? 'text-white' : 'text-zinc-500'
                            }`}
                        >
                            <span className='mb-1'>{item.icon}</span>
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Sidebar