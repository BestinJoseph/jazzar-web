import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Box, Button, Checkbox, Grid, TextField, Typography } from '@material-ui/core'
import * as Yup from 'yup'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'

import useStyles from './AdminLoginStyles'
import { loginUser } from '../../../actions/authActions'

const Login = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const initialValues = { username: '', password: '', remember: false}

  const validationSchema = Yup.object().shape({
    username: Yup.string().email().required(),
    password: Yup.string().required()
  })

  const handleSubmit = (values, action) => {
    dispatch(loginUser(values))
    action.resetForm()
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Grid container className={classes.login}>
        <Grid item xs={6}></Grid>
        <Grid item xs={6} className={classNames('loginformContainer')}>
          <Typography variant="h6">Login</Typography>
          <Form className={classNames('loginform')}>
            <Box className={classNames('formField')}>
              <Field as={TextField} name="username" label="Username" fullWidth/>
              <ErrorMessage name="username" />
            </Box>
            <Box className={classNames('formField')}>
              <Field as={TextField} type="password" name="password" label="Password" fullWidth/>
              <ErrorMessage name="password" />
            </Box>
            <Box className={classNames('formField')}>
              <Field as={Checkbox} name="remember" inputProps={{ 'aria-label': 'Checkbox A' }} value="true" label="remember me"/>
            </Box>
            <Button variant="contained" color="primary" type="submit" className={classNames('formButton')}>Login</Button>
          </Form>
        </Grid>
      </Grid>
    </Formik>
  )
}

export default Login
