import React from 'react'
import { Box, Typography } from '@material-ui/core'
import classNames from 'classnames'

import useStyles from './HomePartnersStyle'

const HomePartners = () => {
    const classes = useStyles()

    const names = [
        {title: "Architecture", name: "Archeitect, Green Dome and Pre-Cast"},
        {title: "Civil Engineering", name: "Structural and Road Design"}, 
        {title: "Geotechnical Investigating", name: "Geophysical, Hydrogeology, Drilling, Water Drilling"},
        {title: "Independent Laboratories", name: "Material and Chemical Testing"}, 
        {title: "calibration and Maintenance", name: "Calibration and Maintenance"}, 
        {title: "Survey", name: "Survery and GIS"}, 
        {title: "Contracting Services", name: "Piling, Rehabilitation, Mini Piling"}
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
