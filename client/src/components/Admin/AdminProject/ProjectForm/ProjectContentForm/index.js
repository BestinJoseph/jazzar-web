import React from 'react'
import { Box, TextField, Typography, Button } from '@material-ui/core'
import { Form, Field, ErrorMessage } from 'formik'
import classNames from 'classnames'
import { CheckboxWithLabel } from 'formik-material-ui'
import ErrorMessageComponent from '../../../CustomComponents/ErrorMessageComponent'

const index = ({services}) => {
    return (
        <Form>
            <Box className={classNames('projectFormTextFieldCover')}>
                <Field as={TextField} type="text" name="project" label="Project Name" fullWidth InputLabelProps={{shrink: true}}/>
                <ErrorMessage name="project" component={ErrorMessageComponent}/>
            </Box>
            <Box className={classNames('projectFormTextFieldCover')}>
                <Field as={TextField} type="text" name="client" label="Client" fullWidth InputLabelProps={{shrink: true}}/>
                <ErrorMessage name="client" component={ErrorMessageComponent}/>
            </Box>
            <Box className={classNames('projectFormTextFieldCover')}>
                <Field as={TextField} type="text" name="location" label="Project Location" fullWidth InputLabelProps={{shrink: true}}/>
                <ErrorMessage name="location" component={ErrorMessageComponent}/>
            </Box>
            <Box className={classNames('projectFormTextFieldCover')}>
                <Field as={TextField} type="text" name="category" label="Category" fullWidth InputLabelProps={{shrink: true}}/>
                <ErrorMessage name="category" component={ErrorMessageComponent}/>
            </Box>
            <Box className={classNames('projectFormTextFieldCover')}>
                <Typography variant="body2">Services</Typography>
                { services.map( (ser, index) => (
                    <Field component={CheckboxWithLabel} type="checkbox" name="services" value={ser._id} Label={{ label: `${ser.service}`}} key={index}/>
                ))}
            </Box>
            <Box className={classNames('projectFormTextFieldCover')}>
                <Field as={TextField} type="date" format="DD MM yyyy" name="start_date" label="Project Start Date" fullWidth InputLabelProps={{shrink: true}}/>
                <ErrorMessage name="start_date" component={ErrorMessageComponent}/>
            </Box>
            <Box className={classNames('projectFormTextFieldCover')}>
                <Field as={TextField} type="date" name="end_date" label="Project End Date" fullWidth InputLabelProps={{shrink: true}}/>
                <ErrorMessage name="end_date" component={ErrorMessageComponent}/>
            </Box>
            <Box className={classNames('projectFormTextFieldCover')}>
                <Field as={TextField} type="text" name="description" multiline label="Project Description" fullWidth InputLabelProps={{shrink: true}}/>
                <ErrorMessage name="description" component={ErrorMessageComponent}/>
            </Box>
            <Button type="submit" variant="contained" color="secondary">Submit</Button>
        </Form>
    )
}

export default index
