import React from 'react'
import { Box, Chip } from '@material-ui/core'
import classNames from 'classnames'

import useStyles from './ProjectsStyles'

const ProjectsHeaderList = ({setType, handleSelect, index}) => {
    const classes = useStyles()
    const projectTypes = [ 'Tower', 'Univesity', 'Dam', 'Housing' ]

    return (
    <Box className={classes.projectList}>
        <Chip label="All" variant="outlined" onClick={ () => setType('all') } clickable className={classNames('popType')} />
        { projectTypes.map( (type, index) => (
            <Chip key={index} label={type} variant="outlined" onClick={ () => setType(type) } disabled clickable className={classNames('popType')} />
        ))}
    </Box>
)
}

export default ProjectsHeaderList
