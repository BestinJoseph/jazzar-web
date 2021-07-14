import { combineReducers  } from 'redux'
import projects from './projects'
import project from './project'
import services from './services'

export default combineReducers ({
    projects, project, services
})