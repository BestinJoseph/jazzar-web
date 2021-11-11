import { makeStyles } from '@material-ui/core'
import { template } from 'lodash'

export default makeStyles( (theme) => (
    {
        services: {
            padding: '8rem 7rem',
            position: 'relative',
            height: '100%',
            boxSizing: 'border-box',
            // border: '1px solid gold',
            background: '#191919',
            width: '100%',
            color: theme.palette.ajwhite.main,

            [theme.breakpoints.down(429)]: {
                padding: '3rem 0rem',
            },

            [theme.breakpoints.between(429, 1025)]: {
                padding: '2rem 0 0rem',
            },

            '& .serviceHeaderContainer': {
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8rem',

                '& .serviceHeaderTitle': {
                    fontWeight: '700',
                    fontSize: '5rem',
                },

                '& .serviceHeaderSubTitle': {
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: theme.palette.secondary.main,
                },

                '& .servicesHeaderBtn': {
                    textDecoration: 'none',
                    color: theme.palette.ajwhite.main,
                    fontSize: '1.25rem',
                    background: theme.palette.secondary.main,
                    padding: '1.5rem 3rem',
                    borderRadius: '3rem',

                    '&:hover': {
                        background: theme.palette.ourgold.main,
                        color: theme.palette.secondary.main,
                    }
                }
            },

            '& .homeServiceTitle': {
                fontSize: '3rem',
                padding: '6rem 0 0 10rem',
                fontWeight: '800',

                [theme.breakpoints.between(429, 1025)]: {
                    padding: '3rem 0 0 2rem',
                    fontSize: '2rem',
                }
            },
    
            '& .servicesLeft': {
                position: 'relative',
                height: '100%',
                // border: '1px solid red',

                [theme.breakpoints.down(429)]: {
                    height: '100%',
                },

                [theme.breakpoints.between(429, 1025)]: {
                    width: '100%',
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
                        display: 'none', //flex
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
                                fontSize: '1rem',
                            },
                        },

                        [theme.breakpoints.down(429)]: {
                            fontSize: '1rem',
                            lineHeight: '1.25rem',
                            height: '8rem',
                            width: '8rem',
                            top: '-2rem',
                            left: '0rem',
                            
                        },

                        [theme.breakpoints.between(429, 1025)]: {
                            top: '0rem',
                            left: '0rem',
                            fontSize: '2rem',
                            lineHeight: '2.25rem',
                            height: '12rem',
                            width: '12rem',
                        }
                    },

                    '& .arh': {
                        left: 'auto',
                        right: '-3rem'
                    },
    
                    '& .servicesListVideo': {
                        position: 'absolute',
                        zIndex: '3',
                        top: '5rem',
                        width: '50rem',
                        height: '30rem',    
                        // border: '1px solid yellow',

                        [theme.breakpoints.down(429)]: {
                            position: 'relative',
                            top: '2rem',
                            width: '100vw',
                            height: 'auto',
                        },

                        [theme.breakpoints.down(1025)]: {
                            width: '100vw',
                            top: '3rem',
                        }
                    },
                },

                '& .servicesContentList': {
                    marginTop: '45rem',
                    position: 'relative',
                    right: '-10rem',
                    width:'30rem',
                    zIndex: '2',
        
                    [theme.breakpoints.down(429)]: {
                        position: 'relative',
                        right: '0rem',
                        width:'100%',
                        marginTop: '4rem',
                        padding: '0 1rem',
                    },

                    [theme.breakpoints.between(429, 1025)]: {
                        marginTop: '40rem',
                        right: 'auto',
                        width:'100%',
                        padding: '0 3rem',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(7, 1fr)',
                        overflow: 'hidden',
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

                [theme.breakpoints.down(1025)]: {
                    display: 'none',
                },
    
                '& .serviceTitles': {
                    // background: theme.palette.quaternary.main,
                    padding: '5rem 0 0rem 15rem',
                    width: '100%',
                    height: '100%',

                    '& .servicesImage': {
                        height: '40rem',
                        position: 'absolute',
                        top: 0,
                        zIndex: '-10'
                    },
    
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