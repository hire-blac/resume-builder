import React, { Component } from 'react'

class Personal extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       step: 1,
       firstname: '',
       lastname: '',
       email: '',
       phone: '',
       city: '',
       state: '',
    }
  }
  
  render() {
    return (
      <div>
        <h3>Personal</h3>
      </div>
    )
  }
}

export default Personal