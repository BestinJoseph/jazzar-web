import React from 'react'
import { Box, List, Typography, ListItem, ListItemText } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import useStyles from './AdminLayoutStyles'
import classNames from 'classnames'

const AdminLayout = () => {
  const classes = useStyles()
  const history = useHistory()

  const handleLink = (link, e) => {
    // e.target.classList.add('active')
    history.push(`/admin/${link}`)
  }

  return (
    <Box className={classes.adminlayout}>
      <Typography variant="h6">Dashboard</Typography>
      <Box>
        <List>
          <ListItem className={classNames('listItem')} onClick={(e) => handleLink('services', e)}>
            <ListItemText primary="services" />
          </ListItem>
          <ListItem className={classNames('listItem')} onClick={(e) => handleLink('projects', e)}>
            <ListItemText primary="projects" />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default AdminLayout
