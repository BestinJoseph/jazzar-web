import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        history: {
            height: '100%',
            background: theme.palette.ourgold.main,
            overflow: 'hidden',

            [theme.breakpoints.down(429)]: {
                width: '100%',
                paddingBottom: '3rem',
            },

            [theme.breakpoints.between(429, 1025)]: {
                width: '100%',
                padding: '2rem 0 5rem',
            },
            
            '& .historyContainer': {
                width: '1280px',
                margin: '0 auto',

                [theme.breakpoints.down(429)]: {
                    width: '100%',
                },

                [theme.breakpoints.between(429, 1025)]: {
                    width: '100%',
                },

                '& .historyLeftPanel': {
                    padding: '7rem 0 11rem',
    
                    [theme.breakpoints.down(429)]: {
                        padding: '4rem 1rem 2rem 1rem',
                    },

                    [theme.breakpoints.between(429, 1025)]: {
                        padding: '4rem 3rem 2rem 3rem',
                    },
        
                    '& .leftHistoryContainer': {
                        width: '500px',
                        // marginLeft: '16.5%',
                        // border: '1px solid red',
    
                        [theme.breakpoints.down(429)]: {
                            width: '100%',
                        },

                        [theme.breakpoints.between(429, 1025)]: {
                            width: '100%',
                        },
    
                        '& .historySubTitle': {
                            fontWeight: '700',
                            fontSize: '2rem',
                            color: theme.palette.quaternary.main,
                            marginBottom: '1rem',

                            [theme.breakpoints.down(429)]: {
                                fontSize: '2rem',
                                lineHeight: '2rem',
                                marginBottom: '0rem',
                            }
                        },
    
                        '& .historyTitle': {
                            fontWeight: '900',
                            fontSize: '3rem',
                            letterSpacing: '-0.15rem',
                            lineHeight: '2.75rem',
                            marginBottom: '2rem',
                            color: theme.palette.secondary.main,

                            [theme.breakpoints.down(429)]: {
                                fontSize: '2rem',
                                lineHeight: '2rem',
                                letterSpacing: '0rem',
                            }
                        },
    
                        '& .historyBody': {
                            fontSize: '1.25rem',
                            fontWeight: '500',
                            marginBottom: '1rem',
                            color: theme.palette.secondary.main,

                            [theme.breakpoints.down(429)]: {
                                fontSize: '1rem',
                                color: theme.palette.primary.main,
                            }
                        },
        
                        '& .historyBtn': {
                            background: theme.palette.secondary.main,
                            color: theme.palette.quaternary.main,
                            padding: '1.5rem',
                            marginTop: '1rem',
                            fontWeight: '800',
                            fontSize: '1.25rem',
                            borderRadius: '0rem',
                            border: 'none',
    
                            '&:hover': {
                                background: '#90752a',
                            },

                            [theme.breakpoints.down(429)]: {
                                fontSize: '1rem',
                                fontWeight: '600',
                                background: 'transparent',
                                border: '1px solid',
                                borderColor: theme.palette.quaternary.main,
                                borderRadius: '.75rem',
                                padding: '.75rem 1.25rem',
                            },

                            [theme.breakpoints.between(429, 1025)]: {
                                fontSize: '1.15rem',
                                fontWeight: '600',
                                background: 'transparent',
                                border: '1px solid',
                                borderColor: theme.palette.quaternary.main,
                                borderRadius: '.75rem',
                                padding: '.75rem 1.25rem',
                            }
                        }
                    },
    
                    '& .arHC': {
                        marginLeft: '16.5%',
                    }
                },
        
                '& .rightContainer': {
                    position: 'relative',

                    [theme.breakpoints.down(429)]: {
                        position: 'relative',
                        height: '100%',
                    },

                    [theme.breakpoints.between(429, 1025)]: {
                        position: 'relative',
                        // height: '100%',
                    }
                }
            }
        },
    }
))