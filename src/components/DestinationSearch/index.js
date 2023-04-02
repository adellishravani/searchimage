import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchinput: ''}

  onchangeinput = event => {
    this.setState({searchinput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props

    const {searchinput} = this.state

    const searchResults = destinationsList.filter(eachuser =>
      eachuser.name.toLowerCase().includes(searchinput.toLowerCase()),
    )

    return (
      <div className="bg">
        <h1 className="heading">Destination Search</h1>
        <div className="searchContainer">
          <input
            type="search"
            onChange={this.onchangeinput}
            value={searchinput}
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
