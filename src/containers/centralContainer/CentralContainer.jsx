import React from 'react'
import './central-container.css'
import PadContainer from '../padContainer/PadContainer';

export const CentralContainer = (props) => {
  console.log('Central Container reçoit props: ', props)
  return (
    <>
    <div className="central-sub-container">
      <div className="screen-container">
        Screen Container
      </div>
      <div className="function-container">
        Fonction Container
      </div>
      <div className="pad-container">
        <PadContainer />
      </div>
      <div className="margin-container">
        Margin Container
      </div>
    </div>
    </>
  )
}