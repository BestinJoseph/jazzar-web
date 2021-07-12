import React from 'react'
import { Box } from '@material-ui/core'

import ServicesBanner from './ServicesBanner'
import ServicesList from './ServicesList'
import History from '../History'

const Services = () => {
  return (
    <Box>
      <ServicesBanner />
      <ServicesList />
      <History />
    </Box>
  )
}

export default Services
