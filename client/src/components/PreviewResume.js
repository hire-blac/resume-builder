import React from 'react'

function PreviewResume({values, prevHandler}) {
  return (
    <div>
      <h2>Preview Resume</h2>
      <div>
        <h4>Personal Information</h4>
        <p><b>{values.firstname} {values.lastname}</b></p>
        <h4>Work History</h4>
          <ul>
            {values.work.map(ex => 
              <li>
                <p>
                  {ex.job} {ex.start_date} to {ex.end_date} <br />
                  {ex.employer} <br />
                  {ex.job_desc}
                </p>

              </li>  
            )}
          </ul>
        <h4>Education</h4>
        <ul>
            {values.education.map(ex => 
              <li>
                <p>
                  {ex.degree} {ex.study_field} - {ex.start_date} to {ex.end_date} <br />
                  {ex.institution} <br />
                </p>
              </li>  
            )}
          </ul>
        <h4>Skills</h4>
        <ul>
            {values.skills.map(ex => 
              <li>
                <p>
                  {ex.skill} = {ex.level} 
                </p>
              </li>  
            )}
          </ul>
      </div>

      <button onClick={prevHandler}>Previous</button>
      <button>Download Resume</button>

    </div>
  )
}

export default PreviewResume