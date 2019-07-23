import React, { useState } from 'react'
import './dev-standard-button.css'
import { LigthBar } from './LigthBar'

export const DevStandardButton = ({marking, subMarking}) => {

  const [isEnabled, setIsEnabled] = useState(true)

  const getLigthBarComponent = () => <LigthBar isEnabled={isEnabled} />

  const handleClick = () => setIsEnabled(!isEnabled)

  const getMarking = () => marking || ''

  const getSubMarking = () => subMarking || ''



  return (
    <>
    <div className='scratch-container'>
      <div
        className='dev-standard-button'
        onClick={handleClick}
      >
        <div className="yami">
          {getLigthBarComponent()}
        </div>
        <div className="test">
          <h3 className="marking">
            {getMarking()}
          </h3>
        </div>

      </div>
      <h3 className="sub-marking">
        {getSubMarking()}
      </h3>
    </div>
      </>
  )
}
