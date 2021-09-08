import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    slide: {
        margin: '0 0.15rem', 
        height: '15rem', 
        cursor: 'pointer',
        // border: '1px solid red',
        overflow: 'hidden',
        position: 'relative',
        
        '&:hover': {
            // border: '1px solid orange',
        },

        '& .imageText': {
            position: 'absolute',
            zIndex: '2',
            bottom: '0',
            color: 'white',
            fontSize: '.9rem',
            padding: '1rem',
        }
    },

    image: {
        width: 'auto',
        height: '100%',

        '&:hover':{
            opacity: '0.3',
            // border: '1px solid red',
        }
    }
}))