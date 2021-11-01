import { Button, Grid, Typography, Box } from '@material-ui/core'
import React from 'react'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import useWindowSize from '../RJHooks/useWindowSize'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import useStyles from './HistoryStyles'
import HistoryCarousel from '../Helpers/HistoryCarousel';

const HomeHistory = () => {
    const classes = useStyles()
    const { i18n } = useTranslation()
    const {width} = useWindowSize()

    return (
        <Grid className={classes.history}>
            <Grid container className={classNames('historyContainer')}>
                <Grid item lg={7} className={classNames('historyLeftPanel')} xs={12}>
                    <Box className={classNames( i18n.language === 'en' ? 'leftHistoryContainer' : 'leftHistoryContainer arHC')}>
                        <Typography variant="h5" className={classNames('historySubTitle')}>Unlock revenue growth for your business with</Typography>
                        <Typography variant="h4" className={classNames('historyTitle')}>our world - class expertise.</Typography>
                        <Typography variant="body1" className={classNames('historyBody')}>Our team is made up of elite designers, developers, and marketers. For us, it’s not just a job — it’s a driving passion. And that passion has led to some of the best work on the web.</Typography>
                        <Typography variant="body1" className={classNames('historyBody')}>Don't take our word for it! We're proud of our many customer testimonials on Clutch. We've earned a 4.9 out of 5 with over 200 ratings.</Typography>
                        <Button variant="outlined" color="primary" className={classNames('historyBtn')}>More about History</Button>
                    </Box>
                </Grid>
                <Grid item lg={5} className={ classNames('rightContainer')} xs={12}>
                    <HistoryCarousel width={width} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HomeHistory
