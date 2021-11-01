import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        footer: {
            position: 'relative',
            padding: '6rem 0 8rem',
            borderTopStyle: 'solid',
            borderTopWidth: '0.1rem',
            borderTopColor: theme.palette.secondary.main,

            [theme.breakpoints.down(429)]: {
                padding: '3rem 1rem 1.5rem 1rem',
                background: '#1C2D47',
                color: 'white',
            },
    
            '& .container': {
                position: 'relative',
                padding: '0',
    
                '& .top': {
                    padding: '2rem',
                    top: '-11rem',
                    position: 'absolute',
                    borderRadius: '.25rem',
                    backgroundColor: theme.palette.primary.main,
                    width: '100%',
                    color: 'white',
                
                    [theme.breakpoints.down(429)]: {
                        display: 'none',
                    },
        
                    '& .hess': {
                        width: '100%',
        
                        '& .footContact': {
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            height: '100%',

                            '& .footContactContainer': {
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',

                                '& .phoneIcon': {
                                    fontSize: '3rem'
                                }
                            }
                        }
                    }
                },

                '& .footer__context': {
                    padding: '1.2rem 0',
        
                    [theme.breakpoints.down(429)]: {
                        padding: '1.5rem 1rem',
                        background: '#49566B',
                        borderRadius: '.5rem',
                        marginBottom: '2rem',
                    },
        
                    '& .footerTitleText': {
        
                        [theme.breakpoints.down(429)]: {
                            // background: 'blue',
                            fontWeight: '600',
                            fontSize: '1.05rem',
                            paddingBottom: '1rem',
                        },
                    },
            
                    '& .ul': {
                        padding: '0rem 1rem',
        
                        [theme.breakpoints.down(429)]: {
                            marginBottom: '2rem',
                        },
            
                        '& .list': {
                            padding: '1rem 0rem',
        
                            [theme.breakpoints.down(429)]: {
                                borderBottom: '1.5px solid #1C2D47',
                            },
            
                            '& a': {
                                textDecoration: 'none',
                                fontSize: '1rem',
        
                                [theme.breakpoints.down(429)]: {
                                    color: 'white',
                                },
            
                                '&:hover': {
                                    fontWeight: 'bold'
                                }
                            }
                        },
                    }
                },

                '& .footerLower': {

                    '& .middleLower': {
                        
                        [theme.breakpoints.down(429)]: {
                            background: '#49566B',
                            padding: '1rem',
                            margin: '1.5rem 0',
                            borderRadius: '0.5rem',
                        }
                    }
                }
            },
        },
    }
))