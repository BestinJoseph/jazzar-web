import React from 'react'
import { Box } from '@material-ui/core'

const ProjectSlide = (props) => {
    const { item }  = props

    return (
        <Box style={styles.slide}>
            <img src={item.image} alt={item.name} style={styles.image}/>
            <br />
            { item.project}
        </Box>
    )
}

const styles = {
    slide: {
        margin: '0 0.15rem', 
        height: '15rem', 
        cursor: 'pointer',
        border: '1px solid red',
        
        '&:hover': {
            // opacity: '0.3',
            border: '1px solid orange',
        }
    },

    image: {
        width: '100%',
        height: 'auto',

        '&:hover':{
            opacity: '0.3',
            border: '1px solid red',
        }
    }
}

export default ProjectSlide