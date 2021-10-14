import React, { useEffect, useRef, useState } from 'react'
import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import useStyles from './AdminBranchCreateStyles'
import BranchContentForm from './BranchContentForm'
import BranchImageForm from './BranchImageForm'
import { Link } from 'react-router-dom'

const TabPanel = (props) => {
    const { children, value, index, ...other } = props

    return (
        <Box role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            { value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </Box>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
}

const allyProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    }
}

const AdminBranchCreate = () => {
    const classes = useStyles()
    const { locations } = useSelector( state => state.locations )
    const [value, setValue] = useState(0)
    const [branch, setBranch] = useState({})
    const _isMounted = useRef(true)
    const location =  useLocation()

    useEffect(() => {

        if(_isMounted) {
            if(locations.length > 0 && location.state !== undefined) {
                const editService = locations.find( ser => ser._id === location.state.id)
                setBranch(editService)
            } else {
                setBranch({})
            }
        }

        return () => { _isMounted.current = false }

    }, [locations, _isMounted, location])

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box className={classes.adminbranchcreate}>
            <Box className={classNames('adminbranchformHeader')}>
                <Typography variant="h6" className={classNames('formTitle')}>Branch Form</Typography>
                <Link to='/admin/branches'><ArrowBackIcon /></Link>
            </Box>
            <Box style={{width: '60%'}}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Branch Contents" {...allyProps(0)} />
                        <Tab label="Branch Images" {...allyProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <Box>
                        <BranchContentForm branch={branch}/>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box>
                        <BranchImageForm branch={branch} />
                    </Box>
                </TabPanel>
            </Box>
        </Box>
    )
}

export default AdminBranchCreate
