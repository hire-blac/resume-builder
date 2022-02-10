import React, { Component } from 'react'

export class Work extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       step: 2,
       employer: '',
       job: '',
       job_desc: '',
       city: '',
       state: '',
       date_start: '',
       date_end: '',
    }
  }
  
  render() {
    return (
      <div>
        <h3>Work History</h3>
      </div>
    )
  }
}

export default Work