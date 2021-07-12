import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        history: {
            height: '100%',

            [theme.breakpoints.down(412)]: {
                width: '100%',
            },
    
            '& .historyLeftPanel': {
                background: '#829DCE',
                padding: '7rem 0 11rem',

                [theme.breakpoints.down(412)]: {
                    padding: '4rem 1rem',
                },
    
                '& .leftHistoryContainer': {
                    width: '500px',
                    marginLeft: '16.5%',
                    // border: '1px solid red',

                    [theme.breakpoints.down(412)]: {
                        width: '100%',
                    },

                    '& .historySubTitle': {
                        fontWeight: '700',
                        fontSize: '2rem',
                        color: 'white',
                        marginBottom: '1rem',
                    },

                    '& .historyTitle': {
                        fontWeight: '900',
                        fontSize: '3rem',
                        letterSpacing: '-0.15rem',
                        lineHeight: '2.75rem',
                        marginBottom: '2rem',
                        color: 'white',
                    },

                    '& .historyBody': {
                        fontSize: '1.25rem',
                        fontWeight: '500',
                        marginBottom: '1rem',
                        color: 'white',
                    },
    
                    '& .historyBtn': {
                        color: 'white',
                        borderColor: 'white',
                        borderWidth: '0.2rem',
                        padding: '1rem',
                        marginTop: '1rem',
                        fontWeight: '600',
                        fontSize: '1rem',
                    }
                },

                '& .leftHistoryContainer_arb': {
                    width: '500px',
                    marginRight: '16.5%',
                    // border: '1px solid red',

                    [theme.breakpoints.down(412)]: {
                        width: '100%',
                    },

                    '& .historySubTitle': {
                        fontWeight: '700',
                        fontSize: '2rem',
                        color: 'white',
                        marginBottom: '1rem',
                    },

                    '& .historyTitle': {
                        fontWeight: '900',
                        fontSize: '3rem',
                        letterSpacing: '-0.15rem',
                        lineHeight: '2.75rem',
                        marginBottom: '2rem',
                        color: 'white',
                    },

                    '& .historyBody': {
                        fontSize: '1.25rem',
                        fontWeight: '500',
                        marginBottom: '1rem',
                        color: 'white',
                    },
    
                    '& .historyBtn': {
                        color: 'white',
                        borderColor: 'white',
                        borderWidth: '0.2rem',
                        padding: '1rem',
                        marginTop: '1rem',
                        fontWeight: '600',
                        fontSize: '1rem',
                    }
                }
            },
    
            '& .rightContainer': {
                position: 'relative',
    
                '& .historyRightPanel': {
                    overFlow: 'hidden',
                    position: 'absolute',
                    left: '-13rem',
                    // border: '1px solid red',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',

                    [theme.breakpoints.down(412)]: {
                        position: 'relative',
                        left: '0.35rem',
                        padding: '1rem 0rem',
                        height: '350px',
                    },
    
                    '& .ImagesSection': {
                        width: '950px',
                        // border: '1px solid orange',

                        [theme.breakpoints.down(412)]: {
                            width: '400px',
                        },
                        
                        '& .imageContainer': {
                            // border: '1px solid orange',
    
                            '& img': {
                                width: '30rem',
                                height: '30rem',
                                marginRight: '2rem',

                                [theme.breakpoints.down(412)]: {
                                    width: '15rem',
                                    height: '15rem',
                                },
                            },
    
                            '& .slick-prev': {
                                background: 'red',
                            }
                        }
                    }
                },

                '& .historyRightPanel_arb': {
                    overFlow: 'hidden',
                    position: 'absolute',
                    right: '-13rem',
                    // border: '1px solid red',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',

                    [theme.breakpoints.down(412)]: {
                        position: 'relative',
                        left: '0.35rem',
                        padding: '1rem 0rem',
                        height: '350px',
                    },
    
                    '& .ImagesSection': {
                        width: '960px',
                        // border: '1px solid orange',

                        [theme.breakpoints.down(412)]: {
                            width: '400px',
                        },
                        
                        '& .imageContainer': {
                            // border: '1px solid orange',
    
                            '& img': {
                                width: '30rem',
                                height: '30rem',
                                marginRight: '2rem',

                                [theme.breakpoints.down(412)]: {
                                    width: '15rem',
                                    height: '15rem',
                                },
                            },
    
                            '& .slick-prev': {
                                background: 'red',
                            }
                        }
                    }
                }
    
            }
        },
    }
))