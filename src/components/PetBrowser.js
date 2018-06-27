import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  createPetComponents = () => {
    return this.props.pets.map(pet => <Pet key={pet.id} onPetAdopt={this.props.onPetAdopt} pet={pet} />);
  }

  render() {

    return(
      <div className="ui cards">
        {this.createPetComponents()}
      </div>
    )
  }
}

export default PetBrowser
