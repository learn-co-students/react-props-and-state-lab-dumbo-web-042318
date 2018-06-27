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

  handleChangeType = (e) => {
    const val = e.currentTarget.value

    this.setState({
      ...this.state,
      filters: {
          ...this.state.filters,
          type: val
      }
    })
  }

  handlePetsClick = e => {
    const type = this.state.filters.type
    const URL = type === 'all' ? '/api/pets' : `/api/pets?type=${type}`

    fetch(URL)
      .then(r => r.json())
      .then(data => this.setState({
        ...this.state,
        pets: data
      }))
  }

  handleAdopt = (id) => {
    const pet = this.state.pets.find(petObj => petObj.id === id);
    const pets = this.state.pets;
    const petIndex = pets.indexOf(pet);
    const adoptedPet = {...pet, isAdopted: true}

    this.setState({
      ...this.state,
      pets: [...pets.slice(0, petIndex), adoptedPet, ...pets.slice(petIndex + 1)]
    });
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handlePetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdopt} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
