import React, { useState } from 'react'

const Education = ({educationHistory, addToState, prevHandler, nextHandler}) => {

  const [education, seteducation] = useState({
    institution: '',
    sch_state: '',
    degree: '',
    study_field: '',
    start_date: '',
    grad_date: '',
  })

  const addEducation = e => {
    e.preventDefault()
    addToState('education', education)
    seteducation({
      institution: '',
      sch_state: '',
      degree: '',
      study_field: '',
      start_date: '',
      grad_date: '',
    })
  }
  return (
    <div>
      <h3>Education</h3>
      <ul>
        {educationHistory.map(cert => 
          <li>
            <b>{cert.degree}. {cert.study_field}</b><br />
            <small>{cert.start_date} to {cert.grad_date}</small><br />
            {cert.institution}
          </li>
          )}
      </ul>

      <form action="" onSubmit={(e)=>addEducation(e)}>
        <h4>Add Education/Certificate</h4>
        <label htmlFor="institution">Name of Institution</label>
        <input type="text" 
          name="institution" 
          id="institution" 
          value={education.institution}
          onChange={(e)=>seteducation({...education, institution: e.target.value})}
        />

        <label htmlFor="sch_state">State:</label>
        <input type="text" 
          name="sch_state" 
          id="sch_state" 
          value={education.sch_state}
          onChange={(e)=>seteducation({...education, sch_state: e.target.value})}
        />
        
        <label htmlFor="degree">Degree</label>
        <select name="degree" id="degree"
          value={education.degree}
          onChange={(e)=>seteducation({...education, degree: e.target.value})}>
          <option value="B.Sc">B.Sc</option>
          <option value="B.Tech">B.Tech</option>
          <option value="B.A">B.Art</option>
          <option value="M.Sc">M.Sc</option>
        </select>
        
        <label htmlFor="study_field">Field of Study</label>
        <input type="text" 
          name="study_field" 
          id="study_field" 
          value={education.study_field}
          onChange={(e)=>seteducation({...education, study_field: e.target.value})}
        />
        
        <label htmlFor="start-date">Start Date:</label>
        <input type="date" 
          name="start_date" 
          id="start_date" 
          value={education.start_date}
          onChange={(e)=>seteducation({...education, start_date: e.target.value})}
        />
        
        <label htmlFor="grad-date">Date of Graduation</label>
        <input type="date" 
          name="grad_date" 
          id="grad_date" 
          value={education.grad_date}
          onChange={(e)=>seteducation({...education, grad_date: e.target.value})}
        />
        
        <button type="submit">Add Education</button>

      </form>

      <button onClick={prevHandler}>Previous</button>
      <button onClick={nextHandler}>Next</button>
    </div>
  )
}

export default Education