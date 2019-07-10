import React from 'react'
import GroupButton from '../../components/buttons/groupButton/GroupButton';
import { padBank } from '../../modules/utils/mapTouch';
import { mapSettings } from './mapSettings';
import './settings-container.css'

const renderMapSettings = () => {
  return (
    mapSettings.map((item, index) => {
      return(
        <div>
          <GroupButton
            key={index}
            touchs={item.keymap}
          />
        </div>
      )
    })
  )
}

const IntOutContainer = (props) => {
  return(
    <>
      <div
        className="in-out-sub-container"
      >
        In/Out Container
      </div>
    </>
  )
}

const LogoContainer = (props) => {
  return (
    <>
      <div
        className="logo-sub-container"
      >
        unik_004
      </div>
    </>
  )
}

const PadBankContainer = (props) => {
  return (
    <>
      <GroupButton
        title="Pad Bank"
        touchs={padBank}
      />
    </>
  )
}

const PadModeContainer = (props) => {
  return (
    <>
      <div
        className="pad-mode-sub-container"
      >
        Pad Mode Container
      </div>
    </>
  )
}



export const SettingsContainer = (props) => {
  return (
    <>
      <div
        className="settings-sub-container"
      >
        <div
          className="in-out-container"
        >
          <IntOutContainer />
        </div>
        <div
          className="logo-container"
        >
          <LogoContainer />
        </div>
        <div
          className="pad-bank-container"
        >
          <PadBankContainer />
        </div>
        <div
          className="pad-bank-container"
        >
          <PadBankContainer />
        </div>
        <div
          className="pad-mode-container"
        >
          <PadModeContainer />
        </div>
      </div>
    </>
  )
}



