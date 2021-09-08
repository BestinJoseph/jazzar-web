import React from 'react'
import { Box, Button, TextField } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

import useStyles from './ContactFormStyles'
import { postContactAction } from '../../../actions/contactActions'

const ContactForm = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const initialValues = {
        name: '',
        company: '',
        email: '',
        mobile: '',
        message: ''
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string("Name must be a string.").required("Name field is required."),
        company: Yup.string().required("Company name required.").max(50, "Must not exceed 50 characters."),
        email: Yup.string().required("Email required").email("Must be email."),
        mobile: Yup.number("Must be a number, ex 00966-XXX-XXX-XXX").required("Mobile number required"),
        message: Yup.string().min(5, "Message is too low, must be minimum 10 words.").required("Message required.")
    })

    const handleSubmit = (values, actions) => {

        // actions.setSubmitting(true)
        dispatch(postContactAction(values))
        actions.resetForm()
    }

    return (
        <Box className={classes.formBody} boxShadow={6}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form autoComplete="off">
                    <Field name="name" type="text" autoComplete="off" 
                        as={TextField} label="Full Name" 
                        fullWidth className={ classes.textFieldInput } 
                        InputProps={{ classes: { root: classes.rootInput }}} 
                        InputLabelProps={{shrink: true, classes: { root: classes.labelRoot }}}
                    />
                    <ErrorMessage name="name" style={{ color: 'black', marginBottom: '1rem', }}/>
                    <Field name="company" type="text" as={TextField} label="Company Name" fullWidth className={ classes.textFieldInput } InputProps={{ classes: { root: classes.rootInput }}} InputLabelProps={{shrink: true, classes: { root: classes.labelRoot }}}/>
                    <ErrorMessage name="company" style={{ color: 'black', marginBottom: '1rem', }}/>
                    <Field name="email" type="text" as={TextField} label="Email" fullWidth className={ classes.textFieldInput } InputProps={{ classes: { root: classes.rootInput }}} InputLabelProps={{shrink: true, classes: { root: classes.labelRoot }}}/>
                    <ErrorMessage name="email" style={{ color: 'black', marginBottom: '1rem', }}/>
                    <Field name="mobile" type="text" as={TextField} label="Mobile Number" fullWidth className={ classes.textFieldInput } InputProps={{ classes: { root: classes.rootInput }}} InputLabelProps={{shrink: true, classes: { root: classes.labelRoot }}}/>
                    <ErrorMessage name="mobile" style={{ color: 'black', marginBottom: '1rem', }}/>
                    <Field name="message" type="text" as={TextField} label="Message" fullWidth className={ classes.textFieldInput } InputProps={{ classes: { root: classes.rootInput }}} InputLabelProps={{shrink: true, classes: { root: classes.labelRoot }}} multiline rows={4}/>
                    <ErrorMessage name="message" style={{ color: 'black', marginBottom: '1rem', }}/>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={ classes.formBtn }>Send me message</Button>
                </Form>
            </Formik>
        </Box>
    )
}

export default ContactForm
