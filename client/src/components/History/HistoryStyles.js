import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        history: {
            height: '100%',
            background: theme.palette.ourgold.main,
            overflow: 'hidden',

            [theme.breakpoints.down(412)]: {
                width: '100%',
            },
            
            '& .historyContainer': {
                width: '1280px',
                margin: '0 auto',

                '& .historyLeftPanel': {
                    padding: '7rem 0 11rem',
    
                    [theme.breakpoints.down(412)]: {
                        padding: '4rem 1rem',
                    },
        
                    '& .leftHistoryContainer': {
                        width: '500px',
                        // marginLeft: '16.5%',
                        // border: '1px solid red',
    
                        [theme.breakpoints.down(412)]: {
                            width: '100%',
                        },
    
                        '& .historySubTitle': {
                            fontWeight: '700',
                            fontSize: '2rem',
                            color: theme.palette.quaternary.main,
                            marginBottom: '1rem',
                        },
    
                        '& .historyTitle': {
                            fontWeight: '900',
                            fontSize: '3rem',
                            letterSpacing: '-0.15rem',
                            lineHeight: '2.75rem',
                            marginBottom: '2rem',
                            color: theme.palette.secondary.main,
                        },
    
                        '& .historyBody': {
                            fontSize: '1.25rem',
                            fontWeight: '500',
                            marginBottom: '1rem',
                            color: theme.palette.ajwhite.main,   
                        },
        
                        '& .historyBtn': {
                            background: theme.palette.secondary.main,
                            color: theme.palette.ajwhite.main,
                            padding: '1.5rem',
                            marginTop: '1rem',
                            fontWeight: '800',
                            fontSize: '1.25rem',
                            borderRadius: '0rem',
                            border: 'none',
    
                            '&:hover': {
                                background: '#90752a',
                            }
                        }
                    },
    
                    '& .arHC': {
                        marginLeft: '16.5%',
                    }
                },
        
                '& .rightContainer': {
                    position: 'relative',
                }
            }
        },
    }
))