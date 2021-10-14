import { combineReducers  } from 'redux'
import projects from './projects'
import project from './project'
import services from './services'
import users from './auth'
import errors from './errorReducer'
import locations from './locaionReducer'
import dailies from './dailyReducer'

export default combineReducers ({
    projects, project, services, users, errors, locations, dailies
})