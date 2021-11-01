import React, { useEffect } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import * as Yup from 'yup'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import useStyles from './AdminRegisterStyles'
import { registerUser, clearErrors } from '../../../actions/authActions'
import CloseIcon from '@material-ui/icons/Close'
import _ from 'lodash'

const Register = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const { users, errors } = useSelector( state => state )

    console.log( errors )

    useEffect(() => {
        if(users.isAuthenticated === true) {
            history.push('/admin')
        }
    }, [users, history])

    const initialValues = { username: '', email: '', password: '', remember: false}

    const validationSchema = Yup.object().shape({
        username: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required()
    })

    const handleSubmit = (values, action) => {
        dispatch(registerUser(values, history))
        if( errors ) {

        } else {
            if(true) {
                action.resetForm()
            }
        }
    }

    const handleClose = () => {
        dispatch(clearErrors())
    }

    return (
        <Box>
            { !_.isEmpty(errors) ? 
                <Box style={{ display: 'flex', justifyContent: 'space-between', background: 'red', color: 'white', }}>
                    <Typography variant="h6">{errors.errors}</Typography>
                    <CloseIcon onClick={() => handleClose() } />
                </Box>
                : null
            }
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Grid container className={classes.register}>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={6} className={classNames('registerformContainer')}>
                    <Typography variant="h6">Register</Typography>
                    <Form className={classNames('registerform')}>
                        <Box className={classNames('formField')}>
                            <Field as={TextField} name="username" label="User Name" fullWidth/>
                            <ErrorMessage name="username" />
                        </Box>
                        <Box className={classNames('formField')}>
                            <Field as={TextField} name="email" label="Email" fullWidth/>
                            <ErrorMessage name="email" />
                        </Box>
                        <Box className={classNames('formField')}>
                            <Field as={TextField} password="true" name="password" label="Password" fullWidth/>
                            <ErrorMessage name="password" />
                        </Box>
                        <Button variant="contained" color="primary" type="submit" className={classNames('formButton')}>Register</Button>
                    </Form>
                    </Grid>
                </Grid>
            </Formik>
        </Box>
    )
}

export default Register
