import React, { useEffect } from 'react'
import './layout.css'
import { DevStandardButton } from './button/DevStandardButton'
import { LigthBar } from './button/LigthBar'
import { GroupTitle } from './button/GroupTitle'
import { GroupButtons } from './button/GroupButtons'

export const Layout = (props) => {

  const sizeScreen = () => {
    const screen = {}

    screen.width = window.innerWidth
    screen.height = window.innerHeight

    return screen
  }

  const defineLayoutSize = () => {
    const target = document.getElementsByClassName('layout-container')[0]
    const height = sizeScreen().height * 0.8
    const offset = target.offsetHeight
    document.getElementsByClassName('layout-container')[0].style.height = `${height}px`
  }

  useEffect(() => {
    defineLayoutSize()
    // defineDecorationTitleSize()
  }, [])

  const groupProps = {
    title: 'Groupe de Button', // string, titre du group
    size: 'full' // string => lil, medium, full
  }

  const buttonProps = [
    {
      marking: 'A', // string
      subMarking: '1' // string
    },
    {
      marking: 'B', // string
      subMarking: '2' // string
    },
    {
      marking: 'C', // string
      subMarking: '3' // string
    },
    {
      marking: 'D', // string
      subMarking: '4' // string
    }]


  return (
    <>
      <div
        className='layout-container'
      >
        <div className="scratch-group-button" id="scratch-group-button">
          <GroupTitle groupProps={groupProps}/>
          <GroupButtons buttonProps={buttonProps}/>
          <GroupTitle groupProps={groupProps}/>
          <GroupButtons buttonProps={buttonProps}/>
        </div>
      </div>
    </>
  )
}
