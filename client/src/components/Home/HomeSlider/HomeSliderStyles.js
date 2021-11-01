import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        slider: (props) => ({
            marginTop: '0rem',
            height: '100vh',
            overflow: 'hidden',
            position: 'relative',
            background: theme.palette.primary.main,
    
            [theme.breakpoints.down(429)]: {
                width: '100vw',
            },

            '& .sliderImg': {
                width: '100%',
                height: 'auto', 
                background: '#142034', 
                opacity: '0.1',

                [theme.breakpoints.down(429)]: {
                    height: '100vh',
                    width: '100%',
                },
            },

            '& .container': {
                position: 'absolute',
                padding: '0rem',
                bottom: '7rem',
                left: '7rem',
                zindex: '5',
                display: 'flex',
                alignItems: 'flex-end',
                height: '100%',
                // border: '1px solid red',

                [theme.breakpoints.down(429)]: {
                    position: 'absolute',
                    left: '0rem',
                    bottom: '3rem',
                    padding: '0 2rem',
                    // width: '200px',
                    overflowWrap: 'break-word',
                    wordWrap: 'break-word',
                },
    
                '& .content': {
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end',
                    marginTop: '10rem',
                    flexDirection: 'column',
                    color: 'white',
                    // border: '1px solid red',
                    // overflow: 'hidden',

                    [theme.breakpoints.down(429)]: {
                        alignItems: 'flex-start',
                        height: '70%',
                    },
        
                    '& .textMain': {
                        color: theme.palette.ourgold.main,
                        fontSize: '2.5rem',
                        lineHeight: '3.5rem',
                        backgroungColor: 'gray',
                        letterSpacing: '0.05rem',
                        opacity: '0.75',
                        textTransform: 'uppercase',
                        fontWeight: '500',

                        [theme.breakpoints.down(429)]: {
                            fontSize: '2rem',
                            lineHeight: '2.25rem',
                        },
                    },
        
                    '& .textContent': {
                        margin: '0.75rem 0 3rem',
                        fontSize: '1.25rem',
                        lineHeight: '1.75rem',
                        letterSpacing: '0.1rem',
                        width: '70%',

                        [theme.breakpoints.down(429)]: {
                            fontSize: '1rem',
                            // border: '1px solid gold',
                        },
                    },

                    '& .btnSection': {

                        '& .btnContainer': {
                            display: 'flex',
                            alignItems: 'center',

                            '& .btnIcon': {
                                fontSize: '1rem',
                                marginRight: '1rem',
                                border: '1px solid white',
                                borderRadius: '.5rem',
                                width: '4rem',
                                height: '4rem',
                                padding: '.65rem',
                                cursor: 'pointer',

                                '&:hover': {
                                    background: 'white',
                                    color: theme.palette.ourgold.main,
                                }
                            },

                            '& .ar': {
                                marginRight: '0rem',
                                marginLeft: '1rem',
                            },

                            '& .btnText': {
                                letterSpacing: '0.1rem',
                            }
                        }
                    },

                    '& .ar': {
                        fontFamily: "'Almarai', sans-serif",
                    },
                }
            },

            '& .ar': {
                right: '7rem',
                left: 'auto'
            }
        })
    }
))