import React from 'react'
import { Box, Typography, Grid, Paper, Breadcrumbs } from '@material-ui/core'
import classNames from 'classnames'
import { Link, useHistory } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import moment from 'moment'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import HomeIcon from '@material-ui/icons/Home'

import useStyles from './AdminBranchStyles'
import { useSelector } from 'react-redux'

const AdminBranch = () => {
    const classes = useStyles()
    const { locations } = useSelector(state => state.locations)
    const history = useHistory()

    const handleClick = (id) => {
        history.push({ pathname: '/admin/branches/edit', state: {id: id}})
    }

    return (
        <Box className={classes.adminbranch}>
            <Box className={classNames('adminbranchheaderContainer')}>
                <Box className={classNames('headercontainerBox')}>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                        <HomeIcon onClick={() => history.push({ pathname: '/admin'})} className={classNames('headercontainerboxHomeLink')}/>
                        <Box className={classNames('headercontainerboxTitle')}>
                            <Typography variant="h6" style={{marginRight: '1rem'}}>Branches Dashboard</Typography>
                            <Link to='/admin/branches/create'><AddIcon /></Link>
                        </Box>
                    </Breadcrumbs>
                </Box>
            </Box>
            <Box className={classNames('adminbranchcontents')}>
                <Grid container className={classNames('adminbranchContainer')} spacing={2}>
                    {
                        locations && locations.map( (branch, index) => (
                            <Grid item xs={3} className={classNames('adminbranchItem')} key={index}>
                                <Paper className={classNames('itemContainer')}>
                                    <Box>
                                        <Typography variant="h6">{ branch.name }</Typography>
                                        <Typography variant="body2">{ moment(branch.updatedAt).format('DD MMM, YYYY') }</Typography>
                                    </Box>
                                    <Box className={classNames('itemFooter')}>
                                        <EditIcon onClick={() => handleClick(branch._id)} style={{ cursor: 'pointer', }}/>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default AdminBranch
