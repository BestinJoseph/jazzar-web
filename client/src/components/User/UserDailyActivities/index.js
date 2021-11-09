import React from 'react'
import { Box, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { useHistory } from 'react-router'
import classNames from 'classnames'

import useStyles from './UserDailyActivitiesStyles'
import ProManageHome from '../../promanage/Home'
import MonthSlider from './MonthSlider'

const UserDailyActivities = () => {
    const classes = useStyles()
    const { push } = useHistory()

    const handleProjectAdd = () => {
        push('/users/dailyactivities/project/add')
    }

    return (
        <Box className={classes.userdailyactivities}>
            <Box className={classNames('userdailyHeader')}>
                <Typography className={classNames('userDailyTitle')} >Daily Project Activities</Typography>
                <AddIcon onClick={() => handleProjectAdd()} className={classNames('userDailyAddBtn')} />
            </Box>
            <Box>
                <MonthSlider />
            </Box>
        </Box>
    )
}

export default UserDailyActivities
