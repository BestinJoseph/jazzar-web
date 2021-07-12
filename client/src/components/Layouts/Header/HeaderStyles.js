import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        header: {
            position: 'fixed',
            width: '100%',
            zIndex: '2',
            [theme.breakpoints.down(412)]: {
                width: '100vw',
            },
        
            '& .top': {
                display: 'none',
                background: '#ffffff70',
                padding: '.5rem 2rem',
                borderBottom: '0.1rem solid #ffffff70',

                [theme.breakpoints.down(412)]: {
                    display: 'none',
                },

                '& .langBtn': {
                    fontWeight: '600',
                    fontSize: '1rem',
                }, 

                '& .contNo': {
                    fontWeight: 'bold',
                    color: 'gold',
                },

                '& .ar': {
                    fontFamily: "'Almarai', sans-serif",
                    fontWeight: '800',
                }
            },
    
            '& .section': {
                padding: '3rem 1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                // transition: 'all 250ms',
                background: 'linear-gradient(to bottom, #90752a, #90752a70 50%, #90752a10 80%, #90752a00 100%)', //'#90752a', //
                height: '3rem',
                transition: 'all 0.5s ease',
                transitionDuration: '700ms',

                [theme.breakpoints.down(412)]: {
                    padding: '2rem 0.5rem',
                },
        
                '& .logo': {
    
                    '& .image_container': {
    
                        '& .image_logo': {
                            width: '3rem',
                            height: 'auto',

                            [theme.breakpoints.down(412)]: {
                                width: '2rem',
                            },
                        },
                    },
        
                    '& .h2-en': {
                        margin: '0',
    
                        '& .title_text_1': {
                            margin: '0 0 0.25rem 1rem', 
                            fontWeight: 'bold', 
                            lineHeight: '1.15rem', 
                            color: 'white',

                            [theme.breakpoints.down(412)]: {
                                fontSize: '.75rem',
                                marginLeft: '0.5rem',
                                lineHeight: '1rem',
                            }
                        },
    
                        '& .title_text_2': {
                            marginLeft: '1rem', 
                            fontWeight: 'bold', 
                            lineHeight: '1.15rem', 
                            color: 'white',

                            [theme.breakpoints.down(412)]: {
                                fontSize: '.75rem',
                                marginLeft: '0.5rem',
                                lineHeight: '1rem',
                            }
                        },

                        '& .ar': {
                            fontFamily: "'Almarai', sans-serif",
                            fontWeight: '400',
                            letterSpacing: '0.15rem',
                            marginRight: '1rem',
                        },
                    }
                },
        
                '& .nav': {
                    display: 'block',
                    transition: 'all 2500ms linear',

                    [theme.breakpoints.down(412)]: {
                        display: 'none',
                        position: 'absolute',
                        width: '100%',
                        height: '100vh',
                        top: '0',
                        left: '0rem',
                        background: '#152035',
                    },
                    
                    '& .nav_ul': {
                        margin: '0',
                        listStyle: 'none',
                        padding: '0',
                        display: 'flex',

                        [theme.breakpoints.down(412)]: {
                            flexDirection: 'column',
                            justifyContent: 'Center',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                        },
        
                        '& .nav_ul_a': {
                            textDecoration: 'none',
                            fontSize: '1.3rem',
                            fontWeight: '500',
                            color: 'white',
                            margin: '.5rem 1.25rem 0 1.25rem',
                            paddingBottom: '0.5rem',
        
                            '& .li': {
                                color: 'white',

                                [theme.breakpoints.down(412)]: {
                                    padding: '0',
                                    marginBottom: '2rem',
                                }
                            },
        
                            '&:hover': {
                                borderBottom: '1px solid gold',
                            }
                        },

                        '& .ar': {
                            fontFamily: "'Almarai', sans-serif",
                            letterSpacing: '0.15rem',
                        },
    
                        '& .active': {
                            borderBottom: '1px solid gold'
                        },
                    },

                    '& .closeBtn': {
                        display: 'none',

                        [theme.breakpoints.down(412)]: {
                            display: 'block',
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            zIndex: '5',
                            color: 'white',
                        }
                    }
                },
        
                '& .right': {
        
                    '& .btn': {
                        fontWeight: 'bold',
                        fontSize: '1.15rem',
                        padding: '.55rem 1.5rem',

                        [theme.breakpoints.down(412)]: {
                            display: 'none',
                        }
                    },
    
                    '& .menu': {
                        display: 'none',
                        lineHeight: '0',

                        [theme.breakpoints.down(412)]: {
                            display: 'block',

                            '& .hamburgerIcon': {
                                lineHeight: '0rem',
                                fontSize: '2rem',
                                color: 'white',
                            }
                        }
                    },

                    '& .langBtn': {
                        fontWeight: '600',
                        fontSize: '1rem',
                        color: 'gold',
                        border: 'none',
                    }, 
    
                    '& .contNo': {
                        fontWeight: 'bold',
                        color: 'gold',
                    },
    
                    '& .ar': {
                        fontFamily: "'Almarai', sans-serif",
                        fontWeight: '800',
                    }
                },
            },
    
            '& .triggered': {
                display: 'none',
                transform: 'translateY(-58px)',
                transition: 'all 250ms',
                background: '#ddd',
            },
        },
    }
))

