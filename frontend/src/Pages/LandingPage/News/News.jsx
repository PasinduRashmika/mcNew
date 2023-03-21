import React from 'react'
import { Stack } from '@mui/material'
import { Paper } from './NewsStyles'
import { Box } from './NewsStyles'

export const News = () => {
  return (
    <Paper>
        <Stack direction='column' spacing='16px'>
            <Box>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus saepe a doloribus itaque 
                quaerat cumque ab fuga repellendus fugit molestiae, error fugiat architecto cum quas! Id 
                consectetur itaque sit adipisci.
            </Box>
        </Stack>
    </Paper>
  )
}
