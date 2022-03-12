import React, { useState } from 'react'

const Skill = ({skills, addToState, prevHandler, nextHandler}) => {

  const [skill, setskill] = useState({skill: '', level: ''})

  const addSkill = (e) => {
    e.preventDefault()
    addToState('skills', skill)
    setskill({skill: '', level: ''})
  }

  return (
    <div>
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => 
          <li key={index}>{skill.skill} = {skill.level}</li>
        )}
      </ul>
      <form action="" onSubmit={(e)=>addSkill(e)}>
        <h4>Add a Skill</h4>
        <label htmlFor="skill">Skill: </label>
        <input type="text" 
          name="skill" 
          value={skill.skill}
          onChange={(e)=>setskill({...skill, skill: e.target.value})}
        />

        <label htmlFor="level">Level of Proficiency</label>
        <input type="number" 
          name="level" 
          value={skill.level}
          min={0} max={5} 
          onChange={(e)=>setskill({...skill, level: e.target.value})}
        />

        <button>Add Skill</button>

      </form>
      
      <button onClick={prevHandler}>Previous</button>
      <button onClick={nextHandler}>Next</button>
      
    </div>
  )
}

export default Skill