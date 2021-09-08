import React from 'react'

import useStyles from './AdminStyles'

const Admin = () => {
  const classes = useStyles()

  return (
    <div className={classes.admin}>
      admin page now.....
    </div>
  )
}

export default Admin
