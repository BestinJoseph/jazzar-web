import { Box } from '@material-ui/core'
import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useStyles from './contactsStyles'
import Form from './Form'
import Location from './Location'
import { getLocationsAction } from '../../actions/locationActions'
import History from '../History'

const Contact = () => {
    const classes = useStyles()
    const { locations } = useSelector( state => state.locations )
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getLocationsAction())
    }, [dispatch])

    return (
      <Box className={classes.contact} >
        <Form />
        { locations ? <Location locations={locations}/> : null}
        <History />
      </Box>
    )
}

export default Contact