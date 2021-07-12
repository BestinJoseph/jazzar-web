import { makeStyles } from '@material-ui/core'

export default makeStyles( (theme) => (
    {
        services: {
            padding: '8rem 0 10rem',
            position: 'relative',
            height: '100%',
            boxSizing: 'border-box',
            // border: '1px solid gold',

            [theme.breakpoints.down(412)]: {
                padding: '0rem 0rem',
            },
    
            '& .servicesLeft': {
                position: 'relative',
                height: '100%',

                [theme.breakpoints.down(412)]: {
                    height: '100%',
                },
    
                '& .servicesListHeader': {
                    height: '100%',
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
                    top: '20rem',
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
                },

                '& .arb': {
                    right: 'auto',
                    left: '-10rem',
                },
            },
    
            '& .servicesRight': {
                position: 'relative',
                // border: '1px solid red',

                [theme.breakpoints.down(412)]: {
                    display: 'none',
                },
    
                '& .serviceTitles': {
                    background: '#ddd',
                    padding: '7rem 0 7rem 15rem',
                    width: '100%',
                    height: '45rem',
    
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
                            padding: '.5rem 0rem',
                            fontSize: '1.25rem',
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