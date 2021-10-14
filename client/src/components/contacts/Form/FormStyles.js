import { makeStyles } from "@material-ui/core"

export default makeStyles((theme)=>({
    form: {
        background: theme.palette.primary.main,
        padding: '12rem 0',
        color: 'white',

        [theme.breakpoints.down(415)]: {
            padding: '5rem 0rem',
        },

        '& .formContainer': {

            '& .contactInfoSection': {

                '& .FormHeader': {
                    marginBottom: '2.5rem',
        
                    '& .FormTitle': {
                        fontWeight: '900',
                        letterSpacing: '-0.20rem',
                        fontSize: '4rem',
                        lineHeight: '4.5rem',
    
                        [theme.breakpoints.down(415)]: {
                            fontSize: '3rem',
                            lineHeight: '3.5rem',
                        },
                    },
                },
        
                '& .contactInfo': {
                    marginBottom: '3.5rem',
        
                    '& .contactTitle': {
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        fontSize: '1.15rem',
                        color: '#ABB9C2',
                    },
        
                    '& .contactText': {
                        fontWeight: '600',
        
                    },
                },
        
                '& .specialContact': {
        
                    '& .specialRightSec': {
                        background: '#FFD12D',
                        color: '#374046',
                        padding: '1.5rem',
                        borderRadius: '0.25rem',
                        display: 'flex',
                        alignItems: 'center',
        
                        '& .contactTitle': {
                            fontWeight: '600',
                            lineHeight: '1.1'
                        },
        
                        '& .contactText': {
                            fontWeight: '600',
                            fontSize: '2.5rem',
                            lineHeight: '1.2'
                        }
                    },
        
                    '& .specialLeftSec': {
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
    
                        [theme.breakpoints.down(415)]: {
                            justifyContent: 'center',
                            marginTop: '1rem',
                            height: '8rem',
                        },
        
                        '& .floatingText': {
                            transform: 'rotate(10deg)',
                            color: '#41D58C',
                            lineHeight: '1.25rem',
                            fontSize: '1.25rem',
        
                            '& .floatingTextSpan': {
                                display: 'block',
                            }
                        }
                    }
                }
            },

            '& .formSection': {
                position: 'relative',

                '& .floatingForm': {
                    position: 'absolute', 
                    right: '-10rem', 
                    width: '37rem',

                    [theme.breakpoints.down(415)]: {
                        position: 'relative',
                        right: '0rem',
                        width: '100%',
                    }
                },

                '& .floatingForm_arb': {
                    position: 'absolute', 
                    left: '-10rem', 
                    width: '37rem',

                    [theme.breakpoints.down(415)]: {
                        position: 'relative',
                        right: '0rem',
                        width: '100%',
                    }
                }
            }
        }
    }
}))