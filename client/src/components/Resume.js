import React from 'react'

function Resume({prevStep, submitData, values}) {

  const Previous = e => {
    e.preventDefault()
    prevStep()
  }

  const SubmitData = e => {
    e.preventDefault()
    submitData()
  }

  return (
    <div>
        <h2>First name: {values.firstname}</h2>
        <h2>Last name: {values.lastname}</h2>
        
        <div className="navigation">
          <button className="prev-button" onClick={Previous}>Go back & Edit</button>
          <button className="next-button" onClick={SubmitData}>Submit & Generate Resume</button>
        </div>

    </div>
  )
}

export default Resume
