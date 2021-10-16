import React, { useEffect, useRef, useState } from 'react'
import { TableRow, TableCell, Grid, Typography, Box } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router'
import classNames from 'classnames'

import useStyles from './ProTableRowStyles'
import moment from 'moment'

const ProTableRow = ({ pro }) => {
    const classes = useStyles()
    const history = useHistory()
    const months = [8, 9, 10]
    const [daataa, setDaataa] = useState({})
    const _isMounted = useRef(true)

    const handleAdd = (id, pr) => {
        history.push({pathname: `/promanage/${id}/create`, search: pr})
    }

    useEffect(() => {
        const daaa = Object.entries(pro).reduce((acc, obj) => {
            acc[obj[0]] = acc[obj[0]] || []
            acc[obj[0]]['roles'] = acc[obj[0]]['roles'] || []
            acc[obj[0]]['roles'].push(...obj[1].roles)
            acc[obj[0]]['months'] = acc[obj[0]]['months'] || []
            months.forEach( month => {
                acc[obj[0]]['months'][month] = acc[obj[0]]['months'][month] || []
                Object.entries(obj[1]).forEach( ([mon, wee]) => {
                    if( month === parseInt(mon)) {
                        acc[obj[0]]['months'][month]['technicians'] = acc[obj[0]]['months'][month]['technicians'] || 0
                        acc[obj[0]]['months'][month]['rigs'] = acc[obj[0]]['months'][month]['rigs'] || 0
                        acc[obj[0]]['months'][month]['helper'] = acc[obj[0]]['months'][month]['helper'] || 0
                        wee.forEach((we) => {
                            acc[obj[0]]['months'][month]['technicians'] += parseInt(we.technicians)
                            acc[obj[0]]['months'][month]['rigs'] += parseInt(we.rigs)
                            acc[obj[0]]['months'][month]['helper'] += parseInt(we.helper)
                        })
                    } else {
                    }
                })
            })
            return acc
        }, {})
        setDaataa(daaa)
        return () => { _isMounted.current = false}
    }, [pro])

    const handleMouseHover = () => {
        // console.log(typeof(btnHover.current.classList))
        // btnHover.current.classList.push('some')
    }

    const handleLInk = (project) => {
        history.push({ pathname: `/promanage/create`, state: { project: project } })
    }

    // console.log(daataa)

    return (
        Object.entries(daataa).map(([pr, {months, roles}], index) => (
            <TableRow key={index} className={classes.protablerow}>
                <TableCell style={{ position: 'sticky', left: 0, background: 'white', }} component="th" scopt="row" className={classNames('tableRowsCellSL')}>
                    <Grid container style={{ display: 'flex', alignItems: 'center' }}>
                        <Grid item lg={10}>
                            <Grid container style={{ display: 'flex', alignItems: 'center' }}>
                                <Grid item lg={3} style={{ textAlign: 'center' }}>
                                    <EditIcon onClick={() => handleLInk(pro[pr].project)} style={{cursor: 'pointer'}}/>
                                </Grid>
                                <Grid item lg={9}>
                                    <Typography>{ pr.substring(0, 18) + ' ...' }</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={2}>
                            <Grid container>
                                {
                                    roles[0].map((role, index) => (
                                        <Grid item lg={12} key={index} style={{ textTransform: 'capitalize' }}>
                                            { role.toString().substring(0, 4) }
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </TableCell>
                {
                    Object.entries(months).map(([month, values], index) => (
                        <TableCell key={index} className={classNames('tableRowsCellCss')} onMouseOver={ () => handleMouseHover() }>
                            
                                { moment().month() == month 
                                    ? 
                                        <Box className={classNames('buttonEff')}>
                                            <AddIcon onClick={() => handleAdd(pro[pr].project, pr)} className={classNames('addButton')}/>
                                        </Box>
                                    :   null 
                                }
                                
                            {
                                (() => {
                                    switch(typeof(values.technicians)) {
                                        case 'number':
                                            return <Box>
                                                {
                                                    roles[0].map((role, index) => {
                                                        switch(role) {
                                                            case 'supervisor':
                                                                return <Box key={index} className={classNames('dataStructure')} style={{ background: 'green' }}>{ values[`${role}`] }</Box>
                                                            case 'technicians':
                                                                return <Box key={index} className={classNames('dataStructure')} style={{ background: 'blue' }}>{ values[`${role}`] }</Box>
                                                            case 'rigs':
                                                                return <Box key={index} className={classNames('dataStructure')} style={{ background: 'red' }}>{ values[`${role}`] }</Box>
                                                            case 'engineer':
                                                                return <Box key={index} className={classNames('dataStructure')} style={{ background: 'gold' }}>{ values[`${role}`] }</Box>
                                                            case 'helper':
                                                                return <Box key={index} className={classNames('dataStructure')} style={{ background: 'purple' }}>{ values[`${role}`] }</Box>
                                                            default:
                                                                return <Box key={index} className={classNames('dataStructure')}>{ values[`${role}`] }</Box>
                                                        }
                                                    })
                                                }
                                            </Box>
                                        case 'undefined':
                                            return <Box style={{ textAlign: 'center'}}>
                                            <Box>No data available</Box>
                                        </Box>
                                        default:
                                            return <Box>
                                            <Box  className={classNames('dataStructure')}>0</Box>
                                            <Box  className={classNames('dataStructure')}>0</Box>
                                            <Box  className={classNames('dataStructure')}>0</Box>
                                        </Box>
                                    }
                                })()
                            }
                        </TableCell>
                    ))
                }
            </TableRow>
        ))
    )
}

export default ProTableRow
