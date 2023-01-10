import React, { useState } from 'react'
import Card from '../../components/card/Card'
import Topbar from '../../components/topbar/Topbar'
import './homepage.scss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Homepage = () => {
  const [dateRange, setDateRange] = useState([
    new Date('2022/02/08'),
    new Date(
      `${new Date().getFullYear()}/${
        new Date().getMonth() + 1
      }/${new Date().getUTCDate()}`
    ),
  ])
  const [startDate, endDate] = dateRange

  const cardsTopData = [
    {
      className: 'card1',
      cardProperties: {
        bigText: '12190',
        smallText: 'Principal Enrolees',
        location: 'top',
        color: 'rgb(138, 41, 143)',
        colorOpacity: 'rgba(138, 41, 143, 0.437)',
      },
    },
    {
      className: 'card2',
      cardProperties: {
        bigText: '1219',
        smallText: 'Dependants',
        location: 'top',
        color: 'rgb(143, 41, 41)',
        colorOpacity: 'rgba(143, 41, 41, 0.457)',
      },
    },
    {
      className: 'card3',
      cardProperties: {
        bigText: '219',
        smallText: 'No of Providers',
        location: 'top',
        color: 'rgb(41, 104, 143)',
        colorOpacity: 'rgba(41, 104, 143, 0.523)',
      },
    },
    {
      className: 'card4',
      cardProperties: {
        bigText: '300',
        smallText: 'Active Providers',
        location: 'bottom',
        color: 'rgb(223, 16, 154)',
        colorOpacity: ' rgba(223, 16, 154, 0.479)',
      },
    },
    {
      className: 'card5',
      cardProperties: {
        bigText: '12',
        smallText: 'Claims Vetted',
        location: 'bottom',
        color: ' rgb(64, 16, 223)',
        colorOpacity: ' rgba(64, 16, 223, 0.441)',
      },
    },
    {
      className: 'card6',
      cardProperties: {
        bigText: '15',
        smallText: 'Claims Received',
        location: 'bottom',
        color: 'rgb(223, 89, 16)',
        colorOpacity: 'rgba(223, 89, 16, 0.413)',
      },
    },
    {
      className: 'card7',
      cardProperties: {
        bigText: 'N121,900',
        smallText: 'Total Amount Billed',
        location: 'bottom',
        color: 'rgb(65, 143, 41)',
        colorOpacity: 'rgba(65, 143, 41, 0.44)',
      },
    },
  ]

  return (
    <div className='main'>
      <Topbar title='Welcome Sophie' />
      <div className='homeMainContentWrapper'>
        <div className='cardsTopContainer'>
          {cardsTopData.map((singleCard, index) => {
            if (singleCard.cardProperties.location === 'top') {
              return (
                <Card
                  className={singleCard.className}
                  cardProperties={singleCard.cardProperties}
                  key={index}
                />
              )
            } else {
              return null
            }
          })}
        </div>
        <div className='cardsBottomContainer'>
          <div className='datePickerWrapper'>
            <p className='selectRange'>Select Date Range</p>
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update)
              }}
              withPortal
              className='datePicker'
            />
          </div>
          <div className='bottomCardsWrapper'>
            {cardsTopData.map((singleCard, index) => {
              if (singleCard.cardProperties.location === 'bottom') {
                return (
                  <Card
                    className={singleCard.className}
                    cardProperties={singleCard.cardProperties}
                    key={index}
                  />
                  // <div key={index}>
                  // </div>
                )
              } else {
                return null
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
