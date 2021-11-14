import React, { useEffect, useRef, useState } from 'react'
import {  Box, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import useStyles from './HomeServicesStyle'
import classNames from 'classnames'
import serviceImg from '../../../assets/images/services_image.jpg'
import geoImage from '../../../assets/images/geotechnical.JPG'
import IndividualService from './IndividualService'
import { useSelector } from 'react-redux'
import HomeServiceSlider from './HomeServiceSlider'
import { Link } from 'react-router-dom'

const HomeServices = () => {
    const classes = useStyles()
    const { i18n} = useTranslation()
    const serRef = useRef(0)
    const [ offset, setOffset] = useState(false)
    const [ onset, setOnset] = useState(false)
    const [height, setHeight] = useState()
    const { services } = useSelector( state => state.services )
    const _isMounted = useRef(true)

    useEffect(() => {

        window.addEventListener('scroll', () => {
            if( window.scrollY > 3500 && window.scrollY < (3500 + 2320) ) {
                setOffset(true)
                setOnset(false)
            } else if ( window.scrollY > (3500 + 2320) ) {
                setOffset(false)
                setOnset(true)
            } else {
                setOffset(false)
                setOnset(false)
            }
        })

        const heightHandler = () => {
            setHeight(serRef.current.offsetHeight)
        }

        heightHandler()

        return () => { _isMounted.current = false}
    },[height])

    // console.log(services)

    return (
        <Box className={classes.services}>
            <Box className={classNames( i18n.language === 'en' ? 'servicesContentList' : 'servicesContentList arb')}>
                <Box className={classNames('serviceHeaderContainer')}>
                    <Box>
                        <Typography variant="h3" className={classNames('serviceHeaderTitle')}>What we do for our clients?</Typography>
                        <Typography variant="h6" className={classNames('serviceHeaderSubTitle')}>Our expertises eager to assist you.</Typography>
                    </Box>
                    <Box>
                        <Link to="/services" className={classNames('servicesHeaderBtn')}>all services</Link>
                    </Box>
                </Box>
            </Box>
            {
                services && services.map( (service, index) => (
                    <HomeServiceSlider key={index} service={service} />
                ))
            }
            <Typography>Some services information goes here.</Typography>
        </Box>
    )
}

export default HomeServices
