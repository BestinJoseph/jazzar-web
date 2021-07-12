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
                            fontWeight: '600',
                            letterSpacing: '0.01rem',
                            lineHeight: '2.5rem',
                            color: '#90752a',
                            fontSize: '2rem',
                            textTransform: 'uppercase',
                        },

                        '& .arTI': {
                            fontFamily: "'Almarai', sans-serif",
                        },
        
                        '& .body': {
                            width: '85%',
                            marginTop: '1.5rem',
                            fontSize: '1.1rem',
                            color: '#869298'
                        },

                        '& .arBO': {
                            fontFamily: "'Almarai', sans-serif",
                            lineHeight: '1.75rem',
                        },
    
                        '& .aboutBtn': {
                            background: '#b89535',
                            color: 'white',
                            display: 'inline-block',
                            marginTop: '1.75rem',
                            padding: '1.5rem',
                            fontSize: '1.1rem',
                            textDecoration: 'none',
    
                            '&:hover': {
                                background: '#90752a'
                            }
                        }
                    },

                    '& .arTC': {
                        // border: '1px solid red'
                    },

                    '& .absoluteGrid': {
                        postion: 'relative',
                        // border: '1px solid orange',
                        width: '100%',
    
                        '& .absoluteCon': {
                            position: 'absolute',
                            right: '-2rem',
                            top: '5rem',
                            // border: '1px solid red',

                            '& .aboutImg': {
                                width: '30rem', 
                                height: 'auto',
                                // display: 'none',

                                [theme.breakpoints.down(412)]: {
                                    width: '100%',
                                }
                            },

                            [theme.breakpoints.down(412)]: {
                                position: 'relative',
                                left: '0rem',
                                top: '3rem',
                                background: 'none',
                            },

                            '& .circleAbstract': {
                                width: '5rem',
                                height: '5rem',
                                position: 'absolute',
                                top: '18rem',
                                left: '-10rem',
                                zIndex: '1',
                                // border: '1px solid gold',
                            },

                            '& .arCC': {
                                left: 'auto',
                                right: '-10rem',
                            },

                            '& .squareAbstract': {
                                width: '10rem',
                                height: '10rem',
                                position: 'absolute',
                                top: '-8rem',
                                left: '10rem',
                                zIndex: '-1',
                            },

                            '& .squareFull': {
                                width: '5rem',
                                height: '5rem',
                                position: 'absolute',
                                top: '-3rem',
                                right: '0rem',
                                zIndex: '1',
                                background: 'gold',
                            },

                            '& .arFL': {
                                right: 'auto',
                                left: '0rem',
                            },

                            '& .squareAbstractLow': {
                                width: '10rem',
                                height: '10rem',
                                position: 'absolute',
                                bottom: '-30rem',
                                left: '-17rem',
                                zIndex: '-1',
                            },

                            '& .arSAL': {
                                left: 'auto',
                                right: '-17rem',
                            },

                            '& .squareLowFull': {
                                width: '5rem',
                                height: '5rem',
                                position: 'absolute',
                                bottom: '-10rem',
                                left: '-5rem',
                                zIndex: '1',
                                background: 'blue',
                            },

                            '& .arFLL': {
                                right: '-5rem',
                                left: 'auto',
                            }
                        },

                        '& .arb': {
                            left: '-2rem',
                            top: '5rem',
                            right: 'auto',
                        },
                    }
                }
            },
    
            '& .bottomContent': {
                // border: '1px solid red',
    
                '& .contentSec': {
                    background: '#e9dbb540',
                    padding: '7.5rem 0rem',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    // height: '44.25rem',

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
                            fontWeight: '600',
                            letterSpacing: '0.1rem',
                            marginBottom: '1.75rem',
                            lineHeight: '2.5rem',
                            fontSize: '2rem',
                            color: '#90752a',

                            [theme.breakpoints.down(412)]: {
                                fontSize: '2rem',
                                lineHeight: '2.25rem',
                            }
                        },

                        '& .arTST': {
                            fontFamily: "'Almarai', sans-serif",
                        },
    
                        '& .textSecBody': {
                            marginBottom: '1rem',
                            fontSize: '1.1rem',
                            color: '#869298',
                        },

                        '& .arTSB': {
                            fontFamily: "'Almarai', sans-serif",
                            fontWeight: '600',
                            lineHeight: '1.85rem',
                            marginBottom: '1.5rem',
                        },
                    },

                    '& .arTS': {
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