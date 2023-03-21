import React from 'react'
import ContentCard from './ContentCard'
import { Typography } from '@mui/material'
import { ContentCardIcon_1 } from './ContentCardIcon_1'
import { ContentCardIcon_2 } from './ContentCardIcon_2'
import { NewsHeading } from '../News/NewsHeading'
import { News } from '../News/News'

export const Content = () => {
  return (
    <div>
        <Typography variant='h5' sx={{textAlign:'center',margin:'10px',padding:'15px'}}>
            Welcome to Ruhuna Medical
        </Typography>
        <ContentCard />
        <Typography variant='h4' sx={{textAlign:'center',margin:'10px',padding:'15px'}}>
            Stay Safe, Stay Healthy
        </Typography>
        <ContentCardIcon_1 />
        <ContentCardIcon_2 />
        <NewsHeading />
        <News/>
    </div>
  )
}
