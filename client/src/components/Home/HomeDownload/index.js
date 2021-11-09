import React from 'react'
import { Box, Button, TextField, Typography } from '@material-ui/core'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { Form, Formik, Field } from 'formik'

import useStyles from './HomeDownloadStyles'
import preq from '../../../assets/images/preQBook.png'

const HomeDownload = () => {
    const classes = useStyles()
    const { i18n } = useTranslation()

    const handleSubmit = (values, {actions}) => {
        console.log(values)
    }

    return(
        <Box className={classes.homedownload}>
            <Box className={classNames('container')}>
                <Box className={classNames( i18n.language === 'en' ? 'downloadContainer' : 'downloadContainer arDC')}>
                    <Typography className={classNames('downloadTitle')}>Ready To Grow? Get Your Free Proposal Today:</Typography>
                    <Typography className={classNames('downloadBody')}>Take the next step in growing your business using digital marketing. Connect with one of our expert digital strategists to learn how WebFX can help you reach your business goals.</Typography>
                    <Box className={classNames('downLoadForm')}>
                        <Formik initialValues={{ email: '' }} onSubmit={handleSubmit}>
                            <Form>
                                <Field 
                                    placeholder="enter your email address" 
                                    fullWidth 
                                    name="email"
                                    autoComplete="off"
                                    as={TextField}
                                    InputProps={{ classes: { root: classes.inputClass}}}
                                />
                                <Button className={classNames('downloadBtn')} type="submit">Get Pre-Q</Button>
                            </Form>
                        </Formik>
                    </Box>
                </Box>
                <img src={preq} alt="ojce prequalification" className={classNames('preqBook')} />
            </Box>
        </Box>
    )
}

export default HomeDownload