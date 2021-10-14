import React, { useEffect } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import * as Yup from 'yup'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import useStyles from './AdminRegisterStyles'
import { registerUser } from '../../../actions/authActions'

const Register = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const { users } = useSelector( state => state )

    useEffect(() => {
        if(users.isAuthenticated === true) {
            history.push('/admin')
        }
    }, [users, history])

    const initialValues = { firstName: '', lastName: '', username: '', password: '', remember: false}

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        username: Yup.string().email().required(),
        password: Yup.string().required()
    })

    const handleSubmit = (values, action) => {
        dispatch(registerUser(values, history))
        if(true) {
            action.resetForm()
        }

        // action.setErrors() action.setFieldError()
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Grid container className={classes.register}>
            <Grid item xs={6}></Grid>
            <Grid item xs={6} className={classNames('registerformContainer')}>
            <Typography variant="h6">Register</Typography>
            <Form className={classNames('registerform')}>
                <Box className={classNames('formField')}>
                    <Field as={TextField} name="firstName" label="First Name" fullWidth/>
                    <ErrorMessage name="firstName" />
                </Box>
                <Box className={classNames('formField')}>
                    <Field as={TextField} name="lastName" label="Last Name" fullWidth/>
                    <ErrorMessage name="lastName" />
                </Box>
                <Box className={classNames('formField')}>
                    <Field as={TextField} name="username" label="Username" fullWidth/>
                    <ErrorMessage name="username" />
                </Box>
                <Box className={classNames('formField')}>
                    <Field as={TextField} password name="password" label="Password" fullWidth/>
                    <ErrorMessage name="password" />
                </Box>
                <Button variant="contained" color="primary" type="submit" className={classNames('formButton')}>Register</Button>
            </Form>
            </Grid>
        </Grid>
        </Formik>
    )
}

export default Register
