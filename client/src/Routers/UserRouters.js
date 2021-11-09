import React from 'react'
import { Switch } from 'react-router-dom'

import { CreateProject, UserDashboard } from '../components'
import UserComponent from './UserComponent'
import UserProfile from '../components/User/UserProfile'
import ProManageHome from '../components/promanage/Home'
import UserDailyActivities from '../components/User/UserDailyActivities'

const UserRouters = () => {

    return (
        <Switch>
            <UserComponent path="/users" component={UserDashboard} exact/>
            <UserComponent path="/users/profile" component={UserProfile} exact/>
            <UserComponent path="/users/promanager" component={ProManageHome} exact/>
            <UserComponent path="/users/dailyactivities" component={UserDailyActivities} exact/>
            <UserComponent path="/users/dailyactivities/project/add" component={CreateProject} exact/>
        </Switch>
    )
}

export default UserRouters
