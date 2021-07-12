import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        sevicesList: {
            marginBottom: '10rem',

            [theme.breakpoints.down(415)]: {
                marginBottom: '3rem',
                padding: '0rem 1rem',
            },
            
            '& .servicesContainer': {
                padding: '0',
    
                '& .servicesLeftSection': {
                    paddingRight: '5rem',
                    // border: '1px solid red',

                    [theme.breakpoints.down(415)]: {
                        paddingRight: '0rem',
                    },
    
                    '& .servicesHeaderTitle': {
                        fontWeight: '900',
                        fontSize: '3rem',
                        letterSpacing: '-0.15rem',
                        lineHeight: '3rem',
                        marginBottom: '2rem',
                        color: theme.palette.main.main,
    
                        '& span': {
                            display: 'block'
                        }
                    },
    
                    '& .servicesHeaderBody': {
                        fontSize: '1.15rem',
                        marginBottom: '2rem',
                    },
    
                    '& .servicesListItems': {
                        padding: '2rem 0',
    
                        '& .itemTitleContainer': {
                            position: 'relative',
                            marginBottom: '2rem',
    
                            '& .itemImage': {
                                width: '100%',
                                height: 'auto',
                                borderRadius: '0.5rem',
                            },
    
                            '& .itemTitle': {
                                fontWeight: '900',
                                fontSize: '2rem',
                                letterSpacing: '-0.15rem',
                                marginBottom: '1.5rem',
                            }
                        },
    
                        '& .itemHeaderTitle': {
                            fontWeight: '900',
                            fontSize: '3rem',
                            lineHeight: '3rem',
                            letterSpacing: '-0.15rem',
                            marginBottom: '2rem',
                        },
    
                        '& .itemBody': {
                            fontSize: '1.15rem',
                            color: '#869298',
                            marginBottom: '2rem',
                        },
    
                        '& .itemBtn': {
                            background: '#26B16D',
                            color: 'white',
                            padding: '0.5rem 1.5rem',
                            fontSize: '1.15rem',
    
                            '&:hover': {
                                background: '#1d8753',
                            }
                        }
                    }
                },

                '& .servicesLeftSection_arb': {
                    paddingLeft: '5rem',
                    // border: '1px solid red',

                    [theme.breakpoints.down(415)]: {
                        paddingLeft: '0rem',
                    },
    
                    '& .servicesHeaderTitle': {
                        fontWeight: '900',
                        fontSize: '3rem',
                        letterSpacing: '-0.15rem',
                        lineHeight: '3rem',
                        marginBottom: '2rem',
    
                        '& span': {
                            display: 'block'
                        }
                    },
    
                    '& .servicesHeaderBody': {
                        fontSize: '1.15rem',
                        marginBottom: '2rem',
                    },
    
                    '& .servicesListItems': {
                        padding: '2rem 0',
    
                        '& .itemTitleContainer': {
                            position: 'relative',
                            // border: '1px solid red',
                            marginBottom: '2rem',
    
                            '& .itemImage': {
                                width: '100%',
                                height: 'auto',
                                borderRadius: '0.5rem',
                                // boxShadow: '0px 0px 8px 4px #88888840',
                            },
    
                            '& .itemTitle': {
                                fontWeight: '900',
                                fontSize: '2rem',
                                letterSpacing: '-0.15rem',
                                marginBottom: '1.5rem',
                            }
                        },
    
                        '& .itemHeaderTitle': {
                            fontWeight: '900',
                            fontSize: '3rem',
                            lineHeight: '3rem',
                            letterSpacing: '-0.15rem',
                            marginBottom: '2rem',
                        },
    
                        '& .itemBody': {
                            fontSize: '1.15rem',
                            color: '#869298',
                            marginBottom: '2rem',
                        },
    
                        '& .itemBtn': {
                            background: '#26B16D',
                            color: 'white',
                            padding: '0.5rem 1.5rem',
                            fontSize: '1.15rem',
    
                            '&:hover': {
                                background: '#1d8753',
                            }
                        }
                    }
                },

                '& .rightServiceContainer': {
                    // background: 'blue',
                    position: 'relative',
    
                    '& .static': {
                        position: 'fixed',
                        width: '35%',
                        top: '10rem',
                        right: '11.25rem',
                        paddingLeft: '0rem',
                        border: 'none',
                    },
    
                    '& .staticbase': {
                        position: 'absolute',
                        bottom: '0rem',
                        left: '0rem',
                        color: theme.palette.primary.main,
                    },
                }
            }
        }
    }
))