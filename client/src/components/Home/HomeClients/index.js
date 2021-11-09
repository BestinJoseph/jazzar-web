import React, { useRef, useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import ArrowForwardIosTwoToneIcon from '@material-ui/icons/ArrowForwardIosTwoTone';
import classNames from 'classnames'
import { useTranslation } from 'react-i18next';

import useStyles from './HomeClientsStyle.js'
// import video from '../../../assets/videos/ojce.mp4'
import imageJeddah from '../../../assets/images/jeddah_strategic_tank.jpg'

const HomeClients = () => {
    const classes = useStyles()
    const [play, setPlay] = useState(false)
    const videoRef = useRef(false)
    const { i18n } = useTranslation()

    const handlePlay = () => {
        if(play === false) {
            videoRef.current.play()
            setPlay(true)
        } else {
            videoRef.current.pause()
            setPlay(false)
        }
    }

    // <video ref={videoRef} className={classNames('video')}>
    //     <source src={video} type="video/mp4" /> - goes in video folder
    // </video>

    return (
        <Box className={classes.clients}>
            <Box className={classNames('imageContainer')}>
                <img src={imageJeddah} alt="ojce" className={classNames('imageClass')} />
            </Box>
            <Box className={classNames( i18n.language === 'en' ? 'clientContentContainer' : 'clientContentContainer_arb')}>
                <ArrowForwardIosTwoToneIcon className={classNames('arrowBtn')} onClick={handlePlay}/>
                <Typography variant="h2" className={classNames('textInside')}>A Look Inside OJCO</Typography>
            </Box>
        </Box>
    )
}

export default HomeClients
