import React, {useEffect, useRef, useState} from 'react'
import { useHistory } from 'react-router'
import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import classNames from 'classnames'

import useStyles from './ServicesListStyles'
import geotechnical from '../../../assets/images/services/ojce_geo.jpg'
import material from '../../../assets/images/services/ojce_mat.jpg'
import { useTranslation } from 'react-i18next'

const ServicesList = (props) => {
    const classes = useStyles()
    const history = useHistory()
    const { i18n } = useTranslation()
    const [ offset, setOffset] = useState(false)
    const [ onset, setOnset] = useState(false)
    const [height, setHeight] = useState()
    const serRef = useRef()

    // console.log(height)

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
            setHeight(serRef.current.offsetHeight)
        }

        heightHandler()

        return () => (isSubscribed = false)
    }, [height])

    const handleClick = () => {
        history.push('/services/1')
    }

    return (
        <Box className={classes.sevicesList}>
            <Container className={classNames('servicesContainer')}>
                <Grid container>
                    <Grid item lg={7} className={classNames( i18n.language === 'en' ? 'servicesLeftSection' : 'servicesLeftSection_arb')}>
                        <Typography variant="h4" className={classNames('servicesHeaderTitle')}>Looking for Civil Consulting? <span>We got you covered.</span></Typography>
                        <Typography variant="body1" className={classNames('servicesHeaderBody')}>If you're looking to reap the benefits of an SEO campaign, you need a company that can provide SEO management services that earn you the highest possible return on investment (ROI). Our SEO packages can do that.</Typography>
                        <Box className={classNames('servicesListItems')}>
                            <Box className={classNames('itemTitleContainer')}>
                                <Typography variant="h5" className={classNames('itemTitle')}>1. Geotechnical Investigation</Typography>
                                <img src={geotechnical} alt="Geotechnical investigation" className={classNames('itemImage')} />
                            </Box>
                            <Typography variant="h3" className={classNames('itemHeaderTitle')}>Connect With Your Audience: OTT & Connected TV Services</Typography>
                            <Typography variant="body1" className={classNames('itemBody')}>We have built a reputation for unmatched reliability in supplying crude oil to energy markets around the world. Capture your market's attention (and wallets) with OTT and connected TV services that make audience targeting, ad purchasing, and measuring ROI as easy as 1, 2, 3. Keep reading to learn more about using OTT and connected TV (CTV) to grow your company's market share!</Typography>
                            <Button className={classNames('itemBtn')} onClick={() => handleClick()}>view more</Button>
                        </Box>
                        <Box className={classNames('servicesListItems')}>
                            <Box className={classNames('itemTitleContainer')}>
                                <Typography variant="h5" className={classNames('itemTitle')}>2. Material Testing</Typography>
                                <img src={material} alt="Geotechnical investigation" className={classNames('itemImage')} />
                            </Box>
                            <Typography variant="h3" className={classNames('itemHeaderTitle')}>Connect With Your Audience: OTT & Connected TV Services</Typography>
                            <Typography variant="body1" className={classNames('itemBody')}>We have built a reputation for unmatched reliability in supplying crude oil to energy markets around the world. Capture your market's attention (and wallets) with OTT and connected TV services that make audience targeting, ad purchasing, and measuring ROI as easy as 1, 2, 3. Keep reading to learn more about using OTT and connected TV (CTV) to grow your company's market share!</Typography>
                            <Button className={classNames('itemBtn')} onClick={() => handleClick()}>view more</Button>
                        </Box>
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
