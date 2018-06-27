import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petCards = this.props.pets.map (pet => {
      return <Pet key={pet.id} pet={pet}/>
    })
    return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser

// id: '9e7cc723-d7f5-440d-8ead-c311e68014ee',
// type: 'dog',
// gender: 'male',
// age: 8,
// weight: 6,
// name: 'Kennedy',
// isAdopted: false,
