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

  onChangeType = (event) => {
    this.setState( {filters: {type: event.target.value}})
  }

  onFindPetsClick = (event) => {
    let baseURL = '/api/pets'
    let searchURL = baseURL + `?type=${this.state.filters.type}`
    fetch(this.state.filters.type === 'all' ? baseURL : searchURL)
      .then(resp => resp.json())
      .then(resp => this.setState({pets: resp}))
      .then(console.log(this.state))
  }

  onAdoptPet = (id) => {
    const petArrayCopy = [...this.state.pets]
    const pet = petArrayCopy.find(pet => pet.id === id)
    const petIndex = petArrayCopy.indexOf(pet)
    const petCopy = {...pet}
    petCopy.isAdopted = true
    petArrayCopy.splice(petIndex, 1, petCopy)
    this.setState({pets: petArrayCopy}, () => console.log(this.state))

    // this.setState({
    //   pets: this.state.pets.map((pet) => {
    //     if (pet.id === id) {
    //       return {
    //         ...pet,
    //         isAdopted: true
    //       }
    //     }
    //   })
    // }, () => console.log(this.state))
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
