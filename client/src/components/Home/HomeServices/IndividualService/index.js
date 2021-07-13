import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@material-ui/core'
import classNames from 'classnames'
// import { useTranslation } from 'react-i18next'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import useStyles from './IndividualService'

const IndividualService = ({ service }) => {
    const classes = useStyles()
    const inRef = useRef()
    
    // const { i18n } = useTranslation()

    return (
        <Box className={classes.individualService} ref={inRef}>
            <Box className={classNames('servicesItem')}>
                <Typography style={{ background: '#ddd'}} className={classNames('servicesItemIcon')}>GEO</Typography>
                <Typography className={ classNames('servicesItemTitle')}>GeoTechnical Investigation</Typography>
                <Typography className={ classNames('servicesDescription')}>Geotechnical A website without traffic is worthless, but a website with the right traffic consistently flowing can propel a business to new heights. Our marketers partner with you to identify your target market and get to work making your site more visible to your key market through our comprehensive digital marketing services.</Typography>
                <Link to="/" className={ classNames('serviceLink')}>
                    <Typography variant="body1" className={classNames('serviceLinkText')}>more about geotechical</Typography>
                    <ArrowForwardIosIcon fontSize="small" className={classNames('serviceLinkIcon')} />
                    <ArrowForwardIosIcon fontSize="small" className={classNames('serviceLinkIcon')} />
                </Link>
            </Box>
        </Box>
    )
}

export default IndividualService
