import React from 'react'
import './mpc-studio.css'
import { CentralContainer } from '../../containers/centralContainer/CentralContainer';

export const MpcStudio = props => {
  console.log(props)
  return (
    <>
      <span>
        Hello toi !!
      </span>
      <div className="mpc-container">
        <div className="potar-container">
          Potar Container
        </div>
        <div className="central-container">
          <CentralContainer />
        </div>
        <div className="settings-container">
          Settings Container
        </div>

      </div>
    </>
  )
}