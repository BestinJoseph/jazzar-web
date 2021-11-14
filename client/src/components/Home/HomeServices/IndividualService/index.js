import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@material-ui/core'
import classNames from 'classnames'
// import { useTranslation } from 'react-i18next'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import useStyles from './IndividualService'
import geoImage from '../../../../assets/images/geotechnical.JPG'
import matImage from '../../../../assets/images/material.jpg'
import surImage from '../../../../assets/images/services/survey.JPG'
import cheImage from '../../../../assets/images/services/chemical.jpg'
import strImage from '../../../../assets/images/services/structural.jpg'
import gepImage from '../../../../assets/images/services/geophysical.JPG'

const IndividualService = ({ service, index, setPressed }) => {
    const classes = useStyles()
    const inRef = useRef()

    const images = [
        { id: 0, image: geoImage}, 
        { id: 1, image: matImage}, 
        { id: 2, image: cheImage}, 
        { id: 3, image: surImage}, 
        { id: 4, image: gepImage}, 
        { id: 5, image: strImage}
    ]

    console.log(service)

    return (
        <Box className={classes.individualService} ref={inRef}>
            <Box className={classNames('servicesItem')}>
                <Box className={classNames('serviceImageContainer')}>
                    <Typography className={classNames('servicesItemIcon')}>{ service && service.abb }</Typography>
                    {
                        images.map( (image => {
                            if( image.id === index) {
                                return <img src={image.image} alt="ojce" className={classNames('serviceImage')} />
                            }
                        }))
                    }
                </Box>
                <Box className={classNames('serviceContentContainer')}>
                    <Typography className={ classNames('servicesItemTitle')}>{ service && service.name }</Typography>
                    <Typography className={ classNames('servicesDescription')}>{ service && service.content.substring(0, 245) + '...' }</Typography>
                    <Link to={ `/services/${service.slug}` } className={ classNames('serviceLink') }>
                        <Typography variant="body1" className={classNames('serviceLinkText')}>find more</Typography>
                        <ArrowForwardIosIcon fontSize="small" className={classNames('serviceLinkIcon')} />
                        <ArrowForwardIosIcon fontSize="small" className={classNames('serviceLinkIcon')} />
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default IndividualService
