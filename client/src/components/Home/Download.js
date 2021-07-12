import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@material-ui/core'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { Form, Formik, Field } from 'formik'

import useStyles from '../../styles/Home/Download'
import preq from '../../assets/images/pre_q_cover_page.png'

const Download = () => {
    const classes = useStyles()
    const { email, setEmail } = useState()
    const { i18n } = useTranslation()

    const handleChange = (e, value) => {
        console.log(e)
        console.log(value)
        setEmail(e)
    }

    if(email) console.log(email)

    const handleSubmit = (values, {actions}) => {
        console.log(values)
    }

    return(
        <Box className={classes.download}>
            <Box className={classNames( i18n.language === 'en' ? 'downloadContainer' : 'downloadContainer_arb')}>
                <Typography className={classNames('downloadTitle')}>Ready To Grow? Get Your Free Proposal Today:</Typography>
                <Typography className={classNames('downloadBody')}>Take the next step in growing your business using digital marketing. Connect with one of our expert digital strategists to learn how WebFX can help you reach your business goals.</Typography>
                <Box className={classNames('downLoadForm')}>
                    <Formik initialValues={{ email: '' }} onSubmit={handleSubmit}>
                        <Form>
                            <Field 
                                placeholder="enter your email address" 
                                fullWidth 
                                name="email"
                                onChange={ () => handleChange() }
                                autoComplete="off"
                                as={TextField}
                                InputProps={{ classes: { root: classes.inputClass}}}
                                className={ classes.textFieldInput }
                            />
                            <Button className={classNames('downloadBtn')} type="submit">Download Pre-Qualification</Button>
                        </Form>
                    </Formik>
                </Box>
            </Box>
            <img src={preq} alt="ojce prequalification" />
        </Box>
    )
}

export default Download