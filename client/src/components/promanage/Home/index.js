import React, { useEffect, useState } from 'react'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@material-ui/core'
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
    const [data, setData] = useState([])
    const history = useHistory()

    useEffect(() => {
        const data = dailies.reduce((gr, obj) => {
            if(_.isEmpty(obj)) return null
            gr[obj.project.project] = gr[obj.project.project] || []
            gr[obj.project.project]['roles'] = gr[obj.project.project]['roles'] || []
            if( _.isEmpty(gr[obj.project.project]['roles']) ) {
                gr[obj.project.project]['roles'].push(obj.project.roles)
            }
            gr[obj.project.project][moment(obj.createdAt).month()] = gr[obj.project.project][moment(obj.createdAt).month()] || []
            // gr[obj.projects.project][moment(obj.createdAt).month()][moment(obj.createdAt).week()] = gr[obj.projects.project][moment(obj.createdAt).month()][moment(obj.createdAt).week()] || []
            gr[obj.project.project][moment(obj.createdAt).month()].push(obj.requirements) //[moment(obj.createdAt).week()]
            gr[obj.project.project]['project'] = obj.project._id
            // gr[obj.projects.project]['_id'] = obj.projects._id.push({...obj.requirements, _id: obj.projects._id, project: obj.projects.project })
            return gr
        }, {})

        const totalWorkers = dailies.reduce((tWork, obj) => {
            if(_.isEmpty(obj)) return null
            tWork['months'] = tWork['months'] || {}
            tWork['months'][moment(obj.createdAt).month()] = tWork['months'][moment(obj.createdAt).month()] || []
            tWork['months'][moment(obj.createdAt).month()].push(obj)
            tWork['roles'] = tWork['roles'] || []
            obj.project.roles.forEach( role => {
                if( tWork['roles'].findIndex(ro => role === ro) === -1 ) {
                    tWork['roles'].push(role)
                }
            })
            return tWork
        },{})

        console.log(totalWorkers)

        setTimeout(() => {
            setResult(data)
            setData(totalWorkers)
        }, 500)
    }, [dailies])

    // console.log(data.roles)

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
                            <ProTableRow pro={result && result} months={data}/>
                            <TableRow>
                                <TableCell className={classNames('tableCellHeaderCss')} >Employee worked</TableCell>
                                {
                                    data.months && Object.entries(data.months).map(([month, months], index) => {
                                        const daa = months && months.reduce((acc, obj) => {
                                            acc[month] = acc[month] || {}
                                            acc[month].technicians = acc[month].technicians + parseInt(obj.requirements.technicians) || parseInt(obj.requirements.technicians)
                                            acc[month].rigs = acc[month].rigs + parseInt(obj.requirements.rigs) || parseInt(obj.requirements.rigs)
                                            acc[month].helpers = acc[month].helpers + parseInt(obj.requirements.helpers) || parseInt(obj.requirements.helpers)
                                            return acc
                                        },{})

                                        return (
                                            <TableCell className={classNames('tableCellHeaderCss')} key={index}>
                                                {
                                                    // roles && roles[0].map( (role, index) => (
                                                    //     <Box key={index}>{ role }: </Box>
                                                    // ))

                                                    console.log(data.roles)
                                                }
                                            </TableCell>
                                        )
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
