import React from 'react'
import './mpc-studio.css'
import { CentralContainer } from '../../containers/centralContainer/CentralContainer';
import { SettingsContainer } from '../../containers/settingsContainer/SettingsContainer';

export const MpcStudio = props => {
  console.log(props)
  return (
    <>
      <div className="mpc-container">
        <div className="potar-container">
          Potar Container
        </div>
        <div className="central-container">
          <CentralContainer />
        </div>
        <div className="settings-container">
          <SettingsContainer />
        </div>

      </div>
    </>
  )
}
