import {
  faDownload,
  faEye,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from '@mui/material'
import './actions.scss'

const Actions = (props) => {
  console.log(props)
  return (
    <div className='actionsContainer'>
      <Tooltip title='View Pile' arrow>
        <button className='reviewBtn'>
          <FontAwesomeIcon icon={faEye} />
        </button>
      </Tooltip>
      <button className='approveBtn'>
        <Tooltip title='Approve Pile' arrow>
          <FontAwesomeIcon icon={faThumbsUp} />
        </Tooltip>
      </button>
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
