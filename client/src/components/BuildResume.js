import React, { Component } from 'react'
import Education from './Education';
import Experience from './Experience';
import Profile from './Profile';
import Resume from './Resume';
import Skills from './Skills';
import axios from 'axios'

export class BuildResume extends Component {

  state = {
    step: 1,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    linkedin: '',
    facebook: '',
    institution: '',
    country: '',
    date_graduated: '',
    certificate: '',
    organisation: '',
    date_from: '',
    date_to: '',
    position: '',
    job_desc: '',
    skill: '',
    proficiency: ''
  }

  nextStep = () => {
    const {step} = this.state;
    this.setState({step: step + 1})
  }
  prevStep = () => {
    const {step} = this.state;
    this.setState({step: step - 1})
  }
  handleChange = (input) => e => {
    this.setState({ [input]: e.target.value} )
  }
  submitData = () => {
    const data = this.state 
    console.log(data)
    axios.post('/generate', {
      header: {
        'Content-Type': 'application/json'
      },
      data: this.state})
    .then(resp=>console.log(resp.data))
    .catch(err=>console.log(err))
  }

  render() {

    const {step} = this.state;

    const {firstname, lastname, email, phone, linkedin,
            facebook, institution, country, date_graduated,
            certificate, organisation, date_from, date_to, 
            position, job_desc, skill, proficiency} = this.state;
    const values = {firstname, lastname, email, phone, linkedin,
                      facebook, institution, country, date_graduated,
                      certificate, organisation, date_from, date_to, 
                      position, job_desc, skill, proficiency};

    switch(step) {
      case 1:
        return(
          <Profile  
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}/>
        )
      case 2:
        return(
          <Education  
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}/>
        )
      case 3:
        return(
          <Experience  
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}/>
        )
      case 4:
        return(
          <Skills  
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}/>
        )
      case 5:
        return(
          <Resume  
            prevStep={this.prevStep}
            submitData={this.submitData}
            values={this.state}/>
        )
        default:
    }
  }
}

export default BuildResume
