import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchinput: ''}

  onchangeinput = event => {
    this.setState({searchinput: event.target.value})
  }

  render() {
    const {destinationList} = this.props

    const {searchinput} = this.state

    const searchResults = destinationList.filter(eachuser =>
      eachuser.name.toLowercase().includes(searchinput.toLowercase()),
    )

    return (
      <div className="bg">
        <h1 className="heading">Destination Search</h1>
        <div className="searchContainer">
          <input
            type="search"
            onChange={this.onchangeinput}
            value={searchResults}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>

        <ul>
          {searchResults.map(each => (
            <DestinationItem destinationitem={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
