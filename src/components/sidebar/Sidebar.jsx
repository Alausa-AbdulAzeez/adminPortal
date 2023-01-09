import lifeworthLogo from '../../utils/images/lifeworth-mini-logo.png'
import React from 'react'
import './sidebar.scss'
import { sidebarData } from '../../utils/dataArrays/sidebarData'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className='sidebarWrapper'>
      <div className='sidebarTop'>
        <img src={lifeworthLogo} alt='logo' className='hospitalIcon' />
        <div className='hospitalTextIcon'>LifeworthHMO</div>
      </div>
      <div className='sidebarItemsWrapper'>
        <div className='sidebarItems'>
          <div className='sidebarItemWrapper'>
            {sidebarData.map((singleData, index) => {
              return (
                <div className='sidebarItemWrapper' key={index}>
                  <NavLink
                    to={singleData.link}
                    end={true}
                    style={({ isActive }) =>
                      isActive
                        ? {
                            backgroundColor: 'rgba(240, 248, 255, 0.562)',
                            color: 'rgb(1, 42, 68)',
                          }
                        : undefined
                    }
                    className='sidebarItem'
                  >
                    {singleData.icon}
                    <p className='sidebarItemTitle'>{singleData.title}</p>
                  </NavLink>
                </div>
              )
            })}
          </div>
          <div className='sidebarLogout'>
            {<FontAwesomeIcon icon={faArrowRightFromBracket} />}
            <p className='logoutText'>Logout</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
