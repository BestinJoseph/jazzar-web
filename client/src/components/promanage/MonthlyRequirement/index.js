import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import moment from 'moment'
import { useHistory, useParams } from 'react-router'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import EditIcon from '@material-ui/icons/Edit'
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

    const query = parseInt((history.location.search).split('=')[1])
    const days = Array.from(Array(moment(`2021-${query}`).daysInMonth()).keys())

    useEffect(() => {
        projects.forEach( proj => {
            if(proj._id === id) {
                setProject(proj)
                setRoles(proj.roles)
            }
        })

        const daaa = dailies.reduce( (acc, daily) => {
            if(daily.project._id === id) {
                if(moment(daily.createdAt).format('MM') == parseInt(query)) {
                    days.forEach( (obj) => {
                        acc[obj + 1] = acc[obj + 1] || {}
                        acc[obj + 1]['requirements'] = acc[obj + 1]['requirements'] || {} //['requirements']
                        acc[obj + 1]['_id'] = acc[obj + 1]['_id'] || ''
                        if(obj + 1 === parseInt(moment(daily.createdAt).format('DD'))) {
                            acc[obj + 1]['_id'] = daily._id
                            acc[obj + 1]['requirements'] = daily.requirements
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

    const handleEdit = (dailyId) => {
        history.push({pathname: `/promanage/${project._id}/create`, search: project.project, state: { dailyId: dailyId }})
    }

    console.log(data)

    return (
        <Box className={classes.monthlyrequirement}>
            <Box className={classNames('monthlyRequirementHeader')}>
                <Typography variant={'h4'}>{ project && project.project }</Typography>
                <ArrowBackIcon onClick={ () => handleBackIcon()} className={classNames('mrHeaderBtn')}/>
            </Box>
            <Box className={classNames('monthlyRequirementContainer')}>
                <Box style={{ display: 'flex', }}>
                    <Box style={{ display: 'flex', flexFlow: 'column' }}>
                        <Box style={{ width: '6rem', height: '2rem', paddingLeft: '.5rem' }}>Category</Box>
                    {
                        roles.map((role, index) => (
                            <Box key={index} style={{ width: '6rem', height: '2rem', paddingLeft: '.5rem', display: 'flex', alignItems: 'center', }}>{ role }</Box>
                        ))
                    }
                    </Box>
                    {
                        data && Object.values(data).map(({_id, requirements}, index) => {
                            switch(_.isEmpty(requirements)) {
                                case true:
                                    return <Box key={index}>
                                        <Typography style={{ textAlign: 'center', marginBottom: '.5rem' }}>{index + 1}</Typography>
                                        {
                                            roles.map((role, index) => (
                                                <Box className={classNames('mrDataStructure')} key={index} style={{ width: '2.5rem', height: '2rem', background: '#E8EAE6' }}></Box>
                                            ))
                                        }
                                    </Box>
                                case false:
                                    return <Box key={index}>
                                        <Typography style={{ textAlign: 'center', marginBottom: '.5rem' }}>{index + 1}</Typography>
                                        {
                                            roles.map((role, index) => {
                                                switch(role) {
                                                    case 'supervisor':
                                                        return <Box key={index} className={classNames('mrDataStructure')} style={{ background: '#F7F7E8' }}>{ requirements[role] }</Box>
                                                    case 'technicians':
                                                        return <Box key={index} className={classNames('mrDataStructure')} style={{ background: '#C7CFB7' }}>{ requirements[role] }</Box>
                                                    case 'rigs':
                                                        return <Box key={index} className={classNames('mrDataStructure')} style={{ background: '#9DAD7F' }}>{ requirements[role] }</Box>
                                                    case 'engineer':
                                                        return <Box key={index} className={classNames('mrDataStructure')} style={{ background: '#9DAD7F' }}>{ requirements[role] }</Box>
                                                    case 'geologist':
                                                        return <Box key={index} className={classNames('mrDataStructure')} style={{ background: '#FF7878' }}>{ requirements[role] }</Box>
                                                    case 'survivor':
                                                        return <Box key={index} className={classNames('mrDataStructure')} style={{ background: '#E7E0C9' }}>{ requirements[role] }</Box>
                                                    case 'driver':
                                                        return <Box key={index} className={classNames('mrDataStructure')} style={{ background: '#C1CFC0' }}>{ requirements[role] }</Box>
                                                    case 'helper':
                                                        return <Box key={index} className={classNames('mrDataStructure')} style={{ background: '#6B7AA1' }}>{ requirements[role] }</Box>
                                                    default:
                                                        return <Box key={index} className={classNames('mrDataStructure')}>{ requirements[role] }</Box>
                                                }
                                            })
                                        }
                                        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3rem'}}>
                                            <EditIcon onClick={ () => handleEdit(_id) } style={{ padding:'.1rem', cursor: 'pointer' }}/>
                                            {  }
                                        </Box>
                                    </Box>
                                default:
                                    return <p key={index}>No data available</p>
                            }
                        })
                    }
                </Box>
                <Typography >well</Typography>
            </Box>
        </Box>
    )
}

export default MonthlyRequirement
