import React, { useEffect, useRef, useState } from 'react'
import { TableRow, TableCell, Grid, Typography, Box } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import { useHistory } from 'react-router'
import classNames from 'classnames'

import useStyles from './ProTableRowStyles'

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
            months.map( month => {
                acc[obj[0]][month] = acc[obj[0]][month] || []
                Object.entries(obj[1]).map( ([mon, wee]) => {
                    if( month == mon) {
                        acc[obj[0]][month]['technicians'] = acc[obj[0]][month]['technicians'] || 0
                        acc[obj[0]][month]['rigs'] = acc[obj[0]][month]['rigs'] || 0
                        acc[obj[0]][month]['helpers'] = acc[obj[0]][month]['helpers'] || 0
                        wee.map((we) => {
                            acc[obj[0]][month]['technicians'] += parseInt(we.technicians)
                            acc[obj[0]][month]['rigs'] += parseInt(we.rigs)
                            acc[obj[0]][month]['helpers'] += parseInt(we.helpers)
                        })
                    } else {
                        // console.log('cool....')
                    }
                })
            })
            return acc
        }, {})

        // console.log(daaa)

        setDaataa(daaa)
        return () => { _isMounted.current = false}
    }, [pro])

    // console.log(daataa)

    return (
        Object.entries(daataa).map(([pr, months], index) => (
            <TableRow key={index} className={classes.protablerow}>
                <TableCell style={{ position: 'sticky', left: 0 }} component="th" scopt="row">
                    <Grid container style={{ display: 'flex', alignItems: 'center' }}>
                        <Grid item lg={10}>
                            <Grid container style={{ display: 'flex', alignItems: 'center' }}>
                                <Grid item lg={2}>
                                    <AddIcon onClick={() => handleAdd(pro[pr].project, pr)} style={{cursor: 'pointer'}}/>
                                </Grid>
                                <Grid item lg={10}>
                                    <Typography>{ pr.substring(0, 18) + ' ...' }</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={2}>
                            <Grid container>
                                <Grid item lg={12}>
                                    Tech
                                </Grid>
                                <Grid item lg={12}>
                                    Rig
                                </Grid>
                                <Grid item lg={12}>
                                    Help
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </TableCell>
                {
                    Object.entries(months).map(([month, values], index) => (
                        <TableCell key={index} className={classNames('tableRowsCellCss')}>
                            {
                                // console.log(typeof(values.technicians))
                                (() => {
                                    switch(typeof(values.technicians)) {
                                        case 'number':
                                            return <Box style={{ textAlign: 'center'}}>
                                                <Box style={{ background: 'green', color: 'white' }}>{ values.technicians }</Box>
                                                <Box style={{ background: 'red', color: 'white' }}>{ values.rigs }</Box>
                                                <Box style={{ background: 'blue', color: 'white' }}>{ values.helpers }</Box>
                                            </Box>
                                        case 'undefined':
                                            return <Box style={{ textAlign: 'center'}}>
                                            <Box>0</Box>
                                            <Box>0</Box>
                                            <Box>0</Box>
                                        </Box>
                                        default:
                                            return <Box>
                                            <Box>0</Box>
                                            <Box>0</Box>
                                            <Box>0</Box>
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
