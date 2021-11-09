import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        popular: {
            padding: '7.5rem 0',
            position: 'relative',
            overflow: 'hidden',
    
            [theme.breakpoints.down(429)]: {
                padding: '4rem 1rem 6rem',
            },

            [theme.breakpoints.down(1025)]: {
                padding: '7.5rem 4rem 4rem 4rem',
            },
    
            '& .popularTitle': {
                paddingBottom: '1rem',
                fontWeight: '600',
                color: theme.palette.primary.main,

                [theme.breakpoints.down(429)]: {
                    paddingBottom: '1rem',
                },
            },
    
            '& .item': {
                width: '70%',
                borderBottom: '1px solid #ddd',
                padding: '2rem 0',
                boxSizing: 'border-box',

                [theme.breakpoints.down(429)]: {
                    width: '100%',
                    padding: '1.5rem .75rem 1.5rem 0rem',
                },
    
                '& .index': {
                    fontWeight: 'bold',
    
                    '& .innerText': {
                        fontWeight: 'bold',
                        fontSize: '2.5rem',
                        fontStyle: 'italic',
                        color: theme.palette.secondary.main,
                    }
                },
    
                '& .content': {
    
                    '& .title': {
                        fontWeight: 'bold',
                        fontSize: '1.25rem',
                        color: theme.palette.secondary.main,

                        [theme.breakpoints.down(429)]: {
                            fontSize: '1.1rem',
                            lineHeight: '1.5rem',
                            paddingBottom: '.5rem',
                        },
                    },
    
                    '& .innerSubText': {
                        color: '#869298'
                    }
                },

                '&:hover': {
                    cursor: 'pointer',

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
                            color: '#dbdbdb'
                        }
                    },
                }
            },

            '& .linkProject': {
                marginTop: '2rem',
                textDecoration: 'none',
                color: theme.palette.btncolor.main,
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                // border: '1px solid gold',

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
            }
        }
    }
))