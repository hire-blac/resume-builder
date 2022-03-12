import React, { Component } from 'react'
import Education from './Education';
import Personal from './Personal';
import PreviewResume from './PreviewResume';
import Skill from './Skill';
import Work from './Work';
import './styles.css'

class Resume extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      step: 1,
      firstname: '',
      lastname: '',
      profession: '',
      city: '',
      curr_state: '',
      phone: '',
      email: '',
      company: '',
      work: [],
      education: [],
      skills: []
    }
  }

  nextStep = () => {
    const {step} = this.state
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const {step} = this.state
    this.setState({
      step: step - 1
    })
  }

  handleChange = ({target: {value, name}}) => {
    this.setState ({[name]: value})
  };

  addToState = (name, field) => {
    this.setState(state => ({
      [name]: [...state[name], field]
    }), () => {
      console.log(this.state[name]);
    })
  }

  render() {

    switch (this.state.step) {
      case 1:
        return (
          <div className='box'>
            <Personal 
              handleChange={this.handleChange}
              nextHandler={this.nextStep}  
            />
          </div>
        );
      case 2:
        return (
          <div className='box'>
            <Work 
              experience={this.state.work}
              addToState={this.addToState}
              handleChange={this.handleChange}
              prevHandler={this.prevStep}
              nextHandler={this.nextStep}
            />
          </div>
        )
      case 3:
        return (
          <div className='box'>
            <Education 
              educationHistory={this.state.education}
              addToState={this.addToState}
              handleChange={this.handleChange}
              prevHandler={this.prevStep}
              nextHandler={this.nextStep}
            />
          </div>
        )
      case 4:
        return (
          <div className='box'>
            <Skill 
              skills={this.state.skills}
              addToState={this.addToState}
              handleChange={this.handleChange}
              prevHandler={this.prevStep}
              nextHandler={this.nextStep}
            />
          </div>
        )
      case 5:
        return (
          <div>
            <PreviewResume
              values={this.state}
              prevHandler={this.prevStep}
            />
          </div>
        )
      default:
        return (
          <h1>Print</h1>
        )
    }
  }
}

export default Resume