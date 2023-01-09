import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './topbar.scss'

const Topbar = () => {
  return (
    <div className='topbarWrapper'>
      <div className='' data-testid='loggedInUser'>
        Welcome Sophie
      </div>

      <FontAwesomeIcon icon={faUser} className='topbarUserIcon' />
    </div>
  )
}

export default Topbar
