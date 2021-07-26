import React, { useRef, useState } from 'react'
import { Box, Typography } from '@material-ui/core'

import useStyles from './SingleServiceImagesStyles'
import classNames from 'classnames'

const SingleServiceImages = () => {
    const classes = useStyles()
    const cRef = useRef()
    const images = [{image:'', name: 'One Project'},{image:'', name: 'Two Project'},{image:'', name: 'Three Project'},{image:'', name: 'Four Project'}]

    // console.log(cRef.current)

    // const gridComputedStyle = window.getComputedStyle(cRef)
    // const gridColumnCount = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length
    // console.log(gridColumnCount)

    return (
        <Box className={classes.singleServiceImages} ref={cRef}>
            { images && images.map((image, index) => (
                <Box className={classNames('imageContainer')} key={index}>
                    <img src="" alt="one project" />
                    <Typography variant="body1" className={classNames('imageText')}>{ image.name }</Typography>
                </Box>
            ))}
        </Box>
    )
}

export default SingleServiceImages
