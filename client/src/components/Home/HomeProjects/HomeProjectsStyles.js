import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        popular: {
            padding: '7.5rem 0',
            // border: '1px solid gold',
            position: 'relative',
    
            [theme.breakpoints.down(412)]: {
                padding: '4rem 1rem 2rem',
            },
    
            '& .popularTitle': {
                paddingBottom: '1rem',
                fontWeight: '600',
                color: '#b89535',

                [theme.breakpoints.down(412)]: {
                    paddingBottom: '1rem',
                },
            },
    
            '& .item': {
                width: '70%',
                borderBottom: '1px solid #ddd',
                padding: '2rem 0',
                boxSizing: 'border-box',

                [theme.breakpoints.down(412)]: {
                    width: '100%',
                    padding: '1.5rem .75rem 1.5rem 0rem',
                },
    
                '& .index': {
                    fontWeight: 'bold',
    
                    '& .innerText': {
                        fontWeight: 'bold',
                        fontSize: '2.5rem',
                        fontStyle: 'italic',
                        color: '#b89535',
                    }
                },
    
                '& .content': {
    
                    '& .title': {
                        fontWeight: 'bold',
                        fontSize: '1.25rem',
                        color: 'grey',

                        [theme.breakpoints.down(412)]: {
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
                            color: 'gold',
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
                color: '#b89535',
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                // border: '1px solid gold',

                '& .linkText': {
                    fontSize: '1.25rem',
                    marginRight: '.25rem',
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
                width: '15rem',
                height: 'auto',
                position: 'absolute',
                top: '10rem',
                left: '-12rem',
                zIndex: '-1',
                opacity: '70%',
                transform: 'rotate(45deg)',
            },

            '& .arZZ': {
                left: 'auto',
                right: '-12rem'
            },

            '& .abstract_cone_right': {
                width: '10rem',
                height: 'auto',
                position: 'absolute',
                bottom: '5rem',
                right: '25rem',
                zIndex: '-1',
                transform: 'rotate(30deg)',
            },

            '& .arCR': {
                right: 'auto',
                left: '25rem',
            }
        }
    }
))