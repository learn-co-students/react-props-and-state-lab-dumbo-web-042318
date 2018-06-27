import React from 'react'

class Pet extends React.Component {

  onAdoptPet = () => {
    this.props.onAdoptPet(this.props.pet.id);
  }
  renderButton = () =>{
    if(this.props.pet.isAdopted){
      console.log('adopted');
        return<button className="ui disabled button">Already adopted</button>
    }else {
        return<button className="ui primary button" onClick={this.onAdoptPet}>Adopt pet</button>    }
  }

  render() {
    const {name, type, age, weight, gender, id} = this.props.pet;

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === "female" ? '♀' : '♂'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderButton()}

        </div>
      </div>
    )
  }
}

export default Pet
