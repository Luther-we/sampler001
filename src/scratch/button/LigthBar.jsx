import React from 'react'
import './ligth-bar.css'
import classNames from 'classnames'

export const LigthBar = ({isEnabled}) => {

  const getLightClassName = () => classNames('light-bar', {'-enabled': isEnabled})

  return(
    <>
        <div
          className={getLightClassName()}
        >
          <div className={`shadow-${getLightClassName()}`} />
        </div>
      </>

  )
}
