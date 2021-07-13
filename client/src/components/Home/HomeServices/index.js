import React, { useEffect, useRef, useState } from 'react'
import {  Grid, Box, Typography, List, ListItem } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import useStyles from './HomeServicesStyle'
import classNames from 'classnames'
import serviceImg from '../../../assets/images/services.JPG'
import IndividualService from './IndividualService'

const HomeServices = () => {
    const classes = useStyles()
    const {t, i18n} = useTranslation()
    const serRef = useRef()
    const [ offset, setOffset] = useState(false)
    const [ onset, setOnset] = useState(false)
    const [ services ] = useState([{name: 'Geotechnical', code: 'GEO'}, {name: 'Material', code: 'MAT'}])
    const [height, setHeight] = useState()

    // console.log(serRef)

    useEffect(() => {
        let isSubscribed = true

        window.addEventListener('scroll', () => {
            if( serRef && window.scrollY > 3500 && window.scrollY < (height + 2900) ) {
                setOffset(true)
                setOnset(false)
            } else if ( serRef && window.scrollY > (height + 2901) && isSubscribed ) {
                setOnset(true)
                setOffset(false)
            } else {
                setOffset(false)
                setOffset(false)
            }
        })

        const heightHandler = () => {
            setHeight(serRef.current.offsetHeight)
        }

        heightHandler()

        return () => ( isSubscribed = false )
    },[height])

    return (
        <Box className={classes.services}>
            <Grid container>
                <Grid item lg={4} className={classNames('servicesLeft')} style={{ height: `${(services.length * 31.7 ) + 45 }rem` }} >
                    <Box className={classNames('servicesListHeader')}>
                        <Typography className={classNames( i18n.language === 'en' ? 'servicesListTitle' : 'servicesListTitle arh')}>
                            { i18n.language === 'en' ? '10+' : '١٠+'} <br />
                            <span>{ i18n.language === 'en' ? 'Services' : 'خدمات'}</span>
                        </Typography>
                        <img src={serviceImg} alt="services video" className={classNames('servicesListVideo')}/>
                    </Box>
                    <Box className={classNames( i18n.language === 'en' ? 'servicesContentList' : 'servicesContentList arb')}>
                        { services && services.map( (service, index) => (
                            <IndividualService service={service} key={index}/>
                        )) }
                    </Box>
                </Grid>
                <Grid item lg={8} className={classNames( i18n.language === 'en' ?  `servicesRight` : `servicesRight ar`)} ref={serRef}>
                    <Box className={classNames(i18n.language === 'en' ? 'serviceTitles' : 'serviceTitles ar')}>
                        <Box className={classNames(i18n.language === 'en' ? `${ offset ?  'static' : ''} ${ onset ?  'staticbase' : ''}` : `${ offset ?  'static ars' : ''} ${ onset ?  'staticbase sb' : ''}`)}>
                            <Typography variant="h2" className={classNames(i18n.language === 'en' ? 'servicesTitlesHeader' : 'servicesTitlesHeader art')}>{t('services_home')}</Typography>
                            <List className={classNames(i18n.language === 'en' ? 'servicesTitlesContent' : 'servicesTitlesContent art')}>
                                { i18n.isInitialized === true && t('services_types', { returnObjects: true }).map( (service, index) => (
                                    <ListItem className={classNames('servicesTitleList')} key={index}>{service}</ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HomeServices
