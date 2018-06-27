import React from 'react'


  function Pet(props) {
    const{name, type, gender, age, weight, isAdopted} = props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            
            {gender === 'female' ? '♀' : '♂'}
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
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )

}

export default Pet
// id: '9e7cc723-d7f5-440d-8ead-c311e68014ee',
// type: 'dog',
// gender: 'male',
// age: 8,
// weight: 6,
// name: 'Kennedy',
// isAdopted: false,
