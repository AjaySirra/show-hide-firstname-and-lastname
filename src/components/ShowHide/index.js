import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    isClickedFirstName: false,
    isClickedLastName: false,
  }

  showHideFirstName = () => {
    this.setState(prevState => ({
      isClickedFirstName: !prevState.isClickedFirstName,
    }))
  }

  showHideLastName = () => {
    this.setState(prevState => ({
      isClickedLastName: !prevState.isClickedLastName,
    }))
  }

  render() {
    const {isClickedFirstName, isClickedLastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-button-container">
          <div>
            <button
              className="button"
              type="button"
              onClick={this.showHideFirstName}
            >
              Show/Hide Firstname
            </button>
            {isClickedFirstName ? (
              <div className="first-name">
                <p className="firstName">Joe</p>
              </div>
            ) : null}
          </div>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.showHideLastName}
            >
              Show/Hide Lastname
            </button>
            {isClickedLastName ? (
              <div className="first-name">
                <p className="firstName">Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
