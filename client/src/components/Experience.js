import React from 'react'

const Experience = ({nextStep, prevStep, handleChange, values}) => {

  const Previous = e => {
    e.preventDefault()
    prevStep()
  }
  const Continue = e => {
    e.preventDefault();
    nextStep()
  }

  return (
    <div>
      
      <h1>Work Experience</h1>
      <form action="">

        <label htmlFor="orgainsation">Name of Organisation</label>
        <input type="text"
          placeholder="Name of Organisation"
          value={values.orgainsation}
          onChange={handleChange('orgainsation')} />

        <label htmlFor="date_from">Date Started:</label>
        <input type="date"
          placeholder="Date Started:"
          value={values.date_from}
          onChange={handleChange('date_from')} />
          
          <label htmlFor="date_from">Date Ended:</label>
        <input type="date"
          placeholder="Date Ended:"
          value={values.date_to}
          onChange={handleChange('date_to')} />
          
        <label htmlFor="position">Position</label>
        <input type="text"
          placeholder="Position"
          value={values.position}
          onChange={handleChange('position')} />
          
        <label htmlFor="job_desc">Job Description</label>
        <textarea 
          placeholder="Job Description"
          value={values.job_desc}
          onChange={handleChange('job_desc')} />
          
        <div className="navigation">
          <button className="prev-button" onClick={Previous}>Previous</button>
          <button className="next-button" onClick={Continue}>Next</button>
        </div>

      </form>

    </div>
  )
}

export default Experience
