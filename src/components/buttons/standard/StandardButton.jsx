import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { appConst } from '../../../modules/appConst';
import './standard-button.css'

/*
* size accepte 'lil', 'medium', 'big' - appConst.BUTTON_SIZE_REFS []
*/


class StandardButton extends PureComponent {

  executeCallBack = (a, b) => {
const { functionActive, primaryFunction, secondaryFunction} = this.props

    switch (functionActive) {
      case appConst.FUNCTION_REFS[0]:
        return primaryFunction(a, b)
      case appConst.FUNCTION_REFS[1]:
        return secondaryFunction(a, b)
      default:
          break
    }
  }

  render() {
    const {
      functionName,
      secondaryName,
      groupName,
      className,
      value,
      size,
    } = this.props

    const cssTemplate = `${size}-${groupName}-${className}`

    return (
      <>
      <div
        className={`standard-button-sub-container ${cssTemplate}`}
      >
        <button
          className={`click-standard ${cssTemplate}`}
          value={value}
          onClick={(a, b) => this.executeCallBack(a, b)}
        >
          <span
            className={`function-name`}
          >
            {functionName}
          </span>
        </button>
        <span
          className={`secondary-name ${cssTemplate}`}
        >
          {secondaryName}
        </span>
      </div>

      </>
    )
  }
}

StandardButton.propTypes = {
  primaryFunction: PropTypes.func,
  secondaryFunction: PropTypes.func,

  functionName: PropTypes.string,
  secondaryName: PropTypes.string,
  functionActive: PropTypes.string,
  groupName: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default StandardButton
