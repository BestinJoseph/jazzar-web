import React from 'react'
import { Container, Grid, Typography, Box } from '@material-ui/core'
import classNames from 'classnames'

import useStyles from './LocationStyles'

const Location = ({ locations }) => {
    const classes = useStyles()

    return (
        <Container style={{ padding: '0rem' }}>
            <Grid container className={classes.location}>
                <Grid item lg={7}>
                    <Typography variant="h5" className={classNames('locationTitle')}>locations</Typography>
                    <Box className={classNames('locationContainer')}>

                        { locations && locations.map((loc, index) => (
                            <Grid container className={classNames('locationInnerContainer')} key={index}>
                                <Grid item lg={6} className={classNames('branchLeftSec')}>
                                    <Typography variant="h4" className={classNames('branchTitle')}>{ loc.name }</Typography>
                                    <Typography variant="body1" className={classNames('branchAddresses')}>{ loc.address }</Typography>
                                    <Typography variant="body1" className={classNames('branchAddresses')}>{ loc.telephone }</Typography>
                                    <Typography variant="body1" className={classNames('branchAddresses')}>{ loc.fax }</Typography>
                                    <Typography variant="body1" className={classNames('branchAddresses')}>{ loc.email }</Typography>
                                    <Typography variant="body1" className={classNames('branchAddresses')}>{ loc.landmark }</Typography>
                                </Grid>
                                <Grid item lg={6} className={classNames('branchRightSec')}>
                                    { loc.telephone }
                                </Grid>
                            </Grid>
                        ))}

                    </Box>
                </Grid>
                <Grid item lg={5}>
                    
                </Grid>
            </Grid>
        </Container>
    )
}

export default Location
