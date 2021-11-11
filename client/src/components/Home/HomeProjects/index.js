import { Container, Typography, Box, Grid } from '@material-ui/core'
import classNames from 'classnames'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import moment from 'moment'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import useStyles from './HomeProjectsStyles'
import projectsImage from '../../../assets/images/projects.png'

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
        <Box className={classes.popular}>
            <Box className={classNames('projectListContainer')}>
                <Typography variant="h4" className={classNames('popularTitle')}>{t('project_home')}</Typography>
                <Box>
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
                </Box>
                <Link to="/projects" className={classNames('linkProject')}>
                    <Typography className={classNames('linkText')}>{'view more'} </Typography>
                    <ArrowForwardIosIcon className={classNames('arrows')} />
                    <ArrowForwardIosIcon className={classNames('arrows')} />
                </Link>
            </Box>
            
            <Box className={classNames('projectImageContainer')}>
                <img src={projectsImage} alt="ojce_projects" className={classNames('projectImage')}/>
            </Box>
        </Box>
    )
}

export default Popular