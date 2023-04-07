import './mobileSidebar.css'
import { NavLink } from 'react-router-dom'
// react icons
import { TbReport } from 'react-icons/tb'
import { FaUsers } from 'react-icons/fa'
import  { FiSettings, FiLogOut } from 'react-icons/fi'
import { RiDashboardLine } from 'react-icons/ri'
import { CiCircleRemove } from 'react-icons/ci'
// framer motion
import { motion } from 'framer-motion'
// logout function
import { useLogout } from '../../Hooks/useLogout'

export default function MobileSidebar({ handleClick }) {
    const { logout } = useLogout()
  return (
    <div
     className='mobile-sidebar-container'
     onClick={() => handleClick()}
     >
          <motion.div 
          className='mobile-sidebar-component-container'
          initial={{ x:'-100vw' }}
          animate={{ x:0, transition:{
            duration: 0.5,
            type: 'tween'
          } }}
          >
      <div className='sidebar-component-wrapper'>
        {/* <div className='sidebar-user-information-container'>
            <div className='sidebar-user-photo'>
                <FaUserCircle className='sidebar-user-image-icon'/>
            </div>
            <div className='sidebar-user-details'>
                <span className='sidebar-user-name'>Wisdom woke</span>
                <p className='sidebar-user-email'>wisdomwoke@gmail.com</p>
            </div>
        </div> */}
        <div className='remove-sidebar'>
            <CiCircleRemove
             className='remove-sidebar-icon'
             onClick={() => handleClick()} 
            />
        </div>
        <div className='sidebar-menu-list-container'>
            <div className='sidebar-menu-list-wrapper'>
                <div
                 className='sidebar-menu-list1'
                 onClick={() => handleClick()}
                >
                <li className=''> 
                    <NavLink to='/dashboard' className='link sidebar-list-item'>
                        <RiDashboardLine className='sidebar-icon'/>
                        <span>Dashboard</span>
                    </NavLink> 
                    </li>
                    <li className=''>
                        <NavLink to='/account' className='link sidebar-list-item'>
                        <FaUsers className='sidebar-icon'/>
                        <span>Players Coaching</span>
                        </NavLink> 
                    </li>
                    <li className=''> 
                    <NavLink to='/plans' className='link sidebar-list-item'>
                        <TbReport className='sidebar-icon'/>
                        <span>Players Reports </span>
                    </NavLink>
                    </li>
                    <li className=''> 
                    <NavLink to='/settings' className='link sidebar-list-item'>
                        <FiSettings className='sidebar-icon'/>
                        <span>Settings</span>
                    </NavLink>
                    </li>
                </div>
            </div>
        </div>
        <div className='sidebar-menu-list2-container'>
            <div className='sidebar-menu-list-wrapper'>
                <div
                 className='sidebar-menu-list2'
                 onClick={() => handleClick()}
                >                  
                    <li className='sidebar-list-item logout-button'
                     onClick={() => logout()}
                    > 
                        <FiLogOut className='sidebar-icon'/>
                        <span>LogOut</span>
                    </li>                   
                </div>
            </div>
        </div>
      </div>
    </motion.div>
    </div>
  )
}
