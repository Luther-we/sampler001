import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import StandardButton from '../standard/StandardButton'
import './group-button.css'

const TitlePad = (props) => {
  console.log('props', props)
  return (
    <>
      <div
        className="title-pad-sub-container-medium"
      >
        <h1>
        {props.title}
      </h1>
      </div>
    </>
  )
}

class GroupButton extends PureComponent {

  primaryFunction = (a, b) => {
    console.log('PrimaryFunction reçoit == ', a, b)
  }

  secondaryFunction = (a, b) => {
    console.log('SecondaryFunction reçoit == ', a, b)
  }

  touchRender = () => {
    const {
      touchs
    } = this.props

    return touchs.map((item, index) => {
      const {
        key,
        desactivate,
        className,
        functionName,
        secondaryName,
        functionActive,
        groupName,
        value,
        size,
        primaryFunction,
        secondaryFunction,
        empty
      } = item
      return (
        <StandardButton
          key={`${key}${index}`}
          className={className}
          functionName={functionName}
          secondaryName={secondaryName}
          functionActive={functionActive}
          groupName={groupName}
          value={value}
          size={size}
          primaryFunction={primaryFunction}
          secondaryFunction={secondaryFunction}
          desactivate={desactivate}
          empty={empty}
        />
      )
    })
  }

  render() {
    const {
      title
    } = this.props
    return (
      <>
        <div
          className="group-button-sub-container"
        >
        <div
          className="title-pad-container"
        >
          <TitlePad
            title={title}

          />
        </div>

        <div
          className="touch-group-container"
        >
      {
        this.touchRender()
      }
        </div>
        </div>

      </>
    )
  }

}

GroupButton.propTypes = {
 title: PropTypes.string,
 touchs: PropTypes.array
}

export default GroupButton
