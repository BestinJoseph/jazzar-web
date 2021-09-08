import React, { useRef } from 'react'
import { Box, Typography } from '@material-ui/core'

import useStyles from './SingleServiceImagesStyles'
import classNames from 'classnames'

const SingleServiceImages = ({service}) => {
    const classes = useStyles()
    const cRef = useRef()

    return (
        <Box className={classes.singleServiceImages} ref={cRef}>
            { service.images && service.images.map((image, index) => {
                if(index > 3) return false;
                return (
                    <Box className={classNames('imageContainer')} key={index}>
                        <img src={image.path} alt="one project" className={classNames('serviceDisplayImage')}/>
                        <Typography variant="body1" className={classNames('imageText')}>{ image.name }</Typography>
                    </Box>
                )
            })}
        </Box>
    )
}

export default SingleServiceImages
