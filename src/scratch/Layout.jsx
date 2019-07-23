import React, { useEffect } from 'react'
import './layout.css'
import { DevStandardButton } from './button/DevStandardButton'
import { LigthBar } from './button/LigthBar'
import { GroupTitle } from './button/GroupTitle'
import { GroupButtons } from './button/GroupButtons'
import { Link } from 'react-router-dom'
import './group-in-out.css'

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
    const offset = target.offsetHeight / 2
    document.getElementsByClassName('layout-container')[0].style.height = `${height}px`
    document.getElementsByClassName('layout-container')[0].style.marginTop = `${offset}px`
  }

  useEffect(() => {
    defineLayoutSize()
  }, [])

  const padBankGroupProps = {
    title: 'pad bank', // string, titre du group
    touchSize: 'medium', // string => lil, medium, full
    titleSize: 'medium' // string => medium, full
  }

  const padBankProps = [
    {
      marking: 'A', // string
      subMarking: 'E' // string
    },
    {
      marking: 'B', // string
      subMarking: 'F' // string
    },
    {
      marking: 'C', // string
      subMarking: 'G' // string
    },
    {
      marking: 'D', // string
      subMarking: 'H' // string
    },
    {
      marking: 'pad assign',
      subMarking: 'pad copy'
    }
  ]

  const padModeProps = [
    {
      marking: 'Full level', // string
      subMarking: 'Half-level' // string
    },
    {
      marking: '15 level', // string
      subMarking: '' // string
    },
    {
      marking: 'Step seq', // string
      subMarking: '' // string
    },
    {
      marking: 'Next seq', // string
      subMarking: '' // string
    },
    {
      marking: 'track mute',
      subMarking: 'pad mute'
    }
  ]

  const padModeGroupProps = {
    title: 'pad mode', // string, titre du group
    touchSize: 'medium', // string => lil, medium, full
    titleSize: 'full' // string => medium, full
  }

  const modeProps = [
    {
      marking: 'Prog Edit', // string
      subMarking: 'Q-Link' // string
    },
    {
      marking: 'Prog mix', // string
      subMarking: 'Trx mix' // string
    },
    {
      marking: 'seq edit', // string
      subMarking: 'effects' // string
    },
    {
      marking: 'sample edit', // string
      subMarking: 'sample rec' // string
    },
    {
      marking: 'song',
      subMarking: 'other'
    }
  ]

  const modeGroupProps = {
    title: 'mode', // string, titre du group
    touchSize: 'medium', // string => lil, medium, full
    titleSize: 'full' // string => medium, full
  }

  const dataSelectProps = [
    {
      marking: 'project', // string
      subMarking: 'folder 1' // string
    },
    {
      marking: 'seq', // string
      subMarking: 'folder 2' // string
    },
    {
      marking: 'prog', // string
      subMarking: 'folder 3' // string
    },
    {
      marking: 'sample', // string
      subMarking: 'folder 4' // string
    },
    {
      marking: 'no filter',
      subMarking: 'folder 5'
    }
  ]

  const dataSelectGroupProps = {
    title: 'data select', // string, titre du group
    touchSize: 'medium', // string => lil, medium, full
    titleSize: 'full' // string => medium, full
  }

  const setProps = ref => {
  switch (ref) {
    case 'isActivated':
      return
  }





  }


  return (
    <>
      <div className='global-container'>
        <div
          className='layout-container'
        >
          <div className="scratch-group-in-out">
            <h3><a href="mailto:luther.we@gmail.com" target="_blank" >Mail</a></h3>
            <h3><a href="https://www.linkedin.com/in/luther-werington-2909b460/" target="_blank">Link</a></h3>
            <h3><a href="https://github.com/Luther-we/sampler001" target="_blank">Git</a></h3>
            <h3><Link to="/blabla">Blabla</Link></h3>
          </div>
          <div className="scratch-group-logo">
            <div className="ctn-lg">
              <h1 className="logo">akai</h1>
            </div>
            <div className="ctn-lg">
              <h2 className="sub-logo">professionnel</h2>
            </div>
          </div>
          <div className="scratch-group-button">
            <GroupTitle groupProps={padBankGroupProps}/>
            <GroupButtons buttonProps={padBankProps}/>
          </div>
          <div className="scratch-group-button">
            <GroupTitle groupProps={padModeGroupProps}/>
            <GroupButtons buttonProps={padModeProps}/>
          </div>
          <div className="scratch-group-button">
            <GroupTitle groupProps={modeGroupProps}/>
            <GroupButtons buttonProps={modeProps}/>
          </div>
          <div className="scratch-group-button">
            <GroupTitle groupProps={dataSelectGroupProps}/>
            <GroupButtons buttonProps={dataSelectProps}/>
          </div>
        </div>
        <div className='moke-container'>
          Hello Luther
          <button
            onClick={setProps('isActivated')}
          >

          </button>
        </div>
      </div>
    </>
  )
}
