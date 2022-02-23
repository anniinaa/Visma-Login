import React from 'react'

export const Welcome = ({ handleLogout }) => {
  return (
    <section className="welcome">
      <h1>Welcome to Visma!!</h1>
      <button onClick={handleLogout}>Logout</button>
    </section>
  )
}
