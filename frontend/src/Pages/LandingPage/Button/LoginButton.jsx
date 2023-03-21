import React from 'react'
import { Loginbtn } from './LoginButtonStyles'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export const LoginButton = () => {
  return (
    <Loginbtn>
      <Link to="/auth/login">
        <Button>
          Login
        </Button>
      </Link>
    </Loginbtn>
  )
}
