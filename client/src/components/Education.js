import React, { Component } from 'react'

export class Education extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       step: 3,
       school: '',
       state: '',
       degree: '',
       foeld_of_study: '',
       start_date: '',
       grad_date: '',
    }
  }
  render() {
    return (
      <div>
        <h3>Education</h3>
      </div>
    )
  }
}

export default Education