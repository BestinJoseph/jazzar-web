/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Box } from '@material-ui/core'

import useStyles from '../../styles/AboutStyles/index'
import TopSection from './TopSection'
import Glance from './Glance'
import Certifications from './Cerifications'
import History from './History'

export default () => {
    const classes = useStyles()

    return (
        <Box className={classes.about}>
            <TopSection />
            <Glance />
            <Certifications />
            <History />
        </Box>
    )
}