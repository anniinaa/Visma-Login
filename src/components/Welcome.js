import { Button } from '@mui/material'
import React from 'react'

export const Welcome = ({ handleLogout }) => {
  return (
    <section className="welcome">
      <h1>Welcome to Visma!!</h1>
      <Button id="logOutButton" onClick={handleLogout}>
        Logout
      </Button>
    </section>
  )
}
