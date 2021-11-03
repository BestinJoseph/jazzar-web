import React, { useEffect, useState } from 'react'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, MenuItem } from '@material-ui/core'
import classesNames from 'classnames'
import _ from 'lodash'
import AddIcon from '@material-ui/icons/Add'
import ProTableRow from './ProTableRow'
import moment from 'moment'
import { useHistory } from 'react-router'
import classNames from 'classnames'

import useStyles from './HomeStyles'
import { useSelector } from 'react-redux'

const ProManageHome = () => {
    const classes = useStyles()
    const { dailies: { dailies } } = useSelector( state => state )
    const { projects } = useSelector(state => state.projects)
    const [result, setResult] = useState({})
    const [data, setData] = useState([])
    const history = useHistory()
    const months = moment().months(2020)._locale._months
    const [year, setYear] = useState(moment().year())

    useEffect(() => {

        const projectInDailyActivities = Object.values(projects).reduce((acc, obj) => {
            if( moment(obj.createdAt).year() === year ) {
                if(!_.isEmpty(obj.roles)) {
                    acc[obj.project] = acc[obj.project] || {}
                    acc[obj.project]['_id'] = obj._id
                    acc[obj.project]['roles'] = acc[obj.project]['roles'] || []
                    obj.roles.forEach( role => {
                        acc[obj.project]['roles'].push(role)
                    })
                    Object.values(dailies).forEach( daily => {
                        if(obj._id === daily.project._id) {
                            acc[obj.project]['months'] = acc[obj.project]['months'] || []
                            acc[obj.project]['months'][moment(daily.createdAt).format('M')] = acc[obj.project]['months'][moment(daily.createdAt).format('M')] || []
                            acc[obj.project]['months'][moment(daily.createdAt).format('M')].push(daily.requirements)
                        }
                    })
                }
            } else {
                if(!_.isEmpty(obj.roles)) {
                    acc[obj.project] = acc[obj.project] || {}
                    acc[obj.project]['_id'] = obj._id
                    acc[obj.project]['roles'] = acc[obj.project]['roles'] || []
                    obj.roles.forEach( role => {
                        acc[obj.project]['roles'].push(role)
                    })
                }
            }
            return acc
        }, {})

        // const data = dailies.reduce((gr, obj) => {
        //     if(_.isEmpty(obj)) return null
        //     gr[obj.project.project] = gr[obj.project.project] || []
        //     gr[obj.project.project]['roles'] = gr[obj.project.project]['roles'] || []
        //     if( _.isEmpty(gr[obj.project.project]['roles']) ) {
        //         gr[obj.project.project]['roles'].push(obj.project.roles)
        //     }
        //     gr[obj.project.project][moment(obj.createdAt).month()] = gr[obj.project.project][moment(obj.createdAt).month()] || []
        //     gr[obj.project.project][moment(obj.createdAt).month()].push(obj.requirements) //[moment(obj.createdAt).week()]
        //     gr[obj.project.project]['project'] = obj.project._id
        //     return gr
        // }, {})

        const totalWorkers = dailies.reduce((tWork, obj) => {
            // console.log(moment(obj.createdAt).year() === year)
            if( moment(obj.createdAt).year() === year ) {
                if(_.isEmpty(obj)) return null
                tWork['months'] = tWork['months'] || {}
                for(let i = 0; i < 12; i++) {
                    // console.log(moment(obj.createdAt).month())
                    if(i === moment(obj.createdAt).month()) {
                        tWork['months'][moment(obj.createdAt).month()] = tWork['months'][moment(obj.createdAt).month()] || []
                        tWork['months'][moment(obj.createdAt).month()].push(obj)
                        tWork['roles'] = tWork['roles'] || []
                        obj.project.roles.forEach( role => {
                            if( tWork['roles'].findIndex(ro => role === ro) === -1 ) {
                                tWork['roles'].push(role)
                            }
                        })
                    } else {
                        tWork['months'][i] = tWork['months'][i] || []
                    }
                }
            }
            return tWork
        },{})

        setTimeout(() => {
            setResult(projectInDailyActivities)
            setData(totalWorkers)
        }, 500)
    }, [dailies, year])

    // console.log(data)

    const handleLInk = () => {
        history.push({ pathname: `/promanage/create` })
    }

    return (
        <Box className={classes.promanagehome}>
            <Box className={classesNames('tableConatiner')}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table" >
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: 400, position: "sticky", left: 0, backgroundColor: 'white' }}>
                                    <Grid container style={{ display: 'flex', alignItems: 'center' }}>
                                        <Grid item lg={3}>
                                            <AddIcon onClick={() => handleLInk()} className={classNames('projectAddBtn')} />
                                        </Grid>
                                        <Grid item lg={7}>Project Name</Grid>
                                        <Grid item lg={2}>
                                            <select name="year" onChange={(e) => setYear(parseInt(e.target.value))} defaultValue={year}>
                                                <option value={2018}>2018</option>
                                                <option value={2019}>2019</option>
                                                <option value={2020}>2020</option>
                                                <option value={2021}>2021</option>
                                            </select>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                {
                                    months && months.map( (month, index) => (
                                        <TableCell className={classNames('tableCellHeaderCss')} key={index} >{month}</TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <ProTableRow pro={result} months={data}/>
                            <TableRow>
                                <TableCell className={classNames('tableCellHeaderCss')} >Employee worked</TableCell>
                                {
                                    data.months && Object.entries(data.months).map(([month, months], index) => {
                                        const daa = months && months.reduce((acc, obj) => {
                                            acc[month] = acc[month] || {}
                                            Object.values(data.roles).forEach( role => {
                                                if( obj.requirements[role] ) {
                                                    acc[month][role] = parseInt(acc[month][role]) + parseInt(obj.requirements[role]) || parseInt(obj.requirements[role])
                                                }
                                            })
                                            return acc
                                        },{})

                                        if( _.isEmpty(months) ) {
                                            if( month <= moment().month()) {
                                                return (
                                                    <TableCell className={classNames('tableCellHeaderCss')} key={index}>
                                                        <Box key={index}>
                                                            <Box style={{ fontSize: '.75rem', textTransform: 'capitalize' }}>no data</Box>
                                                        </Box>
                                                    </TableCell>
                                                )
                                            } else {
                                                return (
                                                    <TableCell className={classNames('tableCellHeaderCss')} key={index}>
                                                        <Box key={index}>
                                                            <Box style={{ fontSize: '.75rem', textTransform: 'capitalize' }}></Box>
                                                        </Box>
                                                    </TableCell>
                                                )
                                            }
                                        } else {
                                            return (
                                                <TableCell className={classNames('tableCellHeaderCss')} key={index}>
                                                    {
                                                        Object.entries(daa[month]).map(([role, value], index) => ( 
                                                            <Box key={index}>
                                                                <Box style={{ fontSize: '.7rem', textTransform: 'capitalize' }}>{ role }: { isNaN(value) ? 0 : value }</Box>
                                                            </Box>
                                                        ))
                                                    }
                                                </TableCell>
                                            )
                                        }
                                    })
                                    
                                }
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default ProManageHome
