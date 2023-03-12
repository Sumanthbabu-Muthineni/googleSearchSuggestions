// Write your code here
import './index.css'

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  typedWords = event => {
    this.setState({searchInput: event.target.value})
  }

  changeSearching = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props

    const {searchInput} = this.state

    const searchResult = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="bg-container2">
          <img
            alt="google logo"
            className="img-width"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
        </div>
        <div className="input-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="searchBar"
              placeholder="Search Google"
              onChange={this.typedWords}
              value={searchInput}
            />
          </div>
          <ul>
            {searchResult.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                suggestionInfo={eachItem}
                changeSearching={this.changeSearching}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
