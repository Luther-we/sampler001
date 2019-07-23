import React, { useEffect } from 'react'
import './layout-2.css'
import { DevStandardButton } from '../button/DevStandardButton'

const padProps = [
  {
    marking: 'Pad 1',
    subMarking: '-/+'
  },
  {
    marking: 'Pad 2',
    subMarking: '0'
  },
  {
    marking: 'Pad 3',
    subMarking: 'Cancel'
  },
  {
    marking: 'Pad 4',
    subMarking: ''
  },
  {
    marking: 'Pad 5',
    subMarking: '7'
  },
  {
    marking: 'Pad 6',
    subMarking: '8'
  },
  {
    marking: 'Pad 8',
    subMarking: '9'
  },
  {
    marking: 'Pad 8',
    subMarking: ''
  },
  {
    marking: 'Pad 9',
    subMarking: '4'
  },
  {
    marking: 'Pad 10',
    subMarking: '5'
  },
  {
    marking: 'Pad 11',
    subMarking: '6'
  },
  {
    marking: 'Pad 12',
    subMarking: ''
  },
  {
    marking: 'Pad 13',
    subMarking: '1'
  },
  {
    marking: 'Pad 14',
    subMarking: '2'
  },
  {
    marking: 'Pad 15',
    subMarking: '3'
  },
  {
    marking: 'Pad 16',
    subMarking: ''
  }
]

export const Layout2 = props => {

  useEffect(()  => {
    injectHeight("touchpad")
  })


  const getWidthByClassname = className => document.getElementsByClassName(className)[0].offsetWidth

  const injectHeight = className => {
    const heightTarget = getWidthByClassname(className)
    Array.prototype.forEach.call(document.getElementsByClassName(className), (elem, index) => {
      console.log('elems', elem)
      return document.getElementsByClassName(className)[index].style.height = `${heightTarget}px`
    })

  }

  const renderFunctionTouch = () => {
    return Array
      .apply(null, Array(6))
      .map((item, index) => {
          console.log('yes')
          return (
            <>
              <div className="stch-fct-tch">
                <DevStandardButton
                  marking={`F${index + 1}`}
                />
              </div>
            </>
          )
        })
  }

  const renderPadTouch = () => {
    return padProps
      .reverse()
      .map((item, index) => {
      console.log('Item de Pas ===> ', item)
      return (
        <>
        <div className="touchpadcontainer">
          <div className="padtitle">
          <h4 className="padtouchmarking">
            {item.marking}
          </h4>
          <h4 className="padtouchsubmarking">
            {item.subMarking}
          </h4>
        </div>
        <div className="touchpad">
        </div>
        </div>
        </>
      )
    })
  }

    return (
      <>
        <div className="scratch-ctn">
          <div className="stch-screen">
            Ecran
          </div>
          <div className="stch-function"
          >
              {renderFunctionTouch()}
          </div>
          <div className="padcontainer">
            {renderPadTouch()}
          </div>
        </div>
      </>
    )
}

export default Layout2
