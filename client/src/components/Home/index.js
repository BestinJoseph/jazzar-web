/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment } from 'react'
import { Box } from '@material-ui/core'

import HomeSlider from './HomeSlider'
import Client from './Clients'
import HomeAbout from './HomeAbout'
import HomeProjects from './HomeProjects'
import HomeServices from './HomeServices'
import History from '../History'
import HomeDownload from './HomeDownload'
import HomePartners from './HomePartners'

export default () => {
    
    return (
        <Fragment>
            <Box style={{ height: '100%' }}>
                <HomeSlider />
                <HomePartners />
                <HomeAbout />
                <HomeProjects />
                <HomeServices />
                <HomeDownload />
                <Client />
                <History />
            </Box>
        </Fragment>
    )
}