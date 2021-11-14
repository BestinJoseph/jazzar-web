import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import AddIcon from '@material-ui/icons/Add'

import useStyles from './HomeServiceSliderStyles'
import archImage from '../../../../assets/images/services.JPG'

const HomeServiceSlider = ({ service }) => {
    const classes = useStyles()

    console.log(service)

    const handleImage = () => {
        if ( service.images.length > 0 ) {
            return service.images[0].path
        } else {
            return archImage
        }
    }

    return (
        <Box className={classes.homeserviceslider} style={{height: '38rem',}} >
            <Box className={classNames('homeSerivceLeftPanel')}>
                <Typography variant="h3">{ service.name }</Typography>
                <Box className={classNames('homeServiceImageContainer')}>
                    <img src={ handleImage() } alt="ojce_architecure" className={classNames('homeServiceImage')}/>
                </Box>
            </Box>
            <Box className={classNames('homeSerivceRightPanel')}>
                <Box className={classNames('rightPanelContent')}>
                    <Typography variant="h6" className={classNames('homeRightHeader')}>{ service.department }</Typography>
                    <Typography variant="body1" className={classNames('homeRightText')}>{ service.subtitle }</Typography>
                    <Link to="/projects" className={classNames('homeServiceExploreBtn')}>View service detailed</Link>
                </Box>
                <Box>
                    <AddIcon className={classNames('homeServiceAddBtn')} />
                </Box>
            </Box>
        </Box>
    )
}

export default HomeServiceSlider
