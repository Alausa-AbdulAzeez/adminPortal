import {
  faDownload,
  faEye,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import './actions.scss'

const Actions = (props) => {
  console.log(props)
  return (
    <div className='actionsContainer'>
      <Link to='/singlepile'>
        <Tooltip title='View Pile' arrow>
          <button className='reviewBtn'>
            <FontAwesomeIcon icon={faEye} />
          </button>
        </Tooltip>
      </Link>
      <Tooltip title='Approve Pile' arrow>
        <button className='approveBtn'>
          <FontAwesomeIcon icon={faThumbsUp} />
        </button>
      </Tooltip>
      {props.params?.row['Claims Status'] === 'Vetting Complete' && (
        <Tooltip title='Download report' arrow>
          <button className='downloadBtn'>
            <FontAwesomeIcon icon={faDownload} />
          </button>
        </Tooltip>
      )}
    </div>
  )
}

export default Actions
