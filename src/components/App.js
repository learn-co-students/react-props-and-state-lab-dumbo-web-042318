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

  handleChange = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  handleClick = (e) => {
    let filter = this.state.filters.type
    if (filter === "all") {
      filter = "pets"
    } else {
      filter = `pets?type=${filter}`
    }
    console.log(filter)
    fetch(`/api/${filter}`)
      .then(r => r.json())
      .then(r => this.setState({pets: r}))

  }

  onAdoptPet = (id) => {
    let petsArr = [...this.state.pets]
    let newPets = petsArr.map(pet => {
      if (pet.id === id) {
        pet.isAdopted = true
        return pet
      } else {
        return pet
      }
    })
    this.setState({
      pets: newPets
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.handleChange} onFindPetsClick={this.handleClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
