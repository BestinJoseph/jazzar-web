import React from 'react'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import classNames from 'classnames'
import { useTranslation } from 'react-i18next';

import useStyles from './FormStyles'
import ContactForm from '../../Helpers/ContactForm';

const Form = () => {
    const classes = useStyles()
    const { i18n } = useTranslation()

    return (
        <Box className={classes.form}>
            <Container>
                <Grid container className={classNames('formContainer')}>
                    <Grid item lg={7} className={classNames('contactInfoSection')}>
                        <Box className={classNames("FormHeader")}>
                            <Typography variant="h2" className={classNames('FormTitle')}>Let's do great</Typography>
                            <Typography variant="h2" className={classNames('FormTitle')}>work together.</Typography>
                        </Box>
                        <Grid container className={classNames('contactInfo')}>
                            <Grid item lg={3} xs={12}>
                                <Typography variant="h6" className={classNames('contactTitle')}>Toll Free</Typography>
                                <Typography variant="h5" className={classNames('contactText')}>800.901.555</Typography>
                            </Grid>
                            <Grid item lg={3} xs={12}>
                                <Typography variant="h6" className={classNames('contactTitle')}>Direct Call</Typography>
                                <Typography variant="h5" className={classNames('contactText')}>800.901.555</Typography>
                            </Grid>
                            <Grid item lg={3} xs={12}>
                                <Typography variant="h6" className={classNames('contactTitle')}>Fax</Typography>
                                <Typography variant="h5" className={classNames('contactText')}>800.901.555</Typography>
                            </Grid>
                            <Grid item lg={3}>
                                
                            </Grid>
                        </Grid>
                        <Box className={classNames('specialContact')}>
                            <Grid container >
                                <Grid item lg={6} className={classNames('specialRightSec')} xs={12}>
                                    <Grid container >
                                        <Grid item lg={3}>
                                            <PhonelinkRingIcon style={{ fontSize: '4rem' }}/>
                                        </Grid>
                                        <Grid item lg={9}>
                                            <Typography variant="h6" className={classNames('contactTitle')}>Fax</Typography>
                                            <Typography variant="h5" className={classNames('contactText')}>800.901.555</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item lg={6} className={classNames('specialLeftSec')} xs={12}>
                                    <Typography variant="body1" className={classNames('floatingText')}>Would you prefer to talk to <span className={classNames('floatingTextSpan')}>someone in person?</span></Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item lg={5} className={classNames('formSection')}>
                        <Box className={classNames( i18n.language === 'en' ? 'floatingForm' : 'floatingForm_arb' )}>
                            <ContactForm />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Form
