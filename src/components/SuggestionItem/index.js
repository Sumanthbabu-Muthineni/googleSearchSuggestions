// Write your code here

import './index.css'

import {Component} from 'react'

class SuggestionItem extends Component {
  changeSearchInput = () => {
    const {suggestionInfo, changeSearching} = this.props

    const {suggestion} = suggestionInfo
    changeSearching(suggestion)
  }

  render() {
    const {suggestionInfo} = this.props

    const {suggestion} = suggestionInfo

    return (
      <li className="list-container" onClick={this.changeSearchInput}>
        <p>{suggestion}</p>
        <img
          alt="arrow"
          className="suggestion-icon"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </li>
    )
  }
}
export default SuggestionItem
