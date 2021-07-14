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
                <Typography style={{ background: '#ddd'}} className={classNames('servicesItemIcon')}>{ service && service.abb }</Typography>
                <Typography className={ classNames('servicesItemTitle')}>{ service && service.name }</Typography>
                <Typography className={ classNames('servicesDescription')}>{ service && service.content.substring(0, 245) + '...' }</Typography>
                <Link to={ `/services/${service.slug}` } className={ classNames('serviceLink') }>
                    <Typography variant="body1" className={classNames('serviceLinkText')}>find more</Typography>
                    <ArrowForwardIosIcon fontSize="small" className={classNames('serviceLinkIcon')} />
                    <ArrowForwardIosIcon fontSize="small" className={classNames('serviceLinkIcon')} />
                </Link>
            </Box>
        </Box>
    )
}

export default IndividualService
