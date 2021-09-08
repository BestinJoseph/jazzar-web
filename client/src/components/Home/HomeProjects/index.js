import { Container, Typography, Box, Grid } from '@material-ui/core'
import classNames from 'classnames'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import moment from 'moment'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import useStyles from './HomeProjectsStyles'
import Zigzag from '../../../assets/images/zic_zag_outline_abstract.svg'
import ConeShape from '../../../assets/images/cone_shape_abstract_yellow.svg'

const Popular = (props) => {
    const classes = useStyles()
    const {t, i18n} = useTranslation()
    const { projects } = useSelector( state => state.projects )
    const popularProjects = projects && projects.slice(0, 5)
    const history = useHistory()

    // console.log(projects)

    const handleClick = ({ _id }) => {
        history.push({pathname: '/projects', search: `?id=${_id}`})
    }

    return (
        <Container className={classes.popular}>
            <img src={Zigzag} alt="svg zig zag" className={classNames(i18n.language === 'en' ? 'abstract_zig_zag_top' : 'abstract_zig_zag_top arZZ')} />
            <img src={ConeShape} alt="svg cone shape" className={classNames(i18n.language === 'en' ? 'abstract_cone_right' : 'abstract_cone_right arCR')} />
            <Typography variant="h4" className={classNames('popularTitle')}>{t('project_home')}</Typography>
            { popularProjects && popularProjects.map( (proj, i) => (
                <Box className={classNames('item')} key={i} onClick={() => handleClick(proj)}>
                    <Grid container>
                        <Grid item lg={1} className={classNames('index')} xs={2}>
                            <Typography className={classNames('innerText')}>{ i + 1 }</Typography>
                        </Grid>
                        <Grid item lg={11} className={classNames('content')} xs={10}>
                            <Typography variant="h6" className={classNames('title')}>{ proj.project && proj.project.toUpperCase() }</Typography>
                            <Typography className={classNames(classes.title, 'innerSubText')}>{ `${proj.client} | ${moment(proj.start_date).format('YYYY')} - ${moment(proj.start_date).format('YYYY')}`}</Typography>
                        </Grid>
                    </Grid>
                </Box>
            ))}
            <Link to="/projects" className={classNames('linkProject')}>
                <Typography className={classNames('linkText')}>{'view more'} </Typography>
                <ArrowForwardIosIcon className={classNames('arrows')} />
                <ArrowForwardIosIcon className={classNames('arrows')} />
            </Link>
        </Container>
    )
}

export default Popular