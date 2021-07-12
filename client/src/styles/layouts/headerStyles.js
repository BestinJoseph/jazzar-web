import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        header: {
            position: 'fixed',
            width: '100%',
            zIndex: '15',
            [theme.breakpoints.down(412)]: {
                width: '100vw',
            },
        
            '& .top': {
                background: 'white',
                padding: '.5rem 2rem',
                borderBottom: '0.1rem solid rgb(221, 221, 221)',

                [theme.breakpoints.down(412)]: {
                    display: 'none',
                }
            },
    
            '& .section': {
                padding: '3.5rem 1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 250ms',
                background: 'linear-gradient(to bottom, #152035, #15203570 50%, #15203510 80%, #15203500 100%)',
                height: '3rem',

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
                        }
                    },

                    '& .h2-ar': {
                        margin: '0',
    
                        '& .title_text_1': {
                            marginRight: '1rem', 
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
                            marginRight: '1rem', 
                            fontWeight: 'bold', 
                            lineHeight: '1.15rem', 
                            color: 'white',

                            [theme.breakpoints.down(412)]: {
                                fontSize: '.75rem',
                                marginLeft: '0.5rem',
                                lineHeight: '1rem',
                            }
                        }
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
        
                            '& .li': {
                                padding: '.5rem 1.25rem',
                                color: 'white',

                                [theme.breakpoints.down(412)]: {
                                    padding: '0',
                                    marginBottom: '2rem',
                                }
                            },
        
                            '&:hover': {
                                // text-transform: uppercase;
                                // borderBottom: '1px solid white',
                            },
                        },
    
                        '& .active': {
                            textTransform: 'uppercase',
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
                    }
                },
            },
    
            '& .triggered': {
                transform: 'translateY(-53.5938px)',
                transition: 'all 250ms',
                background: '#ddd',
            },
        },
    }
))

