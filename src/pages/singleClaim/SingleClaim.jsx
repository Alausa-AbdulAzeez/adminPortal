import './singleClaim.scss'
import Topbar from '../../components/topbar/Topbar'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { maxWidth } from '@mui/system'

const SingleClaim = () => {
  return (
    <div className='singleClaimMain'>
      <Topbar title='Claim Info' />
      <div className='singleClaimContentWrapper'>
        <div className='claimActionsWrapper'>
          <div className='claimActionLeft'>
            <button className='claimActionBtn previousBtn'>Previous</button>
            <button className='claimActionBtn nextBtn'>Next</button>
          </div>
          <div className='claimActionCenter'>Claim: 1 of 1 in pile</div>
          <div className='claimActionRight'>
            <button className='claimActionBtn approveClaimBtn'>Approve</button>
            <button className='claimActionBtn rejectBtn'>Reject</button>
          </div>
        </div>
        <Accordion sx={{ width: maxWidth, marginBottom: 5 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>Claim Properties</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className='claimPropertiesWrapper'>
              <div className='claimPropertiesLeft claimProperties'>
                <ul>
                  <li>
                    Name: <span>Alausa</span>
                  </li>
                  <li>
                    Encounter Date:
                    <span>{Date().toString().slice(0, 16)}</span>
                  </li>
                </ul>
              </div>
              <div className='claimPropertiesCenter claimProperties'>
                <ul>
                  <li>
                    Diagnosis: <span>Malaria</span>
                  </li>
                  <li>
                    Probider:{' '}
                    <span>
                      Topaz Clinic Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit.
                    </span>
                  </li>
                </ul>
              </div>
              <div className='claimPropertiesRight claimProperties'>
                <ul>
                  <li>
                    Billed: <span>N100,000</span>
                  </li>
                  <li>
                    Payable:<span>N100,000</span>
                  </li>
                  <li>
                    Status: <span>Pending</span>
                  </li>
                </ul>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default SingleClaim
