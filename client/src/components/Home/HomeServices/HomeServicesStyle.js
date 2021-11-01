import { makeStyles } from '@material-ui/core'

export default makeStyles( (theme) => (
    {
        services: {
            padding: '8rem 0 10rem',
            position: 'relative',
            height: '100%',
            boxSizing: 'border-box',
            // border: '1px solid gold',

            [theme.breakpoints.down(429)]: {
                padding: '3rem 0rem',
            },
    
            '& .servicesLeft': {
                position: 'relative',
                height: '100%',
                // border: '1px solid red',

                [theme.breakpoints.down(429)]: {
                    height: '100%',
                },
    
                '& .servicesListHeader': {
                    height: '100%',
                    position: 'relative',
                    // border: '1px solid gold',

                    [theme.breakpoints.down(429)]: {
                        height: '100%',
                    },
    
                    '& .servicesListTitle': {
                        background: theme.palette.primary.main,
                        position: 'absolute',
                        color: theme.palette.ajwhite.main,
                        top: '-5rem',
                        left: '-3rem',
                        right: 'auto',
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

                            [theme.breakpoints.down(429)]: {
                                fontSize: '1.25rem',
                            },
                        },

                        [theme.breakpoints.down(429)]: {
                            fontSize: '1.5rem',
                            lineHeight: '1.5rem',
                            height: '10rem',
                            width: '10rem',
                            top: '2rem',
                            left: '0rem',
                            
                        },
                    },

                    '& .arh': {
                        left: 'auto',
                        right: '-3rem'
                    },
    
                    '& .servicesListVideo': {
                        position: 'absolute',
                        zIndex: '3',
                        top: '7.5rem',
                        width: '50rem',
                        height: '30rem',    
                        // border: '1px solid yellow',

                        [theme.breakpoints.down(429)]: {
                            position: 'relative',
                            top: '2rem',
                            width: '100vw',
                            height: '20rem',
                        },
                    },
                },

                '& .servicesContentList': {
                    marginTop: '45rem',
                    position: 'relative',
                    // top: '40rem',
                    right: '-10rem',
                    width:'30rem',
                    // border: '1px solid orange',
                    zIndex: '2',
        
                    [theme.breakpoints.down(429)]: {
                        position: 'relative',
                        right: '0rem',
                        width:'100%',
                        marginTop: '4rem',
                        padding: '0 1rem',
                    },
                },

                '& .arb': {
                    right: 'auto',
                    left: '-10rem',
                },
            },
    
            '& .servicesRight': {
                position: 'relative',
                // border: '1px solid red',

                [theme.breakpoints.down(429)]: {
                    display: 'none',
                },
    
                '& .serviceTitles': {
                    background: theme.palette.quaternary.main,
                    padding: '7rem 0 7rem 15rem',
                    width: '100%',
                    height: '45rem',
    
                    '& .servicesTitlesHeader': {
                        fontWeight: '900',
                        fontSize: '3rem',
                        width: '40rem',
                        // letterSpacing: '-0.05rem',
                        lineHeight: '3rem',
                        color: theme.palette.ourgold.main
                    },
    
                    '& .servicesTitlesContent': {
                        marginTop: '1rem',
    
                        '& .servicesTitleList': {
                            padding: '.5rem 0rem',
                            fontSize: '1.25rem',
                            color: theme.palette.secondary.main,
                            fontWeight: '600'
                        }
                    },

                    '& .art': {
                        fontFamily: "'Almarai', sans-serif",
                    }
                },

                '& .ar': {
                    padding: '7rem 15rem 7rem 0',
                },

                '& .static': {
                    position: 'fixed',
                    width: '66.6%',
                    top: '13rem',
                    right: '0rem',
                    paddingLeft: '14.9rem',
                },

                '& .ars': {
                    right: 'auto',
                    left: '0rem',
                    paddingRight: '14.9rem',
                },

                '& .staticbase': {
                    position: 'absolute',
                    bottom: '0rem',
                    left: '15rem',
                },

                '& .arsb': {
                    left: 'auto',
                    right: '15rem'
                }
            },
        }
    }
))