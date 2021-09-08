import React, { useEffect, useState } from 'react'
import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import useStyles from './AdminServiceFormStyle'
import ServiceForm from './ServiceForm'
import ServiceImageForm from './ServiceForm/ServiceImageForm'

const AdminServiceForm = () => {
    const classes = useStyles()
    const location = useLocation()
    const { services } = useSelector( state => state.services )
    const [service, setService] = useState({})
    const [ value, setValue] = useState(0)

    // console.log(location.state)

    useEffect( () => {
        let isSubscribed = true

        if(isSubscribed) {
            if(services.length > 0 && location.state !== undefined) {
                const editService = services.find( ser => ser._id === location.state.id)
                setService(editService)
            } else {
                setService({})
            }
        }

        return () => (isSubscribed = false)
    }, [services, location])

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box className={classes.adminserviceform}>
            <Box className={classNames('adminserviceformHeader')}>
                <Typography variant="h6" className={classNames('formTitle')}>Service Form</Typography>
                <Link to='/admin/services'><ArrowBackIcon /></Link>
            </Box>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="Service Form">
                    <Tab label="Service Content Form" {...allyProps(0)} />
                    <Tab label="Service Image Add/Edit" {...allyProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <ServiceForm service={service}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ServiceImageForm serviceId={service._id}/>
            </TabPanel>
        </Box>
    )
}

const TabPanel = (props) => {
    const { children, value, index, ...rest } = props

    return (
        <Box role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...rest}>
            {value === index && (
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

export default AdminServiceForm
