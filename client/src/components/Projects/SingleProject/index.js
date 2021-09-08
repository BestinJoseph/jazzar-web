import React from 'react'
import { Box, Typography } from '@material-ui/core'
import classNames from 'classnames'
import moment from 'moment'

import useStyles from './SingleProjectStyle'

const SingleProject = ({ item }) => {
    const classes = useStyles()

    return (
        <Box className={classes.singleproject}>
            <Typography className={classNames('projectTitle')}>{item.project}</Typography>
            <Typography>Client: {item.client}</Typography>
            <Typography>{item.location}</Typography>
            <Typography>{moment(item.start_date).format('YYYY MM, DD')}</Typography>
            <Typography>{ item.end_date === undefined ? 'Till the date' : moment(item.end_date).format('YYYY MM, DD')}</Typography>
            <Typography>{item.description}</Typography>
            <Box className={classNames('projectListImageContainer')}>
                { item.images.map( (image, index) => (
                    <Box key={index} className={classNames('projectListImages')}>
                    <img src={image.path} alt={`project_ojce_${index}`} className={classNames('projectListImage')}/>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default SingleProject
