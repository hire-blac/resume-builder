import React from 'react'

const Profile = ({nextStep, handleChange, values}) => {

  const Continue = e => {
    e.preventDefault();
    nextStep()
  }

  return (
    <div>

      <h1>Personal Information</h1>
      <form action="">

        <label htmlFor="firstname">First Name</label>
        <input type="text"
          placeholder="First name"
          value={values.firstname}
          onChange={handleChange('firstname')} />

        <label htmlFor="lastname">Last Name</label>
        <input type="text"
          placeholder="Last name"
          value={values.lastname}
          onChange={handleChange('lastname')} />
          
        <label htmlFor="phone">Phone</label>
        <input type="text"
          placeholder="Phone"
          value={values.phone}
          onChange={handleChange('phone')} />
          
        <label htmlFor="email">Email Address</label>
        <input type="text"
          placeholder="Email Address"
          value={values.email}
          onChange={handleChange('email')} />
          
        <div className="navigation">
          <button className="next-button" onClick={Continue}>Next</button>
        </div>

      </form>

    </div>
  )
}

export default Profile
