import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@material-ui/core'
import Slider from 'react-slick'
import classNames from 'classnames'
import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux'

import { NextProArrow, PrevProArrow } from '../Helpers/ProArrow'
import useStyles from '../../styles/ProjectStyles/PopularStyles'
import ProjectSlide from './ProjectSlide'
import SingleProject from './SingleProject'
import ProjectsHeaderList from './ProjectsHeaderList'
import { getProjects } from '../../actions/projects'

const ProjectLists = () => {
    const classes = useStyles()
    const [index, setIndex] = useState(1)
    const [item, setItem] = useState({})
    const [type, setType] = useState(0)
    const { projects } = useSelector( state => state.projects )
    const [numb] = useState(7)
    const dispatch = useDispatch()

    // console.log(projects)

    useEffect(() => {
        let isSubscribed = true
        const handler = () => {
            if( isSubscribed ) {
                dispatch(getProjects())
            }
        }
        handler()
        return () => { isSubscribed = false }
    }, [dispatch])

    const settings = {
        dots: false,
        focusOnSelect: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "90px",
        slidesToShow: numb,
        speed: 1000,
        swipeToSlide: true,
        afterChange: (index, key, item) => {
            setIndex(index + 1)
            handleSlide(index)
        },
        nextArrow: <NextProArrow />,
        prevArrow: <PrevProArrow />,
    }

    const handleSelect = (category) => {
        setType(category)
    }

    const handleSlide = (slide) => {
        setItem(projects[slide])
    }

    return (
        <Box className={classes.popular}>
            <ProjectsHeaderList handleSelect={handleSelect} setType={setType} index={index} type={type} />

            <Box className={classNames('sliderContainer')}>
                <Slider {...settings}>
                    { projects && projects.length === 0 ? 
                        <Typography>No Projects Found / Fetching Projects</Typography> 
                    : 
                        projects && projects.map( (item, id) => (
                            <ProjectSlide index={item._id} item={item} key={id}/>
                        ))
                    }
                </Slider>
            </Box>
            <Box style={{ marginTop: '0rem'}}>
                { !_.isEmpty(item) && <SingleProject item={item} /> }
                <pre>
                    { JSON.stringify(item, null, 2)}
                </pre>
            </Box>
        </Box>
    )
}

export default ProjectLists
