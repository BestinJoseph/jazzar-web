import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        glance: {
            // border: '1px solid orange',
            marginBottom: '5rem',
            padding: '0rem',

            [theme.breakpoints.down(415)]: {
                padding: '0rem 1rem',
                marginBottom: '0rem',
            },
    
            '& .glanceTitle': {
                fontWeight: '900',
                letterSpacing: '-0.15rem',
                textAlign: 'center',

                [theme.breakpoints.down(415)]: {
                    textAlign: 'left',
                },
            },
    
            '& .glanceContainer': {
                padding: '0',
                marginTop: '4rem',
                // border: '1px solid blue',

                [theme.breakpoints.down(415)]: {
                    marginTop: '2rem',
                },
    
                '& .glanceLeftShell': {
    
                    '& .glanceBodyText': {
                        fontSize: '1.25rem',
                        marginBottom: '1.5rem',
                    },
    
                    '&:first-child': {
                        paddingRight: '2rem',

                        [theme.breakpoints.down(415)]: {
                            paddingRight: '0rem',
                        },
                    },
    
                    '&:last-child': {
                        paddingLeft: '2rem',

                        [theme.breakpoints.down(415)]: {
                            paddingLeft: '0rem',
                        },
                    }
                },

                '& .glanceLeftShell_arb': {
    
                    '& .glanceBodyText': {
                        fontSize: '1.25rem',
                        marginBottom: '1.5rem',
                    },
    
                    '&:first-child': {
                        paddingLeft: '2rem',

                        [theme.breakpoints.down(415)]: {
                            paddingRight: '0rem',
                        },
                    },
    
                    '&:last-child': {
                        paddingRight: '2rem',

                        [theme.breakpoints.down(415)]: {
                            paddingLeft: '0rem',
                        },
                    }
                }
            }
        }
    }
))