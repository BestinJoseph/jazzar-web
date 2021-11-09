/* eslint-disable import/no-anonymous-default-export */
import { Container, Box, Typography, Grid, Paper, List, ListItem } from '@material-ui/core'
import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import PhoneIcon from '@material-ui/icons/Phone'

import useStyles from './FooterStyles'


const Footer = () => {
    const classes = useStyles()
    const iFrame = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.849843123702!2d46.723286415373884!3d24.663296359204512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f04412348f5d1%3A0x9c4ff87757a6f199!2sOmar%20Jazzar%20Consulting%20Engineers!5e0!3m2!1sen!2ssa!4v1636453536976!5m2!1sen!2ssa" width="400" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'

    return (
        <Box className={classes.footer}>
            <Container fixed className={ classNames('container')}>
                <Paper className={ classNames('top')} elevation={3}>
                    <Grid container className={ classNames('hess')} justify="space-between">
                        <Grid item lg={8}>
                            <Box className={ classNames('footContact')}>
                                <Grid container className={classNames('footContactContainer')}>
                                    <Grid item lg={1}>
                                        <PhoneIcon className={classNames('phoneIcon')}/>
                                    </Grid>
                                    <Grid item lg={11}>
                                        <Typography variant="h6">Ready to speak with a marketing expert? Give us a ring</Typography>
                                        <Typography variant="h4">800 965 4567</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xl={4}>
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
                    <Grid item xl={3} md={3}>
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
                    <Grid item xl={3} md={3}>
                        <Typography className={classNames('footerTitleText')}>Innovative Dept.</Typography>
                        <List className={classNames('ul')}>
                            <ListItem className={classNames('list')}><Link to="/">Green Dome</Link></ListItem>
                            <ListItem className={classNames('list')}><Link to="/">Pre-Cast</Link></ListItem>
                            <ListItem className={classNames('list')}><Link to="/">Architecture</Link></ListItem>
                            <ListItem className={classNames('list')}><Link to="/">IT</Link></ListItem>
                            <ListItem className={classNames('list')}><Link to="/promanage">Project Manager</Link></ListItem>
                        </List>
                    </Grid>
                    <Grid item xl={6} md={6}>
                        <Typography className={classNames('footerTitleText')}>Company</Typography>
                        <Box className={classNames('googleMapClass')}>
                            <div dangerouslySetInnerHTML={{ __html: iFrame}} />
                        </Box>
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