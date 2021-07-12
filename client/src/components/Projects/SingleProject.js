import { Box } from '@material-ui/core'
import React from 'react'

const SingleProject = ({ item }) => {
    // console.log(item[0].name)
    return (
        <Box>
            { item.image ? <img src={item[0].image} alt={item[0].name} style={{ height: '25rem', width: 'auto' }}/> : null }
        </Box>
    )
}

export default SingleProject
