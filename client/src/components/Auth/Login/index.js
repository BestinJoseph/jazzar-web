import { Box, Button, TextField, Typography } from '@material-ui/core'
import classNames from 'classnames'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

import useStyles from './LoginStyles'
import ErrorsMessage from '../../Layouts/ErrorsMessage'
import { loginUser } from '../../../actions/authActions'

const Login = () => {
    const classes = useStyles()
    const { errors } = useSelector( state => state )
    const dispatch = useDispatch()

    const initialValues = { username: '', password: '' }

    const validationSchema = Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required()
    })

    const handleSubmit = (values, actions) => {
        dispatch(loginUser(values))
        actions.resetForm()
    }

    return (
        <Box className={classes.login}>
            <Box>
                <Box className={classNames('loginHeader')}>
                    <Typography variant="h3" className={classNames('loginTitle')}>OJCECo. Profile</Typography>
                    <Typography variant="body1" className={classNames('loginSubTitle')}>Welcome back, login to your account</Typography>
                </Box>
                { errors.message ? <ErrorsMessage errors={errors} /> : null }
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                    <Box className={classNames('loginForm')}>
                        <Form>
                            <Box className={classNames('loginTextField')}>
                                <Field as={TextField} name="username" label="Username" fullWidth />
                                <ErrorMessage name="username" render={ msg => <Box style={{ color: 'red', }}>{msg}</Box>} />
                            </Box>
                            <Box className={classNames('loginTextField')}>
                                <Field as={TextField} name="password" label="Password" fullWidth type="password" />
                                <ErrorMessage name="password" render={ msg => <Box style={{ color: 'red', }}>{msg}</Box>} />
                            </Box>
                            <Button type="submit" variant="contained" color="primary" className={classNames('loginBtn')}>Sign in</Button>
                        </Form>
                    </Box>
                </Formik>
            </Box>
        </Box>
    )
}

export default Login
