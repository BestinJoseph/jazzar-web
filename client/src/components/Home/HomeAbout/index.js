import React from 'react'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import useStyles from './HomeAboutStyles'
import image from '../../../assets/images/pres.jpg'
import circle from '../../../assets/images/circle-abstract.png'
import square from '../../../assets/images/square-abstract.png'

const About = () => {
  const classes = useStyles()
  const {t, i18n} = useTranslation()

  return (
    <Box className={classes.aboutMain}>
      <Container className={classNames('about')}>
        <Grid container className={classNames('container')}>
          <Grid item lg={6} className={ classNames(i18n.language === 'en' ? 'topContent' : 'topContent arTC') }>
            <Box>
              <Typography variant="h4" className={ classNames(i18n.language === 'en' ? 'title' : 'title arTI')}>{t('about_home')}</Typography>
              <Typography variant="body1" className={ classNames( i18n.language === 'en' ? 'body' : 'body arBO' )}>{t('about_home_inner')}</Typography>
              <Link to="/about" className={classNames('aboutBtn')}>About OJCE</Link>
            </Box>
          </Grid>
          <Grid item lg={6} className={classNames('absoluteGrid')}>
            <Box className={classNames( i18n.language === 'en' ? 'absoluteCon' : 'absoluteCon arb')}>
              <img src={image} alt="OJCE President" style={{}} className={classNames('aboutImg')} />
              <img src={circle} alt="circle ojce" className={classNames(i18n.language === 'en' ? 'circleAbstract' : 'circleAbstract arCC')} />
              <img src={square} alt="circle ojce" className={classNames('squareAbstract')} />
              <span className={classNames(i18n.language === 'en' ? 'squareFull' : 'squareFull arFL' )}></span>
              <span className={classNames(i18n.language === 'en' ? 'squareLowFull' : 'squareLowFull arFLL')}></span>
              <img src={square} alt="circle ojce" className={classNames(i18n.language === 'en' ? 'squareAbstractLow' : 'squareAbstractLow arSAL')} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Grid container className={classNames( 'bottomContent' )}>
        <Grid item lg={6} className={classNames(classes.bottomContent, 'contentSec')}>
          <Box className={classNames( i18n.language === 'en' ? 'textSec' : 'textSec arTS')}>
            <Typography variant="h4" className={classNames(i18n.language === 'en' ? 'textSecTitle' : 'textSecTitle arTST')}>{t('about_home_explain')}</Typography>
            {t('about_home_explain_content').split(' / ').map( (text, index) => (
              <Typography variant="body1" className={classNames(i18n.language === 'en' ? 'textSecBody' : 'textSecBody arTSB')} key={index}>{text}</Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default About
