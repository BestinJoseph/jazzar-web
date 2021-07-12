import { Box, Grid, Typography } from '@material-ui/core'
import classNames from 'classnames'
import React from 'react'
import Slider from 'react-slick'
import { useTranslation } from 'react-i18next'

import useStyles from '../../styles/AboutStyles/HistoryStyles'
import NextArrow from '../Helpers/NextArrow'

import one from '../../assets/images/carousel/ojce_material.jpg'
import two from '../../assets/images/carousel/ojce_geotechnical.jpg'
import three from '../../assets/images/carousel/ojce_survey.jpg'
import four from '../../assets/images/carousel/ojce_pullout.jpg'
import HistoryCarousel from '../Helpers/HistoryCarousel'

const History = () => {
    const classes = useStyles()
    const { i18n } = useTranslation()

    const slides = [
        { name: 'slide One', image: one },
        { name: 'slide Two', image: two },
        { name: 'slide Three', image: three },
        { name: 'slide Four', image: four },
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow />
    };

    return (
        <Box className={classes.history}>
            <Grid container>
                <Grid item lg={7}>
                    <Typography variant="h3" className={classNames('historyTitle')}>History</Typography>
                    <Typography variant="h2" className={classNames('historySubTitle')}>one of the very first consulting Engineers in Kingdom</Typography>
                    <Typography variant="body1" className={classNames('historyBody')}>OJCE is one of the very first Geotechnical and Materials Testing Consultants in the Kingdom of Saudi Arabia. It was initially established as a partnership with “Trow Group Ltd.” Of Ontario Canada in the year 1979 (1400 H), and later registered with the Ministry of Commerce and Industry (License # 219) to be called “Trow Middle East”.</Typography>
                    <Typography variant="body1" className={classNames('historyBody')}>During the first years Eng. Omar A. Jazzar was acting as managing Partner of “Trow Middle East”, However a few years later in 1983 (1404 H) Eng. Omar Al Jazzar decided to purchase full assets of “Trow Middle East” to name it OJCE. He retained the services and employment of all the staff including the Canadian Engineers, Geologists, Technologists and Hydrogeologists.</Typography>
                    <Typography variant="body1" className={classNames('historyBody')}>A Year later in 1984 (1405 H) Eng. Jazzar obtained a separate license from the Ministry of Commerce and Industry to operate as Geotechnical & Materials Engineers independently in the Kingdom of Saudi Arabia. It was the 3rd license of its Kind to be issued in the kingdom. OJCE has since established seven branches throughout the Kingdom to support its services in these regions. Today OJCE’s branches are all ISO 9001:2008 certified. These offices are located in the following major cities;</Typography>
                </Grid>
                <Grid item lg={5} className={ classNames('rightContainer')}>
                    <HistoryCarousel />
                </Grid>
            </Grid>
        </Box>
    )
}

export default History
