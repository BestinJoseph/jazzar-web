import { Box, Paper, Typography } from '@material-ui/core'
import classNames from 'classnames'
import React from 'react'

import useStyles from './UserCompanyProfileStyles'

const UserCompanyProfile = () => {
    const classes = useStyles()

    return (
        <Paper className={classes.usercompanyprofile}>
            <Box className={classNames('companyprofileHeader')}>
                <Typography variant="body1">Company Profile</Typography>
            </Box>
            <Box>
                <Typography>Branch: Riyadh</Typography>
                <Typography>Department: Material</Typography>
                <Typography>Desigination: Branch Manager</Typography>
                <Typography>DOJ: 12 Apr, 2012</Typography>
            </Box>
        </Paper>
    )
}

export default UserCompanyProfile
