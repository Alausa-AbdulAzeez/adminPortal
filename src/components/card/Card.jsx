import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import './card.scss'

const Card = (props) => {
  useEffect(() => {
    console.log(props.className)
  }, [props.className])

  return (
    props.className && (
      <div className={`cardContainer ${props.className}`}>
        <div className='cardIconWrapper'>
          <FontAwesomeIcon
            icon={faMoneyBill}
            className={`cardIcon`}
            style={{ color: props.cardProperties.color }}
          />
        </div>
        <div className='cardTextsWrapper'>
          <h2 className='cardBigText'>{props.cardProperties?.bigText}</h2>
          <div
            className='cardSmallText'
            style={{ color: props.cardProperties.colorOpacity }}
          >
            {props.cardProperties?.smallText}
          </div>
        </div>
      </div>
    )
  )
}

export default Card
