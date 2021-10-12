import React from 'react'

const Skills = ({nextStep, prevStep, handleChange, values}) => {
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
      <h1>Add Skills</h1>
      <form action="">

        <label htmlFor="skills">Skills</label>
        <input type="text"
          placeholder="Skill"
          value={values.skill}
          onChange={handleChange('skill')} />

        <label htmlFor="proficiency">Level of Proficiency</label>
        <input type="number"
          placeholder="Level of Proficiency"
          value={values.proficiency}
          onChange={handleChange('proficiency')} />

        <div className="navigation">
          <button className="prev-button" onClick={Previous}>Previous</button>
          <button className="next-button" onClick={Continue}>Next</button>
        </div>

      </form>
    </div>
  )
}

export default Skills
