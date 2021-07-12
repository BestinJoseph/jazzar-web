import { Box, Grid, Typography } from '@material-ui/core'
import classNames from 'classnames'
import React from 'react'
import Slider from 'react-slick'
import { useTranslation } from 'react-i18next'

import useStyles from './AboutHistoryStyles'
import HistoryCarousel from '../Helpers/HistoryCarousel'

const AboutHistory = () => {
    const classes = useStyles()
    const { i18n } = useTranslation()

    return (
        <Box className={classes.history}>
            <Grid container>
                <Grid item lg={7}>
                    <Typography variant="h3" className={classNames('historyTitle')}>History</Typography>
                    <Typography variant="h2" className={classNames('historySubTitle')}>one of the very first consulting Engineers in Kingdom</Typography>
                    <Typography variant="body1" className={classNames('historyBody')}>OJCE is one of the very first Geotechnical and Materials Testing Consultants in the Kingdom of Saudi Arabia. It was initially established as a partnership with “Trow Group Ltd.” Of Ontario Canada in the year 1979 (1400 H), and later registered with the Ministry of Commerce and Industry (License # 219) to be called “Trow Middle East”.</Typography>
                </Grid>
                <Grid item lg={5} className={ classNames('rightContainer')}>
                    <HistoryCarousel />
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutHistory
