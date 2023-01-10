import {
  faCancel,
  faCross,
  faDownload,
  faEye,
  faThumbsUp,
  faX,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import './singlePileActions.scss'

const SinglePileActions = (props) => {
  return (
    <div className='actionsContainer'>
      <Link to='/viewclaim'>
        <Tooltip title='View Claim' arrow>
          <button className='reviewBtn'>
            <FontAwesomeIcon icon={faEye} />
          </button>
        </Tooltip>
      </Link>
      <Tooltip title='Approve Claim' arrow>
        <button className='approveBtn'>
          <FontAwesomeIcon icon={faThumbsUp} />
        </button>
      </Tooltip>
      <Tooltip title='Reject Claim' arrow>
        <button className='rejectBtn'>
          <FontAwesomeIcon icon={faX} />
        </button>
      </Tooltip>
    </div>
  )
}

export default SinglePileActions
