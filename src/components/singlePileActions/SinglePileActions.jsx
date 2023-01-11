import {
  faEye,
  faPenFancy,
  faThumbsUp,
  faX,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ConfirmationDialogRaw from '../confirmationDialogue/ConfirmationDialogRaw'
import './singlePileActions.scss'

const SinglePileActions = (props) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('Dione')

  const handleClickListItem = () => {
    setOpen(true)
  }

  const handleClose = (newValue) => {
    setOpen(false)

    if (newValue) {
      setValue(newValue)
    }
  }

  return (
    <div className='actionsContainer'>
      {props.pageType === 'singlePile' && (
        <>
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
        </>
      )}
      {props.pageType === 'singleClaim' && (
        <Tooltip title='Update Claim' arrow>
          <button className='approveBtn' onClick={handleClickListItem}>
            <FontAwesomeIcon icon={faPenFancy} />
          </button>
        </Tooltip>
      )}
      <Tooltip title='Reject Claim' arrow>
        <button className='rejectBtn'>
          <FontAwesomeIcon icon={faX} />
        </button>
      </Tooltip>
      <ConfirmationDialogRaw
        id='ringtone-menu'
        keepMounted
        open={open}
        onClose={handleClose}
        value={value}
      />
    </div>
  )
}

export default SinglePileActions
