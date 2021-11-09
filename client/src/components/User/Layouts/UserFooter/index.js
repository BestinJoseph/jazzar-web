import { Box } from '@material-ui/core'
import React from 'react'

import useStyles from './UserFooterStyles'

const UserLayoutFooter = () => {
  const classes = useStyles()

  return (
    <Box className={classes.userfooter}>
        User footer layout
    </Box>
  )
}

export default UserLayoutFooter
