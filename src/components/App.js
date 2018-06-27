import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

    componentDidMount() {
      fetch('/api/pets')
      .then(response => response.json())
      .then((pets) => this.setState({ pets }))
    }

    // onFindPetsClick(){
    //    this.setState({
    //      filters: {
    //        ...this.state.filters,
    //        type:
    //      }
    //    })
    // }

  render() {

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
