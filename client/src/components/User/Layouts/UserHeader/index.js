import { Box } from '@material-ui/core'
import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import useStyles from './userheaderstyles'

const UserHeaderLayout = () => {
    const classes = useStyles()

    return (
        <Box className={classes.userheader}>
            <Box>OJCECo.</Box>
            <Box className={classNames('menuLink')}>
                <Link to={{pathname: '/users'}} className={classNames('itemLink')} >Dashboard</Link>
                <Link to={{pathname: '/users/profile'}} className={classNames('itemLink')} >Profile</Link>
                <Link to={{pathname: '/users/dailyactivities'}} className={classNames('itemLink')} >Daily</Link>
            </Box>
        </Box>
    )
}

export default UserHeaderLayout
