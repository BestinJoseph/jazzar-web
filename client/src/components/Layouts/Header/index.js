/* eslint-disable import/no-anonymous-default-export */
import React, { useRef } from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { Box, Button, Grid, Typography, useScrollTrigger, Slide } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next'

import useStyles from './HeaderStyles'

export default (props) => {
    const classes = useStyles()
    const nav = useRef()
    const {t, i18n} = useTranslation()
    const history = useHistory()

    document.body.dir = i18n.dir()
    
    const HideOnScroll = (props) => {
        const { children, window } = props
        const trigger = useScrollTrigger({ target: window ? window() : undefined})

        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        )
    }

    HideOnScroll.prototype = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func
    }

    const ElevationOnScroll = (props) => {
        const { children, window } = props
        const trigger = useScrollTrigger({ target: window ? window() : undefined })

        // console.log(props)

        return React.cloneElement(children, {
            className: trigger ? 'section triggered' : 'section'
        })
    }

    ElevationOnScroll.prototype = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func
    }

    const handleOpenMenu = () => {
        nav.current.style.display = 'block'
    }

    const handleCloseMenu = () => {
        nav.current.style.display = 'none'
    }

    const handleLang = () => {
        i18n.language === 'en' ? i18n.changeLanguage('ar') : i18n.changeLanguage('en')
    }

    const handleLogo = () => {
        history.push('/')
    }

    return (
        <Box className={classes.header}>
            <HideOnScroll {...props}>
                <Box className={ classNames('top')}>
                    <Grid container alignItems="center">
                        <Grid item sm={6}>
                            <Box>
                                <Button variant="outlined" onClick={ () => handleLang() } className={classNames(`langBtn ${i18n.language === 'en' ? 'ar' : null }`)}>{t('oLang')}</Button>
                            </Box>
                        </Grid>
                        <Grid item sm={6}>
                            <Box justifyContent="flex-end" display="flex">
                                <Typography variant="h5" color="secondary" className={classNames(`contNo ${i18n.language === 'en' ? 'ar' : null }`)}>{t('cNo')}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </HideOnScroll>
            <ElevationOnScroll {...props}>
                <Box className={classNames('section')}>
                    <Box className={classNames('logo')}>
                        <Grid container alignItems="center" className={classNames('image_container')} onClick={()=> handleLogo()}>
                            <img src={logo} alt="Omar Jazzar Consulting Engineers" className={classNames('image_logo')} />
                            <Box className={classNames('h2-en')}>
                                <Typography variant="subtitle1" className={classNames(`title_text_1 ${i18n.language === 'ar' ? 'ar' : ''}`)}>{t('fCName')}</Typography>
                                <Typography variant="subtitle1" className={classNames(`title_text_2 ${i18n.language === 'ar' ? 'ar' : ''}`)}>{t('sCName')}</Typography>
                            </Box>
                        </Grid> 
                    </Box>
                    <div className={classNames('nav')} ref={nav}>
                        <ul className={classNames('nav_ul')}>
                        { i18n.isInitialized && t('navigations', { returnObjects: true}).map( (nav, index) => (
                            <NavLink to={`/${nav.link}`} activeClassName="active" exact key={index} className={classNames(`nav_ul_a ${i18n.language === 'ar' ? 'ar' : ''}`)}>
                                <li className={classNames('li')}>{ nav.name }</li>
                            </NavLink>
                        )) }
                        </ul>
                        <Box className={classNames('closeBtn')} onClick={ () => handleCloseMenu() }>
                            <CloseIcon fontSize="large"/>
                        </Box>
                    </div>
                    <Box className={classNames('right')}>
                        <Box>
                            <Button variant="outlined" onClick={ () => handleLang() } className={classNames(`langBtn ${i18n.language === 'en' ? 'ar' : null }`)}>{t('oLang')}</Button>
                        </Box>
                        <Box className={classNames('menu')}>
                            <MenuIcon className={classNames('hamburgerIcon')} onClick={ () => handleOpenMenu() }/>
                        </Box>
                    </Box>
                </Box>
            </ElevationOnScroll>
        </Box>
    )
}