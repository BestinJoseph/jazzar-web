import React from 'react'
import { Link } from 'react-router-dom'
import {  Grid, Box, Typography, List, ListItem } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import useStyles from '../../styles/Home/Services'
import classNames from 'classnames'
import serviceImg from '../../assets/images/services.JPG'

const Services = () => {
    const classes = useStyles()
    const {t, i18n} = useTranslation()

    return (
        <Box className={classes.services}>
            <Grid container>
                <Grid item lg={4} className={classNames('servicesLeft')}>
                    <Box className={classNames('servicesListHeader')}>
                        <Typography className={classNames( i18n.language ? 'servicesListTitle' : 'servicesListTitle_arb')}>
                            { i18n.language === 'en' ? '10+' : '١٠+'} <br />
                            <span>{ i18n.language === 'en' ? 'Services' : 'خدمات'}</span>
                        </Typography>
                        <img src={serviceImg} alt="services video" className={classNames('servicesListVideo')}/>
                    </Box>
                    <Box className={classNames( i18n.language === 'en' ? 'servicesContentList' : 'servicesContentList_arb')}>
                        <Box className={classNames('servicesItem')}>
                            <Typography style={{ background: '#ddd'}} className={classNames('servicesItemIcon')}>GEO</Typography>
                            <Typography className={ classNames('servicesItemTitle')}>GeoTechnical Investigation</Typography>
                            <Typography className={ classNames('servicesDescription')}>Geotechnical A website without traffic is worthless, but a website with the right traffic consistently flowing can propel a business to new heights. Our marketers partner with you to identify your target market and get to work making your site more visible to your key market through our comprehensive digital marketing services.</Typography>
                            <Link to="/">more about geotechical</Link>
                        </Box>
                        <Box className={classNames('servicesItem')}>
                            <Typography style={{ background: '#ddd'}}  className={classNames('servicesItemIcon')}>MAT</Typography>
                            <Typography className={ classNames('servicesItemTitle')}>Material Testing</Typography>
                            <Typography className={ classNames('servicesDescription')}>The right advertising campaign can be the secret sauce to a business's success. By focusing on ROI from the starting line, our marketing team crafts PPC, display, geotargeted, and remarketing campaigns engineered for success. Experience results from digital advertising that have a tangible impact on the bottom line.</Typography>
                            <Link to="/">more about material</Link>
                        </Box>
                        <Box className={classNames('servicesItem')}>
                            <Typography style={{ background: '#ddd'}}  className={classNames('servicesItemIcon')}>CHE</Typography>
                            <Typography className={ classNames('servicesItemTitle')}>Chemical Analysis</Typography>
                            <Typography className={ classNames('servicesDescription')}>Your business is unique and you need a website that can help separate you from the competition. By focusing on the latest web standards while maintaining a keen eye for conversion-based design, the WebFX interactive team lays the creative groundwork for your digital presence with a cutting-edge website design.</Typography>
                            <Link to="/">more about chemical</Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={8} className={classNames('servicesRight')}>
                    <Box className={classNames( i18n.language === 'en' ? 'serviceTitles' : 'serviceTitles_arb')}>
                        <Typography variant="h2" className={classNames('servicesTitlesHeader')}>{t('services_home')}</Typography>
                        <List className={classNames('servicesTitlesContent')}>
                            { i18n.isInitialized === true && t('services_types', { returnObjects: true }).map( (service, index) => (
                                <ListItem className={classNames('servicesTitleList')} key={index}>{service}</ListItem>
                            ))}
                        </List>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Services
