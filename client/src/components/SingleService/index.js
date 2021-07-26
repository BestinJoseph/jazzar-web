import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import { useSelector } from 'react-redux'

import SingleServiceSlide from './SingleServiceSlide'
import SingleServiceContent from './SingleServiceContent'
import History from '../History'
import SingleServiceImages from './SingleServiceImages'

const SingleService = (props) => {
  const { services } = useSelector(state => state.services)
  const [service, setService] = useState()
  const slug = props.match.params.slug

  // console.log(props.match.params.slug)
  
  useEffect( () => {
    let isSubscribed = true

    if(isSubscribed && services.length > 0 ) {
      setService(Object.assign({}, ...services.filter( ser => ser.slug === slug)))
    }

    return () => isSubscribed = false
  }, [services, slug])

  return (
    <Box>
      <SingleServiceSlide />
      <SingleServiceContent service={service}/>
      <SingleServiceImages />
      <History />
    </Box>
  )
}

export default SingleService

