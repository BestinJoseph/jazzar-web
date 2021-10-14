import React, { useEffect, useState } from 'react'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, TableFooter } from '@material-ui/core'
import classesNames from 'classnames'
import _ from 'lodash'
import AddIcon from '@material-ui/icons/Add'
import ProTableRow from './ProTableRow'
import moment from 'moment'
import { useHistory } from 'react-router'

import useStyles from './HomeStyles'
import { useSelector } from 'react-redux'
import classNames from 'classnames'

const ProManageHome = () => {
    const classes = useStyles()
    const { dailies: { dailies } } = useSelector( state => state )
    const [result, setResult] = useState({})
    const [months, setMonths] = useState([])
    const history = useHistory()

    useEffect(() => {
        const data = dailies.reduce((gr, obj) => {
            if(_.isEmpty(obj)) return null
            gr[obj.project.project] = gr[obj.project.project] || []
            gr[obj.project.project][moment(obj.createdAt).month()] = gr[obj.project.project][moment(obj.createdAt).month()] || []
            // gr[obj.projects.project][moment(obj.createdAt).month()][moment(obj.createdAt).week()] = gr[obj.projects.project][moment(obj.createdAt).month()][moment(obj.createdAt).week()] || []
            gr[obj.project.project][moment(obj.createdAt).month()].push(obj.requirements) //[moment(obj.createdAt).week()]
            gr[obj.project.project]['project'] = obj.project._id
            // gr[obj.projects.project]['_id'] = obj.projects._id.push({...obj.requirements, _id: obj.projects._id, project: obj.projects.project })
            return gr
        }, {})

        // const months = dailies.reduce((acc, obj) => {
        //     acc.months = acc.months || []
        //     if( acc.months.findIndex( ass => ass == moment(obj.createdAt).month()) === -1 ) {
        //         acc.months.push(moment(obj.createdAt).month())
        //     }
        //     acc.months = acc.months.sort()
        //     return acc
        // },{})

        console.log(months)

        const totalWorkers = dailies.reduce((tWork, obj) => {
            if(_.isEmpty(obj)) return null
            tWork[moment(obj.createdAt).month()] = tWork[moment(obj.createdAt).month()] || []
            tWork[moment(obj.createdAt).month()].push(obj)
            return tWork
        },{})

        setTimeout(() => {
            setResult(data)
            setMonths(totalWorkers)
        }, 500)
    }, [dailies])

    // console.log(months)

    const handleLInk = () => {
        history.push({pathname: `/promanage/create` })
    }

    return (
        <Box className={classes.promanagehome}>
            <Box className={classesNames('tableConatiner')}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table" >
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: 400, position: "sticky", left: 0, backgroundColor: 'white' }}>
                                    <Grid container >
                                        <Grid item lg={2}><AddIcon onClick={() => handleLInk()} style={{ cursor: 'pointer' }}/></Grid>
                                        <Grid item lg={10}>Project Name</Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell className={classNames('tableCellHeaderCss')} >Oct, 2021</TableCell>
                                <TableCell className={classNames('tableCellHeaderCss')} >Nov, 2021</TableCell>
                                <TableCell className={classNames('tableCellHeaderCss')} >Dec, 2021</TableCell>
                                <TableCell className={classNames('tableCellHeaderCss')} >Jan, 2022</TableCell>
                                <TableCell className={classNames('tableCellHeaderCss')} >Feb, 2022</TableCell>
                                <TableCell className={classNames('tableCellHeaderCss')} >Mar, 2022</TableCell>
                                <TableCell className={classNames('tableCellHeaderCss')} >Apr, 2022</TableCell>
                                <TableCell className={classNames('tableCellHeaderCss')} >May, 2022</TableCell>
                                <TableCell className={classNames('tableCellHeaderCss')} >Jun, 2022</TableCell>
                                <TableCell className={classNames('tableCellHeaderCss')} >Jul, 2022</TableCell>
                                <TableCell className={classNames('tableCellHeaderCss')} >Aug, 2022</TableCell>
                                <TableCell className={classNames('tableCellHeaderCss')} >Sep, 2022</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <ProTableRow pro={result && result} months={months}/>
                        </TableBody>
                        <TableFooter>
                            <TableCell className={classNames('tableCellHeaderCss')} >total employees....</TableCell>
                            
                                {

                                    Object.entries(months).map(([month, data]) => {
                                        const daa = data.reduce((acc, obj) => {
                                            acc[month] = acc[month] || {}
                                            acc[month].technicians = acc[month].technicians + parseInt(obj.requirements.technicians) || parseInt(obj.requirements.technicians)
                                            acc[month].rigs = acc[month].rigs + parseInt(obj.requirements.rigs) || parseInt(obj.requirements.rigs)
                                            acc[month].helpers = acc[month].helpers + parseInt(obj.requirements.helpers) || parseInt(obj.requirements.helpers)
                                            return acc
                                        },{})

                                        return (
                                            <TableCell className={classNames('tableCellHeaderCss')} >
                                                <Box>Technicians: { Object.values(daa)[0].technicians }</Box>
                                                <Box>Rigs: { Object.values(daa)[0].rigs }</Box>
                                                <Box>Helpers: { Object.values(daa)[0].helpers }</Box>
                                            </TableCell>
                                        )
                                    })
                                }
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default ProManageHome
