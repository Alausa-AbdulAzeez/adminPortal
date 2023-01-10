import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
// import { Link } from 'react-router-dom'
import './topbar.scss'

const Topbar = (props) => {
  return (
    <div className='topbarWrapper'>
      <div className='topbarRight' data-testid='loggedInUser'>
        {props.title}

        {/* <span>
          <Link to='vetclaims'>Vet Claims</Link>
        </span> */}
      </div>

      <FontAwesomeIcon icon={faUser} className='topbarUserIcon' />
    </div>
  )
}

export default Topbar
