import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        aboutMain: {
            padding: '7.5rem 0rem 0rem',
    
            [theme.breakpoints.down(412)]: {
                padding: '4rem 1rem 0 1rem',
            },
    
            '& .about': {
                padding: '0rem',
        
                '& .container': {
                    position: 'relative',
                    padding: '0rem 0rem 7.5rem 0rem',

                    [theme.breakpoints.down(412)]: {
                        paddingBottom: '6rem',
                    },
        
                    '& .topContent': {
                        padding: '0rem 0',
        
                        '& .title': {
                            width: '85%',
                            fontWeight: '900',
                            letterSpacing: '-0.1rem',
                            lineHeight: '3rem',
                            color: '#374046',
                            fontSize: '2.5rem',
                        },
        
                        '& .body': {
                            width: '85%',
                            marginTop: '1.5rem',
                            fontSize: '1.1rem',
                            color: '#869298'
                        },
    
                        '& .aboutBtn': {
                            background: '#1C2D47',
                            color: 'white',
                            marginTop: '1.75rem',
                            padding: '.75rem 1.5rem',
                            fontSize: '1.1rem',
    
                            '&:hover': {
                                background: '#364b6b'
                            }
                        }
                    },
    
                    '& .absoluteGrid': {
                        postion: 'relative',
                        // background: 'orange',
    
                        '& .absoluteCon': {
                            position: 'absolute',
                            right: '-2rem',
                            top: '5rem',
                            // border: '1px solid red',
                            // background: 'orange',

                            '& .aboutImg': {
                                width: '30rem', 
                                height: 'auto',

                                [theme.breakpoints.down(412)]: {
                                    width: '100%',
                                }
                            },

                            [theme.breakpoints.down(412)]: {
                                position: 'relative',
                                left: '0rem',
                                top: '3rem',
                                background: 'none',
                            }
                        },

                        '& .absoluteCon_arb': {
                            position: 'absolute',
                            left: '2rem',
                            top: '5rem',
                            // border: '1px solid red',
                            // background: 'orange',

                            '& .aboutImg': {
                                width: '30rem', 
                                height: 'auto',
                            },
                        }
                    }
                },
            },
    
            '& .bottomContent': {
                // border: '1px solid red',
    
                '& .contentSec': {
                    background: '#F2F6FC',
                    padding: '7.5rem 0rem',
                    display: 'flex',
                    justifyContent: 'flex-end',

                    [theme.breakpoints.down(412)]: {
                        padding: '2rem 1rem',
                    },
                    
                    '& .textSec': {
                        width: '640px',
                        padding: '0 5rem 0 0',

                        [theme.breakpoints.down(412)]: {
                            width: '100%',
                            padding: '0 2rem 0 0',
                        },
    
                        '& .textSecTitle': {
                            fontWeight: '900',
                            letterSpacing: '-0.175rem',
                            marginBottom: '1.75rem',
                            lineHeight: '3rem',
                            fontSize: '2.5rem',
                            color: '#374046',

                            [theme.breakpoints.down(412)]: {
                                fontSize: '2rem',
                                lineHeight: '2.25rem',
                            }
                        },
    
                        '& .textSecBody': {
                            marginBottom: '1rem',
                            fontSize: '1.1rem',
                            color: '#869298',
                        }
                    },

                    '& .textSec_ar': {
                        width: '640px',
                        padding: '0 0 0 5rem',

                        '& .textSecTitle': {
                            fontWeight: '900',
                            letterSpacing: '-0.175rem',
                            marginBottom: '1.75rem',
                            lineHeight: '3rem',
                            fontSize: '2.5rem',
                            color: '#374046',
                        }
                    }
                }
            }
        },
    
    }
))