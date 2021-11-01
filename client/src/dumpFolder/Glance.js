import React from 'react'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import useStyles from '../../styles/AboutStyles/GlanceStyles'

const Glance = () => {
    const classes = useStyles()
    const { i18n } = useTranslation()
  
    return (
        <Container className={classes.glance}>
            <Box className={classNames('glanceTitleContainer')}>
                <Typography variant="h3" className={classNames('glanceTitle')}>We're a leader in Civil Consulting Engineering Company</Typography>
            </Box>
            <Grid container className={classNames('glanceContainer')}>
                <Grid item lg={6} className={classNames('glanceLeftShell')}>
                    <Typography variant="body1" className={classNames('glanceBodyText')}>WebFX is a tech-enabled digital marketing solutions provider, and we create custom strategies for each of our clients based on their needs and goals.</Typography>
                    <Typography variant="body1" className={classNames('glanceBodyText')}>Our team is made up of award-winning marketers, designers, and developers, and we know what it takes to get real results online. We also keep the focus on the metrics that mean the most, like leads and revenue generated. We know that hitting these goals is what moves businesses forward, and we believe that our clients' success is the best measure of our own performance</Typography>
                    <Typography variant="body1" className={classNames('glanceBodyText')}>Through our years of experience, we've also learned that while each channel has its own set of advantages, they all work best when strategically paired with other channels. That's why we offer full-service strategies to each of our clients, and use a combination of digital channels to increase visibility, conversions, and revenue.</Typography>
                </Grid>
                <Grid item lg={6} className={classNames( i18n.language === 'en' ? 'glanceLeftShell' : 'glanceLeftShell_arb')}>
                    <Typography variant="body1" className={classNames('glanceBodyText')}>WebFX is a tech-enabled digital marketing solutions provider, and we create custom strategies for each of our clients based on their needs and goals.</Typography>
                    <Typography variant="body1" className={classNames('glanceBodyText')}>Our team is made up of award-winning marketers, designers, and developers, and we know what it takes to get real results online. We also keep the focus on the metrics that mean the most, like leads and revenue generated. We know that hitting these goals is what moves businesses forward, and we believe that our clients' success is the best measure of our own performance</Typography>
                    <Typography variant="body1" className={classNames('glanceBodyText')}>Through our years of experience, we've also learned that while each channel has its own set of advantages, they all work best when strategically paired with other channels. That's why we offer full-service strategies to each of our clients, and use a combination of digital channels to increase visibility, conversions, and revenue.</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Glance
