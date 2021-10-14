import React from 'react'
import { Box, Typography } from '@material-ui/core'
import classNames from 'classnames'

import useStyles from './HomePartnersStyle'

const HomePartners = () => {
    const classes = useStyles()

    const names = [
        {title: "OJPAD", name: "Archeitect, Green Dome and Pre-Cast"},
        {title: "Geo", name: "Geotechnical Investigation"}, 
        {title: "Mat", name: "Material Testing"},
        {title: "Hydro", name: "Hydrogeology"}, 
        {title: "calib", name: "Calibration and Maintenance"}, 
        {title: "Sur", name: "Survery and GIS"}, 
        {title: "Che", name: "Chemical Analysis"}
    ]

    return (
        <Box className={classes.partners}>
            <Box className={classNames('nameLists')}>
                { names.map( (name, index) => (
                    <Box className={classNames('nameOne')} key={index}>
                        <Typography variant="h6" className={classNames('titleStyle')}>{name.title}</Typography>
                        <Typography variant="body1" className={classNames('textStyle')}>{name.name}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default HomePartners
