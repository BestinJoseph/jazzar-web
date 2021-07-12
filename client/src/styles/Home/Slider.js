import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        slider: {
            marginTop: '-0.1rem',
            height: '90vh',
            overflow: 'hidden',
            position: 'relative',
            // zIndex: '-1rem',
            background: '#142034',
    
            [theme.breakpoints.down(412)]: {
                height: '100vh',
            },

            '& .sliderImg': {
                width: '100%',
                height: 'auto', 
                background: '#142034', 
                opacity: '0.2',

                [theme.breakpoints.down(412)]: {
                    height: '100vh',
                    width: 'auto',
                },
            },
    
            '& .container': {
                position: 'absolute',
                padding: '0rem',
                backgroungColor: 'gray',
                top: '0rem',
                left: '19rem',
                zindex: '5',
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                // border: '1px solid red',

                [theme.breakpoints.down(412)]: {
                    position: 'absolute',
                    left: '0rem',
                    padding: '0 2rem',
                    // width: '200px',
                    overflowWrap: 'break-word',
                    wordWrap: 'break-word',
                },
    
                '& .content': {
                    display: 'flex',
                    alignItems: 'center',
                    height: '80%',
                    marginTop: '10rem',
                    color: 'white',

                    [theme.breakpoints.down(412)]: {
                        alignItems: 'flex-start',
                        height: '70%',
                    },
        
                    '& .textMain': {
                        fontWeight: 'bolder',
                        fontSize: '3.5rem',
                        lineHeight: '3.5rem',
                        backgroungColor: 'gray',
                        letterSpacing: '-0.045em',
                        opacity: '0.75',

                        [theme.breakpoints.down(412)]: {
                            fontSize: '2rem',
                            lineHeight: '2.25rem',
                        },
                    },
        
                    '& .textContent': {
                        marginTop: '0.75rem',
                        fontSize: '1.5rem',
                        width: '30rem',

                        [theme.breakpoints.down(412)]: {
                            fontSize: '1.25rem',
                            width: '100%',
                        },
                    }
                },
            }
        }
    }
))