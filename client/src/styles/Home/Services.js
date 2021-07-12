import { makeStyles } from '@material-ui/core'

export default makeStyles( (theme) => (
    {
        services: {
            padding: '8rem 0 10rem',

            [theme.breakpoints.down(412)]: {
                padding: '0rem 0rem',
            },
    
            '& .servicesLeft': {
                position: 'relative',
                height: '130rem',

                [theme.breakpoints.down(412)]: {
                    height: '100%',
                },
    
                '& .servicesListHeader': {
                    height: '20rem',
                    position: 'relative',
                    // border: '1px solid red',

                    [theme.breakpoints.down(412)]: {
                        height: '100%',
                    },
    
                    '& .servicesListTitle': {
                        background: '#D4EFE2',
                        position: 'absolute',
                        color: 'green',
                        top: '-5rem',
                        left: '-3rem',
                        height: '22.5rem',
                        width: '22.5rem',
                        borderRadius: '17.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '5rem',
                        fontWeight: '900',
                        lineHeight: '3.5rem',
                        zIndex: '6',
    
                        '& span': {
                            fontSize: '2rem',

                            [theme.breakpoints.down(412)]: {
                                fontSize: '1.25rem',
                            },
                        },

                        [theme.breakpoints.down(412)]: {
                            fontSize: '1.5rem',
                            lineHeight: '1.5rem',
                            height: '10rem',
                            width: '10rem',
                            top: '8rem',
                            left: '-.5rem',
                            
                        },
                    },
    
                    '& .servicesListVideo': {
                        position: 'absolute',
                        zIndex: '3',
                        top: '7.5rem',
                        width: '50rem',
                        height: '25rem',
                        // border: '1px solid yellow',

                        [theme.breakpoints.down(412)]: {
                            position: 'relative',
                            top: '2rem',
                            width: '100vw',
                            height: 'auto',
                        },
                    },
                },
    
                '& .servicesContentList': {
                    marginTop: '25rem',
                    position: 'absolute',
                    right: '-10rem',
                    width:'30rem',
                    // border: '1px solid orange',
                    zIndex: '2',

                    [theme.breakpoints.down(412)]: {
                        position: 'relative',
                        right: '0rem',
                        width:'100%',
                        marginTop: '7rem',
                        padding: '0 1rem',
                    },
    
                    '& .servicesItem': {
                        paddingBottom: '6rem',
    
                        '& .servicesItemIcon': {
                            width: '7rem',
                            height: '7rem',
                            borderRadius: '3.5rem',
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '2rem',

                            [theme.breakpoints.down(412)]: {
                                marginBottom: '1rem',
                            },
                        },
        
                        '& .servicesItemTitle': {
                            fontWeight: '900',
                            fontSize: '1.75rem',
                            letterSpacing: '-0.05rem',

                            [theme.breakpoints.down(412)]: {
                                fontSize: '1.25rem',
                            },
                        },
        
                        '& .servicesDescription': {
                            fontSize: '1rem',
                            color: '#869298',
                            paddingTop: '1.25rem',

                            [theme.breakpoints.down(412)]: {
                                paddingTop: '.75rem',
                            },
                        },
        
                        '& a': {
                            marginTop: '2rem',
                            display: 'block',
                            fontSize: '1.15rem',
                            color: '#207DE9',

                            [theme.breakpoints.down(412)]: {
                                marginTop: '1rem',
                            },
                        },

                        [theme.breakpoints.down(412)]: {
                            paddingBottom: '2rem',
                        },
                    }
                },

                '& .servicesContentList_arb': {
                    marginTop: '25rem',
                    position: 'absolute',
                    left: '-10rem',
                    width:'30rem',
                    // border: '1px solid orange',
                    zIndex: '2',

                    '& .servicesItem': {
                        paddingBottom: '6rem',
    
                        '& .servicesItemIcon': {
                            width: '7rem',
                            height: '7rem',
                            borderRadius: '3.5rem',
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '2rem',
                        },
        
                        '& .servicesItemTitle': {
                            fontWeight: '900',
                            fontSize: '1.75rem',
                            letterSpacing: '-0.05rem',
                        },
        
                        '& .servicesDescription': {
                            fontSize: '1rem',
                            color: '#869298',
                            paddingTop: '1.25rem',
                        },
        
                        '& a': {
                            marginTop: '2rem',
                            display: 'block',
                            fontSize: '1.15rem',
                            color: '#207DE9',
                        },
                    }
                }
            },
    
            '& .servicesRight': {
                position: 'relative',

                [theme.breakpoints.down(412)]: {
                    display: 'none',
                },
    
                '& .serviceTitles': {
                    position: 'absolute',
                    background: '#ddd',
                    padding: '7rem 0 7rem 15rem',
                    width: '100%',
    
                    '& .servicesTitlesHeader': {
                        fontWeight: '900',
                        fontSize: '3rem',
                        width: '40rem',
                        letterSpacing: '-0.25rem',
                        lineHeight: '4.5rem',
                    },
    
                    '& .servicesTitlesContent': {
                        marginTop: '1rem',
    
                        '& .servicesTitleList': {
                            paddingLeft: '0rem',
                            fontSize: '1.25rem',
                        }
                    },
                },

                '& .serviceTitles_arb': {
                    position: 'absolute',
                    background: '#ddd',
                    padding: '7rem 15rem 7rem 0',
                    width: '100%',
    
                    '& .servicesTitlesHeader': {
                        fontWeight: '900',
                        fontSize: '3rem',
                        width: '40rem',
                        letterSpacing: '-0.25rem',
                        lineHeight: '4.5rem',
                    },
    
                    '& .servicesTitlesContent': {
                        marginTop: '1rem',
    
                        '& .servicesTitleList': {
                            paddingLeft: '0rem',
                            fontSize: '1.25rem',
                        }
                    },
                }
            },
        }
    }
))