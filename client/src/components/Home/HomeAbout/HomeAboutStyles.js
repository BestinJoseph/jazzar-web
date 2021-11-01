import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        aboutMain: {
            padding: '7.5rem 0rem 0rem',
    
            [theme.breakpoints.down(429)]: {
                padding: '4rem 1rem 0 1rem',
            },
    
            '& .about': {
                padding: '0rem',
        
                '& .container': {
                    position: 'relative',
                    padding: '0rem 0rem 7.5rem 0rem',

                    [theme.breakpoints.down(429)]: {
                        paddingBottom: '6rem',
                    },
        
                    '& .topContent': {
                        padding: '0rem 0',
        
                        '& .title': {
                            width: '85%',
                            fontWeight: '600',
                            letterSpacing: '0.01rem',
                            lineHeight: '2.5rem',
                            color: theme.palette.primary.main,
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
                            color: theme.palette.tertiary.main
                        },

                        '& .arBO': {
                            fontFamily: "'Almarai', sans-serif",
                            lineHeight: '1.75rem',
                        },
    
                        '& .aboutBtn': {
                            background: theme.palette.ourgold.main,
                            color: theme.palette.primary.main,
                            display: 'inline-block',
                            marginTop: '1.75rem',
                            padding: '1.5rem',
                            fontSize: '1.1rem',
                            fontWeight: '600',  
                            textDecoration: 'none',
    
                            '&:hover': {
                                color: theme.palette.ourgold.main,
                                background: theme.palette.secondary.main,
                            }
                        }
                    },

                    '& .arTC': {
                        // border: '1px solid red'
                    },

                    '& .absoluteGrid': {
                        postion: 'relative',
                        width: '100%',

                        [theme.breakpoints.down(429)]: {
                            marginTop: '5rem',
                        },
    
                        '& .absoluteCon': {
                            position: 'absolute',
                            right: '-2rem',
                            top: '5rem',

                            [theme.breakpoints.down(429)]: {
                                position: 'relative',
                                top: '0rem',
                                right: '0rem',
                            },

                            '& .aboutImg': {
                                width: '30rem', 
                                height: 'auto',

                                [theme.breakpoints.down(429)]: {
                                    width: '100%',
                                }
                            },

                            [theme.breakpoints.down(429)]: {
                                position: 'relative',
                                left: '0rem',
                                top: '3rem',
                                background: 'none',
                            },

                            '& .circleAbstract': {
                                width: '10rem',
                                height: '10rem',
                                position: 'absolute',
                                top: '18rem',
                                left: '-5rem',
                                zIndex: '1',

                                [theme.breakpoints.down(429)]: {
                                    top: 'auto',
                                    bottom: '-5rem'
                                },
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

                                [theme.breakpoints.down(429)]: {
                                    left: 'auto',
                                    right: '0rem',
                                },
                            },

                            '& .squareFull': {
                                width: '6rem',
                                height: '6rem',
                                position: 'absolute',
                                top: '-3rem',
                                right: '0rem',
                                zIndex: '1',
                                background: theme.palette.secondary.main,
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
                                background: theme.palette.primary.main,

                                [theme.breakpoints.down(429)]: {
                                    bottom: '0rem',
                                    top: 'auto',
                                    background: 'white',
                                },
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
                    background: theme.palette.secondary.main,
                    padding: '7.5rem 0rem',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    // height: '44.25rem',

                    [theme.breakpoints.down(429)]: {
                        padding: '2rem 1rem',
                    },
                    
                    '& .textSec': {
                        width: '640px',
                        padding: '0 5rem 0 0',

                        [theme.breakpoints.down(429)]: {
                            width: '100%',
                            padding: '0 2rem 0 0',
                        },
    
                        '& .textSecTitle': {
                            fontWeight: '600',
                            letterSpacing: '0.1rem',
                            marginBottom: '1.75rem',
                            lineHeight: '2.5rem',
                            fontSize: '2rem',
                            color: theme.palette.ourgold.main,

                            [theme.breakpoints.down(429)]: {
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
                            color: theme.palette.ajwhite.main,
                        },

                        '& .arTSB': {
                            fontFamily: "'Almarai', sans-serif",
                            // fontWeight: '400',
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
                            color: theme.palette.ajwhite.main,
                        }
                    }
                }
            }
        },
    
    }
))