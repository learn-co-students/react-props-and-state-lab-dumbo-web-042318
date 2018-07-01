import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

import allPets from '../data/pets'

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

  handleChange = (e)=> {
    const type = e.target.value
    this.setState({
      filters: {
      ...this.state.filters,
      type
      }
    })
  }

  handleFindPets = () => {
    const url = this.state.filters.type === 'all' ? `/api/pets` : `/api/pets?type=${this.state.filters.type}`
    fetch(url)
      .then(resp => resp.json())
      .then(pets => {
        this.setState({
          pets
        })
      })
  }


  handleAdoptionClick = (id) => {
    const updatedPets = this.state.pets.map(pet => {
      if(pet.id === id) {
        const newPet = Object.assign({}, pet)
        newPet.isAdopted = true
        return newPet
      }else {
        return pet
      }
    })
    this.setState({
      pets: updatedPets
    })
  }

  render() {
    const{pets, filters} = this.state
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.handleChange}
                onFindPetsClick={this.handleFindPets}
                selectedType = {filters.type}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={pets} onAdoptPet={this.handleAdoptionClick} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
