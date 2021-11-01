import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        location: {
            margin: '5rem 0',

            [theme.breakpoints.down(429)]: {
                margin: '3rem 0 3rem',
                padding: '0 1rem',
            },
    
            '& .locationTitle': {
                fontSize: '1.5rem',
                fontWeight: '600',
                textTransform: 'capitalize',
                marginBottom: '2.5rem',

                [theme.breakpoints.down(429)]: {
                    marginBottom: '1.5rem',
                },
            },
    
            '& .locationContainer': {
    
                '& .locationInnerContainer': {
                    background: 'white',
                    padding: '2rem 2.5rem',
                    marginBottom: '3rem',
                    border: '1px solid #ddd',
                    borderRadius: '0.25rem',

                    [theme.breakpoints.down(429)]: {
                        padding: '1rem 1.5rem',
                    },
    
                    '& .branchLeftSec': {
    
                        '& .branchTitle': {
                            fontSize: '1.75rem',
                            fontWeight: '900',
                            marginBottom: '1rem',
                        },
            
                        '& .branchAddresses': {
                            fontSize: '1.15rem',
                        },
            
                        '& .branchPosition': {
                            fontSize: '1.25rem',
                            fontWeight: '600',
                            marginTop: '1rem',
                        },
        
                        '& .branchRightSec': {
                            
                        }
                    },
    
                    '&:first-child': {
                        background: '#dbf3f1'
                    },

                    '&:last-child': {
                        marginBottom: '0rem',
                    }
                },
            }
        }
    }
))