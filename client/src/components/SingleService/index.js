import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Box } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import _ from 'lodash'

import SingleServiceSlide from './SingleServiceSlide'
import SingleServiceContent from './SingleServiceContent'
import History from '../History'
import SingleServiceImages from './SingleServiceImages'

const SingleService = (props) => {
  const { services } = useSelector(state => state.services)
  const [service, setService] = useState({})
  const location = useLocation()
  const _isUnmounted = useRef(true)

  const slug = new URLSearchParams(location.search).get('slug')

  useEffect( () => {
    if(_isUnmounted && services.length > 0) {
      setService(services.find( ser => ser.slug === slug))
    }

    return () => { _isUnmounted.current = false }
  }, [services, slug])

  return (
    <Box>
      {
        _.isEmpty(service) ? 
          null
        : 
        <Fragment>
          <SingleServiceSlide service={service}/>
          <SingleServiceContent service={service}/>
          <SingleServiceImages service={service}/>
        </Fragment>
      }
      <History />
    </Box>
  )
}

export default SingleService

