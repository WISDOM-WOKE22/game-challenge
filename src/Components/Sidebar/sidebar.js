import { NavLink } from 'react-router-dom'
// style sheet
import './sidebar.css'
// react icons
import { TbReport } from 'react-icons/tb'
import { FaUsers } from 'react-icons/fa'
import  { FiSettings, FiLogOut } from 'react-icons/fi'
import { RiDashboardLine } from 'react-icons/ri'
// Logo photo
// import logo from '../../assets/images/logo.png'
import { useLogout } from '../../Hooks/useLogout'

export default function Sidebar() {

    const { logout } = useLogout()
    
  return (
    <div className='sidebar-component-container'>
      <div className='sidebar-component-wrapper'>
        <div className='logo-container sidebar-logo-container'>
                <div className='logo-image-container'>
                    {/* <img src={logo} alt='alt'/> */}
                </div>
            </div>
        <div className='sidebar-menu-list-container'>
            <div className='sidebar-menu-list-wrapper'>
                <div className='sidebar-menu-list1'>
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
                <div className='sidebar-menu-list2'>                  
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
    </div>
  )
}
