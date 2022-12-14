import {Component} from 'react'

import SearchItem from '../SearchItem'
import './index.css'

class SearchHistory extends Component {
  state = {
    searchInput: '',
  }

  onChangeEvent = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteSearch = id => {
    const {historyList} = this.state
    const filteredList = historyList.filter(each => each.id !== id)
    this.setState({historyList: filteredList})
  }

  render() {
    const {searchInput} = this.state
    const {historyList} = this.props

    const searchResults = historyList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="search-history-container">
        <div className="history-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
          />

          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-logo"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search History"
              value={searchInput}
              onChange={this.onChangeEvent}
            />
          </div>
        </div>
        <div className="display-search-history-container">
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map(each => (
                <SearchItem
                  historyList={each}
                  key={each.id}
                  deleteSearch={this.deleteSearch}
                />
              ))}
            </ul>
          ) : (
            <p className="no-history-text">There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}

export default SearchHistory
