import React from 'react'

function Personal(props) {
  return (
    <div>
      <h3>Personal Information</h3>
      
      <form action="">
        <div className='double'>
          <div className='left'>
            <label htmlFor="firstname">First name</label>
            <input type="text" 
              name="firstname" 
              placeholder="First Name"
              onChange={(e)=>props.handleChange(e)}
            />

            <label htmlFor="email">Email:</label>
            <input type="email" 
              name="email"
              onChange={(e)=>props.handleChange(e)}
            />

            <label htmlFor="city">City:</label>
            <input type="text" 
              name="city" 
              onChange={(e)=>props.handleChange(e)}
            />
    
    
          </div>

          <div className='right'>
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" 
              name="lastname" 
              onChange={(e)=>props.handleChange(e)} 
            />
            
            <label htmlFor="phone">Phone Number:</label>
            <input type="text" 
              name="phone"
              onChange={(e)=>props.handleChange(e)}
            />

            <label htmlFor="state">State:</label>
            <input type="text" 
              name="curr_state"
              onChange={(e)=>props.handleChange(e)}
            />
    
          </div>
        </div>
       
      </form>

      <button onClick={props.nextHandler}>Next</button>
    </div>
  )
}

export default Personal