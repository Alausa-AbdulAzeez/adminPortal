import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import Topbar from '../../components/topbar/Topbar'
import './singlePile.scss'
import NonAsyncSelect from '../../components/autoComplete/NonAsyncAutoComplete'
import { StripedDataGrid } from '../../components/autoComplete/MUI/StripedDataGrid'
import SinglePileActions from '../../components/singlePileActions/SinglePileActions'

const SinglePile = () => {
  const rows = [
    {
      id: 8,
      Name: 'Alausa Abdulazeez',
      Month: 'World',
      'Claim type': 'NHIS',
      'Claims count': 3,
      'Provider Bill': 300000,
      'Approved Bill': 280000,
      'Date Submitted': new Date(),
      'Claims Status': 'Vetting Pending',
      Actions: 'action',
    },

    {
      id: 5,
      Name: 'Sophie Obi',
      Month: 'World',
      'Claim type': 'Private',
      'Claims count': 3,
      'Provider Bill': 300000,
      'Approved Bill': 280000,
      'Date Submitted': new Date(),
      'Claims Status': 'Vetting Pending',
      Actions: 'action',
    },

    {
      id: 6,
      Name: 'Opeyemi Adekola',
      Month: 'World',
      'Claim type': 'NHIS',
      'Claims count': 1,
      'Provider Bill': 100000,
      'Approved Bill': 80000,
      'Date Submitted': new Date(),
      'Claims Status': 'Vetting Complete',
      Actions: 'action',
    },
    {
      id: 3,
      Name: 'Stella Akpan',
      Month: 'World',
      'Claim type': 'NYSC',
      'Claims count': 1,
      'Provider Bill': 100000,
      'Approved Bill': 80000,
      'Date Submitted': new Date(),
      'Claims Status': 'Vetting Complete',
      Actions: 'action',
    },

    {
      id: 7,
      Name: 'Abisola',
      Month: 'World',
      'Claim type': 'NHIS',
      'Claims count': 5,
      'Provider Bill': 500000,
      'Approved Bill': 480000,
      'Date Submitted': new Date(),
      'Claims Status': 'Vetting Pending',
      Actions: 'action',
    },
    {
      id: 4,
      Name: 'Vera',
      Month: 'World',
      'Claim type': 'Private',
      'Claims count': 5,
      'Provider Bill': 500000,
      'Approved Bill': 480000,
      'Date Submitted': new Date(),
      'Claims Status': 'Vetting Pending',
      Actions: 'action',
    },

    {
      id: 2,
      Name: 'Hello',
      Month: 'World',
      'Claim type': 'NYSC',
      'Claims count': 3,
      'Provider Bill': 300000,
      'Approved Bill': 280000,
      'Date Submitted': new Date(),
      'Claims Status': 'Vetting Complete',
      Actions: 'action',
    },
    {
      id: 1,
      Name: 'Hello',
      Month: 'World',
      'Claim type': 'Private',
      'Claims count': 5,
      'Provider Bill': 500000,
      'Approved Bill': 480000,
      'Date Submitted': new Date(),
      'Claims Status': 'Vetting Pending',
      Actions: 'action',
    },
    {
      id: 10,
      Name: 'Hello',
      Month: 'World',
      'Claim type': 'Private',
      'Claims count': 1,
      'Provider Bill': 100000,
      'Approved Bill': 80000,
      'Date Submitted': new Date(),
      'Claims Status': 'Vetting Complete',
      Actions: 'action',
    },
  ]

  const columns = [
    { field: 'Name', headerName: 'Name', width: 200 },
    { field: 'Insurance No', headerName: 'Insurance No', width: 140 },
    { field: 'Claim type', headerName: 'Claim type', width: 100 },
    { field: 'Provider Bill', headerName: 'Provider Bill', width: 130 },
    { field: 'Approved Bill', headerName: 'Approved Bill', width: 130 },
    { field: 'Date Submitted', headerName: 'Date Submitted', width: 150 },
    { field: 'Encounter Date', headerName: 'Encounter Date', width: 150 },
    {
      field: 'Claims Status',
      headerName: 'Claims Status',
      width: 170,
      // renderCell: (params) => {
      //   return (
      //     <>
      //       <Status params={params} />
      //     </>
      //   )
      // },
    },
    {
      field: 'Actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <SinglePileActions params={params} />
          </>
        )
      },
    },
  ]

  return (
    <div className='singlePileMain'>
      <Topbar title='Claims for: Topaz Clinic and Maternity hospital' />
      <div className='singlePileContentWrapper'>
        <Accordion sx={{ width: 300, marginBottom: 5 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>Filter Claims</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className='filterWrapper'>
              <NonAsyncSelect title='Filter by status' />
            </div>
          </AccordionDetails>
        </Accordion>

        <Box
          sx={{
            height: 420,
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

export default SinglePile
