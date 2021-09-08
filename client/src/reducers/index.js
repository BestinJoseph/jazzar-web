import { combineReducers  } from 'redux'
import projects from './projects'
import project from './project'
import services from './services'
import users from './auth'
import errors from './errorReducer'

export default combineReducers ({
    projects, project, services, users, errors
})