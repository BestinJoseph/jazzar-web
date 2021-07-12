import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        topSection: {
            padding: '0 2rem',
            margin: '2rem 0 7rem',

            [theme.breakpoints.down(415)]: {
                padding: '0 1rem',
                margin: '1rem 0',
            },
    
            '& .upperBanner': {
                display: 'flex',
                alignItems: 'flex-end',
                height: '40rem',
                // border: '1px solid red',

                [theme.breakpoints.down(415)]: {
                    height: '100%',
                },
    
                '& .upperOneGrid': {
                    height: '30rem',
                    padding: '0 4rem 0 0',

                    [theme.breakpoints.down(415)]: {
                        padding: '0 0rem 2rem 0',
                    },
                    
                    '& .startUpperImage': {
                        borderRadius: '0.5rem',
                        // padding: '0 2rem',
                        overflow: 'hidden',
                        height: '100%',
    
                        '& .oneImage': {
                            // height: '100%'
                        }
                    },
                },

                '& .upperOneGrid_arb': {
                    height: '30rem',
                    padding: '0 0 0 4rem',

                    [theme.breakpoints.down(415)]: {
                        padding: '0 0rem 2rem 0',
                    },
                    
                    '& .startUpperImage': {
                        borderRadius: '0.5rem',
                        // padding: '0 2rem',
                        overflow: 'hidden',
                        height: '100%',
    
                        '& .oneImage': {
                            // height: '100%'
                        }
                    },
                },
    
                '& .middleUpperImage': {
                    height: '100%',

                    [theme.breakpoints.down(415)]: {
                        height: '30rem',
                    },
    
                    '& .middleUpperImage': {
                        borderRadius: '0.5rem',
                        overflow: 'hidden',
                        height: '100%',
    
                        '& .twoImage': {
                            height: 'auto',
                            width: '30rem',

                            [theme.breakpoints.down(415)]: {
                                width: '100%',
                            },
                        }
                    },
                },
    
                '& .rightContent': {
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    padding: '0 3rem 0 3rem',

                    [theme.breakpoints.down(415)]: {
                        alignItems: 'flex-start',
                        padding: '3rem 1rem',
                    },
    
                    '& .contentText': {
                        fontWeight: '900',
                        fontSize: '4rem',
                        letterSpacing: '-0.2rem',
                        width: '32rem',
                        color: '#374046',
                        lineHeight: '4rem',
                    }
                }
            },
    
            '& .lowerBanner': {
                marginTop: '5rem',
                display: 'flex',
                alignItems: 'flex-start',
                height: '30rem',

                [theme.breakpoints.down(415)]: {
                    marginTop: '0rem',
                    height: '100%',
                },
    
                '& .lowerOneGrid': {
                    height: '25rem',
                    padding: '0 4rem 0 0',

                    [theme.breakpoints.down(415)]: {
                        padding: '0',
                        marginBottom: '3rem',
                        height: '20rem',
                    },
                    
                    '& .startLowerImage': {
                        borderRadius: '0.5rem',
                        overflow: 'hidden',
                        height: '100%',
                        width: '100%',
    
                        '& .threeImage': {
                            height: 'auto',
                            width: '50rem',
                        }
                    },
                },

                '& .lowerOneGrid_arb': {
                    height: '25rem',
                    padding: '0 0 0 4rem',

                    [theme.breakpoints.down(415)]: {
                        padding: '0',
                        marginBottom: '3rem',
                        height: '20rem',
                    },
                    
                    '& .startLowerImage': {
                        borderRadius: '0.5rem',
                        overflow: 'hidden',
                        height: '100%',
                        width: '100%',
    
                        '& .threeImage': {
                            height: 'auto',
                            width: '50rem',
                        }
                    },
                },
    
                '& .middleLowerImageMain': {
                    height: '100%',
                    padding: '0 4rem 0 0',

                    [theme.breakpoints.down(415)]: {
                        padding: '0',
                        marginBottom: '3rem',
                        height: '30rem',
                    },
    
                    '& .middleLowerImage': {
                        borderRadius: '0.5rem',
                        overflow: 'hidden',
                        height: '100%',
    
                        '& .fourImage': {
                            height: 'auto',
                            width: '50rem',
                        }
                    },
                },

                '& .middleLowerImageMain_arb': {
                    height: '100%',
                    padding: '0 0 0 4rem',

                    [theme.breakpoints.down(415)]: {
                        padding: '0',
                        marginBottom: '3rem',
                        height: '30rem',
                    },
    
                    '& .middleLowerImage': {
                        borderRadius: '0.5rem',
                        overflow: 'hidden',
                        height: '100%',
    
                        '& .fourImage': {
                            height: 'auto',
                            width: '50rem',
                        }
                    },
                },
    
                '& .rightLowerContent': {
                    height: '70%',
                    // padding: '0 3rem',

                    [theme.breakpoints.down(415)]: {
                        height: '25rem',
                        marginBottom: '3rem',
                    },
    
                    '& .endLowerImage': {
                        borderRadius: '0.5rem',
                        // padding: '0 2rem',
                        overflow: 'hidden',
                        height: '100%',
    
                        '& .fiveImage': {
                            height: 'auto',
                            width: '40rem',
                        }
                    },
                }
            }
        }
    }
))