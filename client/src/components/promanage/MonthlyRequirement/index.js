import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import moment from 'moment'
import { useHistory, useParams } from 'react-router'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import _ from 'lodash'

import useStyles from './MonthlyRequirementStyles'

const MonthlyRequirement = () => {
    const classes = useStyles()
    const { id } = useParams()
    const history = useHistory()
    const { projects } = useSelector( state => state.projects )
    const { dailies } = useSelector( state => state.dailies )
    const [project, setProject] = useState()
    const [roles, setRoles] = useState([])
    const [data, setData] = useState([])

    const query = (history.location.search).split('=')[1]
    const days = Array.from(Array(moment(`2021-${query}`).daysInMonth()).keys())

    // console.log(query)

    useEffect(() => {
        projects.forEach( proj => {
            if(proj._id === id) {
                setProject(proj.project)
                setRoles(proj.roles)
            }
        })

        const daaa = dailies.reduce( (acc, daily) => {
            if(daily.project._id === id) {
                if(moment(daily.createdAt).format('MM') == parseInt(query)) {
                    days.forEach( (obj) => {
                        acc[obj] = acc[obj] || {}
                        if(obj === parseInt(moment(daily.createdAt).format('DD'))) {
                            console.log(obj) 
                            acc[obj] = daily.requirements
                        }
                    })
                }
            }

            return acc
        },[])

        setData(daaa)

    },[projects])

    const handleBackIcon = () => {
        history.push({pathname: '/promanage'})
    }

    console.log(data)

    return (
        <Box className={classes.monthlyrequirement}>
            <Box className={classNames('monthlyRequirementHeader')}>
                <Typography variant={'h4'}>{ project }</Typography>
                <ArrowBackIcon onClick={ () => handleBackIcon()} className={classNames('mrHeaderBtn')}/>
            </Box>
            <Box className={classNames('monthlyRequirementContainer')}>
                <Box style={{ display: 'flex', }}>
                    <Typography style={{ width: '2rem' }}></Typography>
                    {
                        data && data.map((req, index) => { 
                            switch(_.isEmpty(req)) {
                                case true:
                                    return <Box>
                                        <Typography style={{ textAlign: 'center', marginBottom: '.5rem' }}>{index + 1}</Typography>
                                        {
                                            roles.map((role, index) => (
                                                <Box className={classNames('mrDataStructure')} key={index}>2</Box>
                                            ))
                                        }
                                    </Box>
                                case false:
                                    return <Box>
                                        <Typography style={{ textAlign: 'center', marginBottom: '.5rem' }}>{index + 1}</Typography>
                                        {
                                            roles.map((role, index) => {
                                                switch(role) {
                                                    case 'supervisor':
                                                        return <Box key={index} className={classNames('mrDataStructure')} style={{ background: '#F7F7E8' }}>{ req[role] }</Box>
                                                    case 'technicians':
                                                        return <Box key={index} className={classNames('mrDataStructure')} style={{ background: '#C7CFB7' }}>{ req[role] }</Box>
                                                    case 'rigs':
                                                        return <Box key={index} className={classNames('mrDataStructure')} style={{ background: '#9DAD7F' }}>{ req[role] }</Box>
                                                    case 'engineer':
                                                        return <Box key={index} className={classNames('mrDataStructure')} style={{ background: '#9DAD7F' }}>{ req[role] }</Box>
                                                    case 'helper':
                                                        return <Box key={index} className={classNames('mrDataStructure')} style={{ background: '#FF7878' }}>{ req[role] }</Box>
                                                    default:
                                                        return <Box key={index} className={classNames('mrDataStructure')}>{ req[role] }</Box>
                                                }
                                            })
                                        }
                                    </Box>
                                default:
                                    return <p>cool</p>
                            }
                        })
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default MonthlyRequirement
