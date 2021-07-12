import React from 'react'
import { Box, Button, makeStyles, TextField } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'

const useStyles = makeStyles((theme) => (
    {
        formBody: {
            padding: '2.5rem',
            background: 'white',
            borderRadius: '.25rem',

            [theme.breakpoints.down(415)]: {
                padding: '2.5rem 1rem'
            }
        },

        textFieldInput: {
            // background: 'blue',
            fontSize: '2rem',
            // border: '1px solid red',
            padding: '1.25rem 0',

            [theme.breakpoints.down(415)]: {
                padding: '1rem 0',
            }
        },
    
        labelRoot: {
            fontSize: '1.5rem',
            fontWeight: '600'
        },
    
        rootInput: {
            fontSize: '1.25rem'
        },
    
        formBtn: {
            padding: '1.1rem 0',
            fontSize: '1.15rem',
            fontWeight: '600'
        }
    }
))

const ContactForm = () => {
    const classes = useStyles()

    const initialValues = {
        name: '',
        company: '',
        email: '',
        mobile: '',
        message: ''
    }

    const handleSubmit = (values, actions) => {
        console.log(values)
    }

    return (
        <Box className={classes.formBody} boxShadow={6}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form autoComplete="off">
                    <Field name="name" type="text" autoComplete="off" 
                        as={TextField} label="Full Name" 
                        fullWidth className={ classes.textFieldInput } 
                        InputProps={{ classes: { root: classes.rootInput }}} 
                        InputLabelProps={{shrink: true, classes: { root: classes.labelRoot }}}
                    />
                    <Field name="company" type="text" as={TextField} label="Company Name" fullWidth className={ classes.textFieldInput } InputProps={{ classes: { root: classes.rootInput }}} InputLabelProps={{shrink: true, classes: { root: classes.labelRoot }}}/>
                    <Field name="email" type="text" as={TextField} label="Email" fullWidth className={ classes.textFieldInput } InputProps={{ classes: { root: classes.rootInput }}} InputLabelProps={{shrink: true, classes: { root: classes.labelRoot }}}/>
                    <Field name="mobile" type="text" as={TextField} label="Mobile Number" fullWidth className={ classes.textFieldInput } InputProps={{ classes: { root: classes.rootInput }}} InputLabelProps={{shrink: true, classes: { root: classes.labelRoot }}}/>
                    <Field name="message" type="text" as={TextField} label="Message" fullWidth className={ classes.textFieldInput } InputProps={{ classes: { root: classes.rootInput }}} InputLabelProps={{shrink: true, classes: { root: classes.labelRoot }}} multiline rows={4}/>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={ classes.formBtn }>Send me message</Button>
                </Form>
            </Formik>
        </Box>
    )
}

export default ContactForm
