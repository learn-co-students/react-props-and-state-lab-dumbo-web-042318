import React from 'react'
//onChangeType from app
//onFindPetsClick from app (our upstream boi)

class Filters extends React.Component {
  handlechange=(e)=>{
    // console.log(e.target.value);
    this.props.onChangeType(e.target.value)
  }
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.handlechange} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
