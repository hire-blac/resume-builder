import React, { Component } from 'react'

 class Skill extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        step: 4,
        skill: '',
        level: 0
     }
   }
   
  render() {
    return (
      <div>
        <h3>Skill</h3>
      </div>
    )
  }
}

export default Skill