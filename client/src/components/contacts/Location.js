import React from 'react'
import { Container, Grid, Typography, Box } from '@material-ui/core'
import classNames from 'classnames'

import useStyles from '../../styles/ContactStyles/LocationStyles'

const Location = () => {
    const classes = useStyles()

    return (
        <Container style={{ padding: '0rem' }}>
            <Grid container className={classes.location}>
                <Grid item lg={7}>
                    <Typography variant="h5" className={classNames('locationTitle')}>locations</Typography>
                    <Box className={classNames('locationContainer')}>
                        <Grid container className={classNames('locationInnerContainer')}>
                            <Grid item lg={6} className={classNames('branchLeftSec')}>
                                <Typography variant="h4" className={classNames('branchTitle')}>Riyadh Branch</Typography>
                                <Typography variant="body1" className={classNames('branchAddresses')}>IBN Zaidun Street</Typography>
                                <Typography variant="body1" className={classNames('branchAddresses')}>Obyed Hospital</Typography>
                                <Typography variant="body1" className={classNames('branchAddresses')}>Al Malaz</Typography>
                                <Typography variant="body1" className={classNames('branchPosition')}>Head Office</Typography>
                            </Grid>
                            <Grid item lg={6} className={classNames('branchRightSec')}>
                                Telephone Number
                            </Grid>
                        </Grid>
                        <Grid container className={classNames('locationInnerContainer')}>
                            <Grid item lg={6} className={classNames('branchLeftSec')}>
                                <Typography variant="h4" className={classNames('branchTitle')}>Jeddah Branch</Typography>
                                <Typography variant="body1" className={classNames('branchAddresses')}>IBN Zaidun Street</Typography>
                                <Typography variant="body1" className={classNames('branchAddresses')}>Obyed Hospital</Typography>
                                <Typography variant="body1" className={classNames('branchAddresses')}>Al Malaz</Typography>
                                <Typography variant="body1" className={classNames('branchPosition')}>011.475.258.4567</Typography>
                            </Grid>
                            <Grid item lg={6} className={classNames('branchRightSec')}>
                                Telephone Number
                            </Grid>
                        </Grid>
                        <Grid container className={classNames('locationInnerContainer')}>
                            <Grid item lg={6} className={classNames('branchLeftSec')}>
                                <Typography variant="h4" className={classNames('branchTitle')}>Madinah Branch</Typography>
                                <Typography variant="body1" className={classNames('branchAddresses')}>IBN Zaidun Street</Typography>
                                <Typography variant="body1" className={classNames('branchAddresses')}>Obyed Hospital</Typography>
                                <Typography variant="body1" className={classNames('branchAddresses')}>Al Malaz</Typography>
                                <Typography variant="body1" className={classNames('branchPosition')}>013.475.258.4567</Typography>
                            </Grid>
                            <Grid item lg={6} className={classNames('branchRightSec')}>
                                Telephone Number
                            </Grid>
                        </Grid>
                        <Grid container className={classNames('locationInnerContainer')}>
                            <Grid item lg={6} className={classNames('branchLeftSec')}>
                                <Typography variant="h4" className={classNames('branchTitle')}>Qassim Branch</Typography>
                                <Typography variant="body1" className={classNames('branchAddresses')}>IBN Zaidun Street</Typography>
                                <Typography variant="body1" className={classNames('branchAddresses')}>Obyed Hospital</Typography>
                                <Typography variant="body1" className={classNames('branchAddresses')}>Al Malaz</Typography>
                                <Typography variant="body1" className={classNames('branchPosition')}>014.475.258.4567</Typography>
                            </Grid>
                            <Grid item lg={6} className={classNames('branchRightSec')}>
                                Telephone Number
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item lg={5}>
                    
                </Grid>
            </Grid>
        </Container>
    )
}

export default Location
