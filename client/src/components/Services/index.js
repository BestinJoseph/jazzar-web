import React from 'react'
import { Box } from '@material-ui/core'

import IndexSection from './IndexSection'
import ServicesList from './ServicesList'

const Services = () => {
  return (
    <Box>
      <IndexSection />
      <ServicesList />
    </Box>
  )
}

export default Services
