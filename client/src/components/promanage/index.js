import React from 'react'
import { Box } from '@material-ui/core'

import useStyles from './PromanageHomeStyles'
import ProManageHome from './Home'

const Promanage = () => {
    const classes = useStyles()

    return (
        <Box className={classes.promanagehome}>
            <ProManageHome />
        </Box>
    )
}

export default Promanage
