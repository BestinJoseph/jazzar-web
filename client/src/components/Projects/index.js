import React from 'react'
import { Box } from '@material-ui/core'

import ProjectLists from './ProjectLists'
import History from '../History'

const index = () => {
  return (
    <Box>
      <ProjectLists />
      <History />
    </Box>
  )
}

export default index
