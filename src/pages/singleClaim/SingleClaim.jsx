import './singleClaim.scss'
import Topbar from '../../components/topbar/Topbar'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { maxWidth } from '@mui/system'
import SinglePileActions from '../../components/singlePileActions/SinglePileActions'
import { StripedDataGrid } from '../../components/autoComplete/MUI/StripedDataGrid'

const SingleClaim = () => {
  const rows = [
    {
      id: 10,
      'Treatment Item': 'Malaria',
      'Submitted Qty': 1,
      'Submitted Bill': 9000,
      'Approved Qty': 1,
      'Approved Bill': 9000,
      Comment:
        'Writing objects: 100% (9/9), 2.09 KiB | 536.00 KiB/s, done.Total 9 (delta 4), reused 0 (delta 0), pack-reused 0',

      Actions: 'action',
    },
    {
      id: 11,
      'Treatment Item': 'Malaria Typhoid',
      'Submitted Qty': 1,
      'Submitted Bill': 9000,
      'Approved Qty': 1,
      'Approved Bill': 9000,
      Comment:
        'Writing objects: 100% (9/9), 2.09 KiB | 536.00 KiB/s, done.Total 9 (delta 4), reused 0 (delta 0), pack-reused 0',

      Actions: 'action',
    },
  ]

  const columns = [
    { field: 'Treatment Item', headerName: 'Treatment Item', width: 250 },
    { field: 'Submitted Qty', headerName: 'Submitted Qty', width: 140 },
    { field: 'Submitted Bill', headerName: 'Submitted Bill', width: 140 },
    { field: 'Approved Qty', headerName: 'Approved Qty', width: 140 },
    { field: 'Approved Bill', headerName: 'Approved Bill', width: 140 },
    {
      field: 'Comment',
      headerName: 'Comment',
      width: 300,
    },
    {
      field: 'Actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <SinglePileActions params={params} pageType='singleClaim' />
          </>
        )
      },
    },
  ]
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

            <Typography sx={{ margin: 'auto', fontWeight: 'bold' }}>
              <small>Total Approved Amount:</small> 18,000
            </Typography>
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
        <Box
          sx={{
            height: 400,
            width: '100%',

            '& .Pending': {
              color: 'rgb(153, 3, 3)',
              fontWeight: 'bold',
            },
            '& .Ongoing': {
              color: 'rgb(153, 146, 3)',
              fontWeight: 'bold',
            },
            '& .Complete': {
              color: 'rgb(4, 128, 54)',
              fontWeight: 'bold',
            },
          }}
        >
          <StripedDataGrid
            rows={rows}
            columns={columns}
            getCellClassName={(params) => {
              if (
                params.field === 'Claims Status' &&
                params.value === 'Vetting Pending'
              ) {
                return 'Pending'
              }

              if (
                params.field === 'Claims Status' &&
                params.value === 'Vetting Complete'
              ) {
                return 'Complete'
              }
            }}
            getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
            }
          />
        </Box>
      </div>
    </div>
  )
}

export default SingleClaim
