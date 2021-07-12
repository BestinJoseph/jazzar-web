import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        history: {
            // marginBottom: '10rem',
            background: '#0f1524',
            padding: '10rem 5rem',

            [theme.breakpoints.down(415)]: {
                padding: '4rem 1rem',
            },
    
            '& .historyTitle': {
                fontWeight: '900',
                color: 'white',
                fontSize: '2rem',

                [theme.breakpoints.down(415)]: {
                    fontSize: '1.5rem',
                },
            },
    
            '& .historySubTitle': {
                fontWeight: '800',
                fontSize: '3rem',
                color: 'white',
                letterSpacing: '-0.15rem',
                marginBottom: '2rem',
                lineHeight: '3.5rem',
                textTransform: 'uppercase',

                [theme.breakpoints.down(415)]: {
                    fontSize: '2.35rem',
                },
            },
    
            '& .historyBody': {
                fontWeight: '500',
                color: '#abb9c2',
                marginBottom: '1.5rem',
                fontSize: '1.15rem',
            },
    
            '& .rightContainer': {
                position: 'relative',

                [theme.breakpoints.down(415)]: {
                    marginTop: '2.5rem',
                },
    
                '& .historyRightPanel': {
                    overFlow: 'hidden',
                    position: 'absolute',
                    right: '-1rem',
                    // border: '1px solid red',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',

                    [theme.breakpoints.down(415)]: {
                        position: 'relative',
                        right: '0rem',
                    },
    
                    '& .ImagesSection': {
                        width: '960px',

                        [theme.breakpoints.down(415)]: {
                            width: '755px',
                        },
                        
                        '& .imageContainer': {
                            // border: '1px solid orange',
    
                            '& img': {
                                width: '30rem',
                                height: '30rem',
                                marginRight: '2rem',
                            },
    
                            '& .slick-prev': {
                                background: 'red',
                            }
                        },
                    }
                },

                '& .historyRightPanel_arb': {
                    overFlow: 'hidden',
                    position: 'absolute',
                    right: '0rem',
                    // border: '1px solid red',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',

                    [theme.breakpoints.down(415)]: {
                        position: 'relative',
                        right: '0rem',
                    },
    
                    '& .ImagesSection': {
                        width: '960px',

                        [theme.breakpoints.down(415)]: {
                            width: '755px',
                        },
                        
                        '& .imageContainer': {
                            // border: '1px solid orange',
    
                            '& img': {
                                width: '30rem',
                                height: '30rem',
                                marginLeft: '0rem',
                            },
    
                            '& .slick-prev': {
                                background: 'red',
                            }
                        },
                    }
                }    
            }
        }
    }
))