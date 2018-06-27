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

  onChangeType = (type) => {
    this.setState({
      filters: {type: type}
    })
  }
  onFindPetsClick = () => {
    const type = this.state.filters.type

    switch (type){
      case 'dog':
        return fetch('/api/pets?type=dog').then(resp => resp.json()).then(petsData =>{
          this.setState({
            pets: petsData
          })
        }) //.then(console.log)
        break;
      case 'cat':
        fetch('/api/pets?type=cat').then(resp => resp.json()).then(petsData =>{
          this.setState({
            pets: petsData
          })
        })
        break;
      case 'micropig':
        fetch('/api/pets?type=micropig').then(resp => resp.json()).then(petsData =>{
          this.setState({
            pets: petsData
          })
        })
        break;
      default:
        fetch('/api/pets').then(resp => resp.json()).then(petsData =>{
          this.setState({
            pets: petsData
          })
        })
        break;
    }
  }

  onPetAdopt = (id) => {

    const adoptedPet = this.state.pets.find(pet => pet.id === id);
    debugger;
    return adoptedPet;

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
              <PetBrowser pets={this.state.pets} onPetAdopt={this.onPetAdopt}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
