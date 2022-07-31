import {Component} from 'react'

import './index.css'

import '../HistoryItem'

class BrowserHistory extends Component {
  state = {
    searchInput: '',
  }

  updateSearchInput = value => {
    this.setState({
      searchInput: value,
    })
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteHistory = id => {
    const {initialHistoryList} = this.state
    const updatedHistoryList = initialHistoryList.filter(
      eachHistory => eachHistory.id !== id,
    )

    this.setState({
      initialHistoryList: updatedHistoryList,
    })
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const searchResults = initialHistoryList.filter(eachHistory =>
      eachHistory.history.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="search-box-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="search-container">
            <img
              alt="search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search history"
              className="input-search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
        </div>
        <ul className="history-container">
          {searchResults.map(eachHistory => (
            <HistoryItem
              key={eachHistory.id}
              historyDetails={eachHistory}
              updateSearchInput={this.updateSearchInput}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default BrowserHistory
