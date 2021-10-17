import React, { useEffect, useRef, useState } from 'react'
import { TableRow, TableCell, Grid, Typography, Box } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router'
import classNames from 'classnames'
import _ from 'lodash'

import useStyles from './ProTableRowStyles'
import moment from 'moment'

const ProTableRow = ({ pro }) => {
    const classes = useStyles()
    const history = useHistory()
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const [daataa, setDaataa] = useState({})
    const _isMounted = useRef(true)

    const handleAdd = (id, pr) => {
        history.push({pathname: `/promanage/${id}/create`, search: pr})
    }

    useEffect(() => {
        const daaa = Object.entries(pro).reduce((acc, [project, obj]) => {
            acc[project] = acc[project] || []
            acc[project]['_id'] = obj._id
            acc[project]['roles'] = acc[project]['roles'] || []
            acc[project]['roles'].push(...obj.roles)
            acc[project]['months'] = acc[project]['months'] || []
            if( obj.hasOwnProperty('months') === true ) {
                months && months.forEach( month => {
                    acc[project]['months'][month] = acc[project]['months'][month] || []
                    // console.log(obj.months)
                    Object.entries(obj.months).forEach( ([mon, wee]) => {
                        if( month == parseInt(mon)) {
                            Object.entries(obj.roles).forEach( ([role, value]) => {
                                const objj = {}
                                objj[value] = obj['months'][mon][0][value]
                                acc[project]['months'][month][value] = acc[project]['months'][month][value] || 0
                                
                                wee.forEach((we) => {
                                    // console.log(we)
                                    acc[project]['months'][month][value] += parseInt(we[value])
                                })
                            })
                        } else {
                        }
                    })
                })
            } else {
                months && months.forEach( month => {
                    acc[project]['months'][month] = acc[project]['months'][month] || []
                })
            }
            return acc
        }, {})
        // console.log(daaa)
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
        daataa && Object.entries(daataa).map(([pr, {months, roles, _id}], index) => (
            <TableRow key={index} className={classes.protablerow}>
                <TableCell style={{ position: 'sticky', left: 0, background: 'white', }} component="th" scopt="row" className={classNames('tableRowsCellSL')}>
                    <Grid container style={{ display: 'flex', alignItems: 'center' }}>
                        <Grid item lg={10}>
                            <Grid container style={{ display: 'flex', alignItems: 'center' }}>
                                <Grid item lg={3} style={{ textAlign: 'center' }}>
                                    <EditIcon onClick={() => handleLInk(_id)} style={{cursor: 'pointer'}}/>
                                </Grid>
                                <Grid item lg={9}>
                                    <Typography>{ pr.substring(0, 18) + ' ...' }</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={2}>
                            <Grid container>
                                {
                                    roles.map((role, index) => (
                                        <Grid item lg={12} key={index} className={classNames('headerSec')}>
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
                            
                            { 
                                moment().month() + 1 == month 
                                ? 
                                    <Box className={classNames('buttonEff')}>
                                        <AddIcon onClick={() => handleAdd(_id, pr)} className={classNames('addButton')}/>
                                    </Box>
                                :   null
                            }
                            {
                                (() => {
                                    switch(typeof(values.technicians)) {
                                        case 'number':
                                            return <Box>
                                                {
                                                    roles.map((role, index) => {
                                                        switch(role) {
                                                            case 'supervisor':
                                                                return <Box key={index} className={classNames('dataStructure')} style={{ background: '#F7F7E8' }}>{ values[`${role}`] }</Box>
                                                            case 'technicians':
                                                                return <Box key={index} className={classNames('dataStructure')} style={{ background: '#C7CFB7' }}>{ values[`${role}`] }</Box>
                                                            case 'rigs':
                                                                return <Box key={index} className={classNames('dataStructure')} style={{ background: '#9DAD7F' }}>{ values[`${role}`] }</Box>
                                                            case 'engineer':
                                                                return <Box key={index} className={classNames('dataStructure')} style={{ background: '#9DAD7F' }}>{ values[`${role}`] }</Box>
                                                            case 'helper':
                                                                return <Box key={index} className={classNames('dataStructure')} style={{ background: '#FF7878' }}>{ values[`${role}`] }</Box>
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
