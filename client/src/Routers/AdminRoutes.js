import React from 'react'
import { Switch } from 'react-router-dom'

import { 
  Dashboard, 
  AdminService, 
  AdminServiceForm, 
  AdminProject, 
  AdminProjectForm, 
  AdminContact, 
  RequestNotFound, 
  AdminBranch,
  AdminBranchCreate
} from '../components';
import AdminComponent from './AdminComponent';

const AdminRoutes = () => {
  return (
    <Switch>
      <AdminComponent path="/admin" component={Dashboard} exact/>
      <AdminComponent path="/admin/services" component={AdminService} exact/>
      <AdminComponent path="/admin/services/create" component={AdminServiceForm} />
      <AdminComponent path="/admin/services/edit" component={AdminServiceForm} />
      <AdminComponent path="/admin/projects" component={AdminProject} exact/>
      <AdminComponent path="/admin/projects/create" component={AdminProjectForm} />
      <AdminComponent path="/admin/projects/edit" component={AdminProjectForm} />
      <AdminComponent path="/admin/contacts" component={AdminContact} exact/>
      <AdminComponent path="/admin/branches" component={AdminBranch} exact/>
      <AdminComponent path="/admin/branches/create" component={AdminBranchCreate} exact/>
      <AdminComponent path="/admin/branches/edit" component={AdminBranchCreate} exact/>
      <AdminComponent path="/admin/*" component={RequestNotFound} />
    </Switch>
  )
}

export default AdminRoutes
