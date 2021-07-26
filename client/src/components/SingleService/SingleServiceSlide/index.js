import React from 'react'
import { Box, Typography } from '@material-ui/core'

import useStyles from './SingleServiceSlideStyles'

import geotechnical from '../../../assets/images/geotechnical.JPG'
import classNames from 'classnames'

const SignleServiceSlide = () => {
    const classes = useStyles()

    return (
        <Box className={classes.singleserviceslide}>
            <Box className={classNames('sliderContainerServices')}>
                <img src={geotechnical} alt="ojce" className={classNames('serviceImage')}/>
            </Box>
            <Typography variant="h6" className={classNames('sliderContentServices')}>Geotechnical</Typography>
        </Box>
    )
}

export default SignleServiceSlide
