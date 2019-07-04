import React, { PureComponent } from 'react'
import './pad-container.css'

const touchs = Array.apply([], Array(16))

class PadContainer extends PureComponent {
  render() {
    console.log('PadContainer reçoit en props : ', this.props, touchs)
    
    return(
      <>
      <div className="pad">
        {touchs.map((item, index) => {
          console.log(item)
          return (
          <div
            className="touch-pad"
            key={index}
          >
            {index+1}
          </div>
        )})}
      </div>
      </>
    )
  }
}

export default PadContainer
