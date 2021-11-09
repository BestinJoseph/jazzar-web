import { Paper } from '@material-ui/core'
import classNames from 'classnames'
import React from 'react'

import defaultImage from '../../../../assets/images/users/user_default.png'

const UserGeneralData = () => {
    return (
        <Paper className={classNames('personalProfile')}>
            <img src={defaultImage} alt="user profile" width="100%" />
            General inforamtions.
        </Paper>
    )
}

export default UserGeneralData
