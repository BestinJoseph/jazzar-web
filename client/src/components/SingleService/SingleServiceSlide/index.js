import React from 'react'
import { Box, Typography } from '@material-ui/core'
import classNames from 'classnames'

import useStyles from './SingleServiceSlideStyles'

const SignleServiceSlide = ({service}) => {
    const classes = useStyles()

    return (
        <Box className={classes.singleserviceslide}>
            <Box className={classNames('sliderTitle')}>
                <Box className={classNames('departmentTitle')}>
                    <Typography>Department</Typography>
                    <Typography variant="h4">{service && service.name}</Typography>
                </Box>
            </Box>
            <Box className={classNames('sliderContainerServices')}>
                { service ? <img src={ service.images && service.images[0].path } alt="ojce" className={classNames('serviceImage')}/> : null }
            </Box>
        </Box>
    )
}

export default SignleServiceSlide
