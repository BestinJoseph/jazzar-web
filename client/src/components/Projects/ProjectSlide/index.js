import React from 'react'
import { Box, Typography } from '@material-ui/core'
import classNames from 'classnames'

import useStyles from './ProjectSlideStyle'

const ProjectSlide = (props) => {
    const classes = useStyles()
    const { item }  = props

    return (
        <Box className={classes.slide}>
            { 
                item && item.images.map( (it, index)  => {
                    if(index > 0) return null
                    return (
                        <img src={it.path} alt="" key={index} className={classes.image}/>
                    )
                })
            }
            <Typography className={classNames('imageText')}>{ item.project }</Typography>
        </Box>
    )
}

export default ProjectSlide