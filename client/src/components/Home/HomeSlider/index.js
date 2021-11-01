import React from 'react'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import GetAppIcon from '@material-ui/icons/GetApp';

import useStyles from './HomeSliderStyles'
import Banner from '../../../assets/images/banner.jpg'

const HomeSlider = () => {
    const classes = useStyles()
    const { t, i18n } = useTranslation()

    return (
        <Box className={ classes.slider }>
            <img src={Banner} alt="OJCE Banner" className={ classNames('sliderImg')} />
            <Container className={ classNames(`container ${i18n.language === 'ar' ? 'ar' : '' }`)}>
                <Grid container className={ classNames(`content`)}>
                    <Grid item lg={7}>
                        <Typography variant="h4" language="ara" className={classNames(`textMain ${i18n.language === 'ar' ? 'ar' : '' }`)}>{t('fCName')}</Typography>
                        <Typography variant="h4" className={classNames(`textMain ${i18n.language === 'ar' ? 'ar' : '' }`)}>{t('sCName')}</Typography>
                        <Typography variant="h4" className={classNames(`textContent ${i18n.language === 'ar' ? 'ar' : '' }`)}>{t('slider_content')}</Typography>
                    </Grid>
                    <Grid item lg={5} className={classNames('btnSection')}>
                        <Box className={classNames('btnContainer')}>
                            <GetAppIcon className={classNames(`btnIcon ${ i18n.language === 'ar' ? 'ar' : ''}`)} />
                            <Typography variant="h5" className={classNames('btnText')}>Get Pre-Q</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default HomeSlider
