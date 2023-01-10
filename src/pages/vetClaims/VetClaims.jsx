import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import Box from '@mui/material/Box'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import Asynchronous from '../../components/autoComplete/AsyncAutoComplete'
import NonAsyncSelect from '../../components/autoComplete/NonAsyncAutoComplete'
import Topbar from '../../components/topbar/Topbar'
import './vetClaims.scss'
import Status from '../../components/actions/Actions'
import { StripedDataGrid } from '../../components/autoComplete/MUI/StripedDataGrid'

const VetClaims = () => {
  const [startDate, setStartDate] = useState(new Date())

  const rows = [
    {
      id: 8,
      Provider: 'Hello',
      Month: 'World',
      'Claims count': 3,
      'Provider Bill': 300000,
      'Approved Bill': 280000,
      'Date Submitted': new Date(),
      'Claims Status': 'Vetting Ongoing',
      Actions: 'action',
    },
    {
      id: 7,
      Provider: 'Hello',
      Month: 'World',
      'Claims count': 5,
      'Provider Bill': 500000,
      'Approved Bill': 480000,
      'Date Submitted': new Date(),
      'Claims Status': 'Vetting Pending',
      Actions: 'action',
    },
    {
      id: 6,
      Provider: 'Hello',
      Month: 'World',
      'Claims count': 1,
      'Provider Bill': 100000,
      'Approved Bill': 80000,
      'Date Submitted': new Date(),
      'Claims Status': 'Vetting Complete',
      Actions: 'action',
    },
    {
      id: 5,
      Provider: 'Hello',
      Month: 'World',
      'Claims count': 3,
      'Provider Bill': 300000,
      'Approved Bill': 280000,
      'Date Submitted': new Date(),
      'Claims Status': 'Vetting Ongoing',
      Actions: 'action',
    },
    {
      id: 4,
      Provider: 'Hello',
      Month: 'World',
      'Claims count': 5,
      'Provider Bill': 500000,
      'Approved Bill': 480000,
      'Date Submitted': new Date(),
      'Claims Status': 'Vetting Pending',
      Actions: 'action',
    },
    {
      id: 3,
      Provider: 'Hello',
      Month: 'World',
      'Claims count': 1,
      'Provider Bill': 100000,
      'Approved Bill': 80000,
      'Date Submitted': new Date(),
      'Claims Status': 'Vetting Complete',
      Actions: 'action',
    },
    {
      id: 2,
      Provider: 'Hello',
      Month: 'World',
      'Claims count': 3,
      'Provider Bill': 300000,
      'Approved Bill': 280000,
      'Date Submitted': new Date(),
      'Claims Status': 'Vetting Ongoing',
      Actions: 'action',
    },
    {
      id: 1,
      Provider: 'Hello',
      Month: 'World',
      'Claims count': 5,
      'Provider Bill': 500000,
      'Approved Bill': 480000,
      'Date Submitted': new Date(),
      'Claims Status': 'Vetting Pending',
      Actions: 'action',
    },
    {
      id: 10,
      Provider: 'Hello',
      Month: 'World',
      'Claims count': 1,
      'Provider Bill': 100000,
      'Approved Bill': 80000,
      'Date Submitted': new Date(),
      'Claims Status': 'Vetting Complete',
      Actions: 'action',
    },
  ]

  const columns = [
    { field: 'Provider', headerName: 'Provider', width: 200 },
    { field: 'Month', headerName: 'Month', width: 110 },
    { field: 'Claims count', headerName: 'Claims count', width: 140 },
    { field: 'Provider Bill', headerName: 'Provider Bill', width: 130 },
    { field: 'Approved Bill', headerName: 'Approved Bill', width: 130 },
    { field: 'Date Submitted', headerName: 'Date Submitted', width: 150 },
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
            <Status params={params} />
          </>
        )
      },
    },
  ]

  return (
    <div className='vetClaimsMain'>
      <Topbar title='Submitted Piles' />
      <div className='vetClaimsContentWrapper'>
        <Accordion sx={{ width: 900, marginBottom: 5 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>Filter Piles</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className='filterWrapper'>
              <NonAsyncSelect title='Filter by status' />
              <NonAsyncSelect title='Filter by claim type' />
              <Asynchronous />
              <div className='yearPickerWrapper'>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showYearDropdown
                  dateFormatCalendar='MMMM'
                  yearDropdownItemNumber={15}
                  scrollableYearDropdown
                  className='yearPicker'
                />
              </div>
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
                params.value === 'Vetting Ongoing'
              ) {
                return 'Ongoing'
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

export default VetClaims
