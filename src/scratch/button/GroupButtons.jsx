import React from 'react'
import { DevStandardButton } from './DevStandardButton'

export const GroupButtons = ({buttonProps}) => {

  return (
    <div className='groupe-de-boutton'>
      {
        buttonProps.map((item, index) => {
          console.log(item)
          return (
            <DevStandardButton
              key={index}
              { ...item}
            />
          )
        })
      }
    </div>
  )
}
