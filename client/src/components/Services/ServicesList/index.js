import React, {useEffect, useRef, useState} from 'react'
import { useHistory } from 'react-router'
import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import useStyles from './ServicesListStyles'
import geotechnical from '../../../assets/images/services/ojce_geo.jpg'
// import material from '../../../assets/images/services/ojce_mat.jpg'
import { getOneService } from '../../../actions/services'

const ServicesList = (props) => {
    const classes = useStyles()
    const history = useHistory()
    const { i18n } = useTranslation()
    const [ offset, setOffset ] = useState(false)
    const [ onset, setOnset ] = useState(false)
    const [ height, setHeight ] = useState()
    const serRef = useRef()
    const {services} = useSelector( state => state.services )
    const dispatch = useDispatch()

    useEffect(() => {
        let isSubscribed = true

        window.addEventListener('scroll', () => {
            if( serRef && window.scrollY > 800 && window.scrollY < (height + 760) ) {
                setOffset(true)
                setOnset(false)
            } else if ( serRef && window.scrollY > (height + 760) && isSubscribed ) {
                setOnset(true)
                setOffset(false)
            } else {
                setOffset(false)
                setOffset(false)
            }
        })

        const heightHandler = () => {
            if(isSubscribed) {
                setHeight(serRef.current.offsetHeight)
            }
        }

        heightHandler()

        return () => (isSubscribed = false)
    }, [height])

    const handleClick = (slug) => {
        dispatch(getOneService(slug))
        history.push(`/services/${slug}`)
    }

    return (
        <Box className={classes.sevicesList}>
            <Container className={classNames('servicesContainer')}>
                <Grid container>
                    <Grid item lg={7} className={classNames( i18n.language === 'en' ? 'servicesLeftSection' : 'servicesLeftSection_arb')}>
                        <Typography variant="h4" className={classNames('servicesHeaderTitle')}>Looking for Civil Consulting? <span>We got you covered.</span></Typography>
                        <Typography variant="body1" className={classNames('servicesHeaderBody')}>If you're looking to reap the benefits of an SEO campaign, you need a company that can provide SEO management services that earn you the highest possible return on investment (ROI). Our SEO packages can do that.</Typography>
                        { services && services.map( (ser, index) => (
                            <Box className={classNames('servicesListItems')} key={index}>
                                <Box className={classNames('itemTitleContainer')}>
                                    <Typography variant="h5" className={classNames('itemTitle')}>{index+1}. {ser.name}</Typography>
                                    <img src={geotechnical} alt="Geotechnical investigation" className={classNames('itemImage')} />
                                </Box>
                                <Typography variant="h3" className={classNames('itemHeaderTitle')}>{ ser.subtitle }</Typography>
                                <Typography variant="body1" className={classNames('itemBody')}>
                                    {ser.content.split('/n')[1] }
                                </Typography>
                                <Button className={classNames('itemBtn')} onClick={() => handleClick(ser.slug)}>view more</Button>
                            </Box>
                        ))}
                    </Grid>
                    <Grid item lg={5} ref={serRef} className={classNames('rightServiceContainer')}>
                        <Box className={classNames(i18n.language === 'en' ? `${ offset ?  'static' : ''} ${ onset ?  'staticbase' : ''}` : `${ offset ?  'static ars' : ''} ${ onset ?  'staticbase sb' : ''}`)}>
                            List of some informations......
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ServicesList
