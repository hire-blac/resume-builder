import React, { useState } from 'react'

const Work = ({experience, addToState, prevHandler, nextHandler}) => {

  const [work, setwork] = useState({
    employer: '',
    job: '',
    job_desc: '',
    job_city: '',
    job_state: '',
    start_date: '',
    end_date: '',
  })
  
  const addWork = (e) => {
    e.preventDefault()
    addToState('work', work)
    setwork({
      employer: '',
      job: '',
      job_desc: '',
      job_city: '',
      job_state: '',
      start_date: '',
      end_date: '',
    })
  }

  return (
    <div>
      <h3>Work History</h3>
      <ul>
        {experience.map(work => 
          <li>
            <b>{work.job}</b> {work.start_date} to {work.end_date} <br />
            {work.employer}
            <p>{work.job_desc}</p>
          </li>
        )}
      </ul>

      <form action="" onSubmit={(e)=>addWork(e)}>
        <h4>Add Work Experience</h4>
        <div className='double'>

          <div className="left">
            <label htmlFor="employer">Employer:</label>
            <input type="text" 
              name="employer"
              value={work.employer}
              onChange={(e)=>setwork({...work, employer: e.target.value})}
            />

            <label htmlFor="job_city">City:</label>
            <input type="text" 
              name="job_city" 
              id="job_city" 
              value={work.job_city}
              onChange={(e)=>setwork({...work, job_city: e.target.value})}
            />

            <label htmlFor="start_date">Start Date:</label>
            <input type="date" 
              name="start_date" 
              id="start_date" 
              value={work.start_date}
              onChange={(e)=>setwork({...work, start_date: e.target.value})}
            />
            
          </div>

          <div className="right">

            <label htmlFor="job">Job:</label>
            <input type="text" 
              name="job"
              value={work.job}
              onChange={(e)=>setwork({...work, job: e.target.value})}
            />

            <label htmlFor="job_state">State:</label>
            <input type="text" 
              name="job_state" 
              id="job_state" 
              value={work.job_state}
              onChange={(e)=>setwork({...work, job_state: e.target.value})}
            />

            <label htmlFor="end_date">Date of Graduation</label>
            <input type="date" 
              name="end_date" 
              id="end_date" 
              value={work.end_date}
              onChange={(e)=>setwork({...work, end_date: e.target.value})}
            />
            
          </div>
        </div>
        
        <label htmlFor="job_desc">Job Description:</label>
        <textarea name="job_desc"
           id="job_desc" 
           value={work.job_desc}
           cols="30" rows="10"
           onChange={(e)=>setwork({...work, job_desc: e.target.value})}>
        </textarea>
        
        <button type="submit">Add Work</button>

      </form>

      <button onClick={prevHandler}>Previous</button>
      <button onClick={nextHandler}>Next</button>

    </div>
  )
}

export default Work