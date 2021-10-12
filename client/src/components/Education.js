import React from 'react'

const Education = ({nextStep, prevStep, handleChange, values}) => {

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
      <h1>Education</h1>
      <form action="">

        <label htmlFor="institution">Name of Institution</label>
        <input type="text"
          placeholder="Name of Institution"
          value={values.institution}
          onChange={handleChange('institution')} />

        <label htmlFor="country">Country</label>
        <input type="text"
          placeholder="Country"
          value={values.country}
          onChange={handleChange('country')} />
          
        <label htmlFor="date_graduated">Date Graduated</label>
        <input type="date"
          placeholder="Date Graduated"
          value={values.date_graduated}
          onChange={handleChange('date_graduated')} />
          
        <label htmlFor="certificate">Certificate Obtained</label>
        <input type="text"
          placeholder="Certificate Obtained"
          value={values.certificate}
          onChange={handleChange('certificate')} />
          
        <div className="navigation">
          <button className="prev-button" onClick={Previous}>Previous</button>
          <button className="next-button" onClick={Continue}>Next</button>
        </div>

      </form>

    </div>
  )
}

export default Education
