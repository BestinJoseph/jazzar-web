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
                <Box className={classNames('textTitleImageContainer')}>
                    <img src={service.images && service.images[0].path} alt="servicesImage" className={classNames('textTitleImage')}/>
                </Box>
                { service && service.length > 0 ? 
                    <Box className={classNames('singleSeriveScopeContainer')}>
                        <Typography variant="h4" className={classNames('singleServiceScopeTitle')}>Scope</Typography>
                        <Box className={classNames('singleServiceScopeListContainer')}>
                            { service && service.scope.map( (sc, index) => (
                                <Box key={index} className={classNames('singleServiceScopeList')}>
                                    <Typography>{sc}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                : null }
                <Box style={{marginTop: '4rem', display: 'none'}}>
                    <Typography variant="h4">Specialized</Typography>
                    <Box >
                        { service && service.specialized.map( (sc, index) => (
                            <Box key={index}>
                                <Typography >{sc}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SingleServiceContent
