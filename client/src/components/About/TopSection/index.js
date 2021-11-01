import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import useStyles from './TopSectionStyles'

import aboutOne from '../../../assets/images/about/ojce_about_one.jpg'
import aboutTwo from '../../../assets/images/pres001.jpg'
import aboutThree from '../../../assets/images/about/ojce_about_three.jpg'
import aboutFour from '../../../assets/images/about/ojce_about_four.jpg'
import aboutFive from '../../../assets/images/about/ojce_about_five.jpg'

const TopSection = () => {
    const classes = useStyles()
    const { i18n } = useTranslation()

    return (
        <Box className={classes.topSection}>
            <Grid container className={classNames('upperBanner')} >
                <Grid item lg={3} className={classNames( i18n.language === 'en' ? 'upperOneGrid' : 'upperOneGrid_arb')} xs={12}>
                    <Box className={classNames('startUpperImage')}>
                        <img src={aboutOne} alt="ojce about One" className={classNames('oneImage')} />
                    </Box>
                </Grid>
                <Grid item lg={3} className={classNames('middleUpperImage')} xs={12}>
                    <Box className={classNames('middleUpperImage')}>
                        <img src={aboutTwo} alt="ojce about Two" className={classNames('twoImage')} />
                    </Box>
                </Grid>
                <Grid item lg={6} className={classNames('rightContent')} xs={12}>
                    <Typography variant="h4" className={classNames('contentText')}>We provide service in civil consulting areas</Typography>
                </Grid>
            </Grid>
            <Grid container className={classNames('lowerBanner')} >
                <Grid item lg={5} className={classNames( i18n.language === 'en' ? 'lowerOneGrid' : 'lowerOneGrid_arb')} xs={12}>
                    <Box className={classNames('startLowerImage')}>
                        <img src={aboutThree} alt="ojce about Three" className={classNames('threeImage')} />
                    </Box>
                </Grid>
                <Grid item lg={5} className={classNames( i18n.language === 'en' ? 'middleLowerImageMain' : 'middleLowerImageMain_arb' )} xs={12}>
                    <Box className={classNames( 'middleLowerImage')}>
                        <img src={aboutFour} alt="ojce about Four" className={classNames('fourImage')} />
                    </Box>
                </Grid>
                <Grid item lg={2} className={classNames('rightLowerContent')} xs={12}>
                    <Box className={classNames('endLowerImage')}>
                        <img src={aboutFive} alt="ojce about Four" className={classNames('fiveImage')} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TopSection
