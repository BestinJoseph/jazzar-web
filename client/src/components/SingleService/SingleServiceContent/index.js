import React from 'react'
import { Box, Typography } from '@material-ui/core'
import classNames from 'classnames'

import useStyles from './SingleServiceContentStyles'

const SingleServiceContent = ({ service }) => {
    const classes = useStyles()

    return (
        <Box className={classes.singleservicecontent}>
            <Box className={classNames('singleservicecontainer')}>
                <Box className={classNames('innerBox')}>
                    <Typography variant="h6" className={classNames('subTitleText')}>{ service && service.subtitle }</Typography>
                    { service && service.content.split('/n').map( (con, index) => (
                        <Typography variant="h6" className={classNames('contentText')} key={index}>{ con }</Typography>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default SingleServiceContent
