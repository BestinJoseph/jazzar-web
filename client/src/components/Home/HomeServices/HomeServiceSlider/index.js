import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import AddIcon from '@material-ui/icons/Add'

import useStyles from './HomeServiceSliderStyles'
import archImage from '../../../../assets/images/services.JPG'

const HomeServiceSlider = ({ service }) => {
    const classes = useStyles()

    return (
        <Box className={classes.homeserviceslider} style={{height: '38rem',}} >
            <Box className={classNames('homeSerivceLeftPanel')}>
                <Typography variant="h3">{ service.name }</Typography>
                <img src={archImage} alt="ojce_architecure" className={classNames('homeServiceImage')}/>
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
