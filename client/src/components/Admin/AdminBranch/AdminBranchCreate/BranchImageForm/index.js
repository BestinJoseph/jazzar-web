import { Box } from '@material-ui/core'
import React from 'react'

import useStyles from './BranchImageFormStyles'

const BranchImageForm = () => {
    const classes = useStyles()

    return (
        <Box className={classes.branchimageform}>
            branch image form goes here.
        </Box>
    )
}

export default BranchImageForm
