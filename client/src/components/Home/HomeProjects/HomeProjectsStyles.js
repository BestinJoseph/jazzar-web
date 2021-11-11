import { makeStyles, alpha } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        popular: {
            padding: '0rem 0',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            background: 'linear-gradient(135deg, rgba(255,214,0,0) 72%, rgba(255,214,0,1) 100%)',
            height: '60rem',
    
            [theme.breakpoints.down(429)]: {
                padding: '4rem 1rem 6rem',
            },

            [theme.breakpoints.between(429, 1025)]: {
                padding: '7.5rem 4rem 8rem 4rem',
            },

            '& .popularTitle': {
                paddingBottom: '1rem',
                fontWeight: '600',
                color: theme.palette.ajwhite.main,

                [theme.breakpoints.down(429)]: {
                    paddingBottom: '1rem',
                },
            },
            
            '& .projectListContainer': {
                position: 'absolute',
                bottom: '5rem',
                left: '10rem',
                padding:'3rem 3rem',
                backgroundColor: alpha(theme.palette.darkColor.main, 0.55),
                borderRadius: '3rem',
                // transform: 'translateX(-50%)',
        
                '& .item': {
                    display: 'flex',
                    width: '100%',
                    border: '1px solid',
                    borderColor: theme.palette.ajwhite.main,
                    padding: '2rem',
                    boxSizing: 'border-box',
                    borderRadius: '2rem',
                    marginBottom: '1rem',

                    '&:last-child': {
                        marginRight: '0rem',
                    },
    
                    [theme.breakpoints.down(429)]: {
                        width: '100%',
                        padding: '1.5rem .75rem 1.5rem 0rem',
                    },

                    '& .index': {
                        fontWeight: 'bold',
                        display: 'none',
        
                        '& .innerText': {
                            fontWeight: 'bold',
                            fontSize: '2.5rem',
                            fontStyle: 'italic',
                            color: theme.palette.ajwhite.main,
                        }
                    },
        
                    '& .content': {
        
                        '& .title': {
                            fontWeight: 'bold',
                            fontSize: '1.25rem',
                            color: theme.palette.ajwhite.main,
    
                            [theme.breakpoints.down(429)]: {
                                fontSize: '1.1rem',
                                lineHeight: '1.5rem',
                                paddingBottom: '.5rem',
                            },
                        },
        
                        '& .innerSubText': {
                            color: theme.palette.ajwhite.main,
                        }
                    },
    
                    '&:hover': {
                        cursor: 'pointer',
                        background: 'white',
    
                        '& .index': {
            
                            '& .innerText': {
                                color: theme.palette.ourgold.main,
                            }
                        },
    
                        '& .content': {
        
                            '& .title': {
                                color: 'gold',
                            },
            
                            '& .innerSubText': {
                                color: theme.palette.secondary.main,
                            }
                        },
                    },
                },
            },

            '& .linkProject': {
                marginTop: '2rem',
                textDecoration: 'none',
                color: theme.palette.ajwhite.main,
                display: 'flex',
                alignItems: 'center',
                // border: '1px solid gold',
                // height: '100%',

                '& .linkText': {
                    fontSize: '1.25rem',
                    marginRight: '.25rem',
                    fontWeight: '600'
                },

                '& .arrows': {
                    display: 'none',
                    fontSize: '1rem',
                    marginRight: '-0.35rem',
                },

                '&:hover': {
                    
                    '& .arrows': {
                        display: 'block',
                    }
                }
            },

            '& .abstract_zig_zag_top': {
                display: 'none',
                width: '15rem',
                height: 'auto',
                position: 'absolute',
                top: '10rem',
                left: '-12rem',
                zIndex: '-1',
                opacity: '70%',
                transform: 'rotate(45deg)',

                [theme.breakpoints.down(429)]: {
                    top: '8rem',
                    left: '-11rem',
                },
            },

            '& .arZZ': {
                left: 'auto',
                right: '-12rem'
            },

            '& .abstract_cone_right': {
                display: 'none',
                width: '10rem',
                height: 'auto',
                position: 'absolute',
                bottom: '5rem',
                right: '25rem',
                zIndex: '-1',
                transform: 'rotate(30deg)',

                [theme.breakpoints.down(429)]: {
                    bottom: '0rem',
                    right: '-2rem',
                },
            },

            '& .arCR': {
                right: 'auto',
                left: '25rem',
            },

            '& .projectImageContainer': {
                position: 'absolute',
                width: '100vw',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                marginRight: '5rem',
                zIndex: '-5',

                '& .projectImage': {
                    width: '100%',
                    height: 'auto',
                    overflow: 'hidden',
                },
            }
        }
    }
))