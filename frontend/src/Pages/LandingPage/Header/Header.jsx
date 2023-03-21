import React from 'react'
import { HeaderContent } from './HeaderStyles'
import { Typography } from '@mui/material'

export const Header = () => {
  return (
    <HeaderContent>
      <div>
        <Typography variant='h1' sx={{fontSize: '38px',marginBottom:'40px'}}>
          Welcome to Medical Center <br />Administrative System
        </Typography>
        <Typography variant='body1' sx={{fontSize: '12px',marginBottom:'20px'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry <br /> Lorem Ipsum has been the industry's standard dummy
          text ever since .
        </Typography>
      </div>
    </HeaderContent>
  )
}
