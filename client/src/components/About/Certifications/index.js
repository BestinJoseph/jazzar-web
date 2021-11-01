import React from 'react'
import { Container, Typography } from '@material-ui/core'

import useStyles from './CertificationsStyles'
import classNames from 'classnames'

const Certifications = () => {
    const classes = useStyles()

    return (
        <Container className={classes.cerification}>
            <Typography variant="h6" className={classNames('certSubTitle')}>We're an</Typography>
            <Typography variant="h2" className={classNames('certTitle')}>ISO ACCREDITED CONSULTANT</Typography>
            <Typography variant="h4" className={classNames('certInnerTitle')}>AUTHORIZED TO CERTIFY SAMPLES</Typography>
            <Typography variant="body1" className={classNames('certBodyText')}>17025 : 2017</Typography>
        </Container>
    )
}

export default Certifications
