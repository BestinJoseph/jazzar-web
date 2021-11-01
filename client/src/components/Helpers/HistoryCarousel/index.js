import React from 'react'
import { Box } from '@material-ui/core'
import classNames from 'classnames'
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';

import NextArrow from '../NextArrow'
import PrevArrow from '../PrevArrow'
import useStyles from './HistoryCarousel'

import one from '../../../assets/images/carousel/ojce_material.jpg'
import two from '../../../assets/images/carousel/ojce_geotechnical.jpg'
import three from '../../../assets/images/carousel/ojce_survey.jpg'
import four from '../../../assets/images/carousel/ojce_pullout.jpg'


const HistoryCarousel = ({width}) => { // 
    const { i18n } = useTranslation()
    const classes = useStyles()
    // const width = 900;

    // console.log(width)

    const slides = [
        { name: 'slide One', image: one },
        { name: 'slide Two', image: two },
        { name: 'slide Three', image: three },
        { name: 'slide Four', image: four },
    ]

    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    }

    return (
        <Box className={ i18n.language === 'en' ? classes.historyRightPanel : `${classes.historyRightPanel} ${classes.arRP}` }>
            <Box className={ classNames('ImagesSection')} style={{ width: width < 800 ? width * (97 / 100) : `${width - (width/2)}px` }}>
                <Slider {...setting}>
                    { slides.map( (photo, index) => (
                        <Box className={ classNames('imageContainer')} key={index} >
                            <img src={photo.image} alt="OJCE History One" />
                        </Box>
                    ))}
                </Slider>
            </Box>
        </Box>
    )
}

export default HistoryCarousel
