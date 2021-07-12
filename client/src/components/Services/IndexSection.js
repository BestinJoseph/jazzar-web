import React from 'react'
import { Box, Container, Typography, Grid } from '@material-ui/core'
import classNames from 'classnames'

import useStyles from '../../styles/ServicesStyles/IndexSectionStyles'
import { useTranslation } from 'react-i18next'

const IndexSection = () => {
    const classes = useStyles()
    const { i18n } = useTranslation()

    return (
        <Box className={classes.indexsection}>
            <Container style={{ padding: '0rem' }}>
                <Typography variant="h4" className={classNames('servicesTitle')}>OJCO Services that Grow <span>Traffic and Increase Revenue</span></Typography>
                <Grid container>
                    <Grid item lg={6} className={classNames( i18n.language === 'en' ? 'servicesLeftContainer' : 'servicesLeftContainer_arb')}>
                        <Typography variant="body1" className={classNames('servicesTopBody')}>If you're looking for serious business growth, SEO, or search engine optimization is the strategy for you. Why does it work? Simple! It targets the users that are most likely to convert on your website, and takes them there.</Typography>
                        <Typography variant="body1" className={classNames('servicesTopBody')}>If you're looking for serious business growth, SEO, or search engine optimization is the strategy for you. Why does it work? Simple! It targets the users that are most likely to convert on your website, and takes them there.</Typography>
                        <Typography variant="body1" className={classNames('servicesTopBody')}>If you're looking for serious business growth, SEO, or search engine optimization is the strategy for you. Why does it work? Simple! It targets the users that are most likely to convert on your website, and takes them there.</Typography>
                    </Grid>
                    <Grid item lg={6} className={classNames( i18n.language === 'en' ? 'servicesRightContainer' : 'servicesRightContainer_arb')}>
                        <Box className={classNames('rightContainer')}>
                            <Typography variant="body1" className={classNames('serviceRightTopText')}>We get it — sometimes you want to speak straight to the source. To speak with a Digital Marketing Specialist about our marketing services, feel free to give us a call at:</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default IndexSection
