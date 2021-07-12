/* eslint-disable import/no-anonymous-default-export */
import { Container, Box, Typography, Grid, Paper, List, ListItem } from '@material-ui/core'
import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import useStyles from '../../styles/layouts/Footer'

const Footer = () => {
    const classes = useStyles()

    return (
        <Box className={classes.footer}>
            <Container fixed className={ classNames('container')}>
                <Paper className={ classNames('top') } elevation={3}>
                    <Grid container className={ classNames('hess')} justify="space-between">
                        <Grid item lg={8}>
                            <Box className={ classNames(classes.hess, 'contain')}>
                                <Grid container alignItems="center">
                                    <Grid item lg={1}>
                                        Pho
                                    </Grid>
                                    <Grid item lg={11}>
                                        <Typography variant="h6">Ready to speak with a marketing expert? Give us a ring</Typography>
                                        <Typography variant="h4">800 965 4567</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item lg={4}>
                            <Grid container>
                                <Grid item lg={4} display="flex">
                                    <Box textAlign="center">
                                        <Typography variant="h4">16M</Typography>
                                        <Typography variant="body1">Expertise hours</Typography>
                                    </Box>
                                </Grid>
                                <Grid item lg={5}>
                                    <Box textAlign="center">
                                        <Typography variant="h4">300+</Typography>
                                        <Typography variant="body1">Digital Marketing Masters on Staff</Typography>
                                    </Box>
                                </Grid>
                                <Grid item lg={3}>
                                    <Box textAlign="center">
                                        <Typography variant="h4">1128</Typography>
                                        <Typography variant="body1">Websites Launched</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
                
                <Grid container className={ classNames('footer__context')}>
                    <Grid item lg={3} xs={12}>
                        <Typography className={classNames('footerTitleText')}>Services</Typography>
                        <List className={classNames('ul')}>
                            <ListItem className={classNames('list')}><Link to="/">GeoTechnical</Link></ListItem>
                            <ListItem className={classNames('list')}><Link to="/">Material</Link></ListItem>
                            <ListItem className={classNames('list')}><Link to="/">Chemical</Link></ListItem>
                            <ListItem className={classNames('list')}><Link to="/">Survery</Link></ListItem>
                            <ListItem className={classNames('list')}><Link to="/">Calibration</Link></ListItem>
                            <ListItem className={classNames('list')}><Link to="/">Maintenance</Link></ListItem>
                            <ListItem className={classNames('list')}><Link to="/">Geophysical</Link></ListItem>
                        </List>
                    </Grid>
                    <Grid item lg={3} xs={12}>
                        <Typography className={classNames('footerTitleText')}>Innovative Dept.</Typography>
                        <List className={classNames('ul')}>
                            <ListItem className={classNames('list')}><Link to="/">Green Dome</Link></ListItem>
                            <ListItem className={classNames('list')}><Link to="/">Pre-Cast</Link></ListItem>
                            <ListItem className={classNames('list')}><Link to="/">Architecture</Link></ListItem>
                            <ListItem className={classNames('list')}><Link to="/">IT</Link></ListItem>
                        </List>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <Typography className={classNames('footerTitleText')}>Company</Typography>
                    </Grid>
                </Grid>

                <Grid container className={classNames('footerLower')}>
                    <Grid item lg={4} xs={12} className={classNames('leftLower')}>
                        Some Information here.
                    </Grid>
                    <Grid item lg={4} xs={12} className={classNames('middleLower')}>
                        <Typography>JAZZAR 1985 - 2021 | Celebrating 40+ years of Civil Consulting Servies</Typography>
                        <Typography>in Kingdom of Saudi Arabia</Typography>
                    </Grid>
                    <Grid item lg={4} className={classNames('rightLower')}>
                        Social media icons goes here
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer