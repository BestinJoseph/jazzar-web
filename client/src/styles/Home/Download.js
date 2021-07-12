import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        download: {
            background: '#1C2D47',
            width: '100%',
            padding: '7rem 0 7rem 0',

            [theme.breakpoints.down(412)]:{
                padding: '4rem 1rem',
            },
    
            '& .downloadContainer': {
                width: '35rem',
                marginLeft: '18.5rem',

                [theme.breakpoints.down(412)]:{
                    width: '100%',
                    marginLeft: '0em',
                },
    
                '& .downloadTitle': {
                    fontSize: '3rem',
                    fontWeight: '900',
                    color: 'white',
                    letterSpacing: '-0.15rem',
                    lineHeight: '3.5rem',
                    marginBottom: '1.5rem',

                    [theme.breakpoints.down(412)]:{
                        fontSize: '2rem',
                        lineHeight: '2.25rem',
                        letterSpacing: '-0.05rem',
                    },
                },
        
                '& .downloadBody': {
                    fontSize: '1.25rem',
                    color: 'white',
                    lineHeight: '2rem',

                    [theme.breakpoints.down(412)]:{
                        fontSize: '1rem',
                        lineHeight: '1.5rem',
                    },
                },
    
                '& .downloadInput': {
                    marginTop: '2rem',
                    color: 'white',
                    borderColor: 'white',
                    fontSize: '3rem',
                    borderWidth: '1rem',
    
                    '&:hover': {
                        borderWidth: '1rem',
                    }
                },
    
                '& .downloadBtn': {
                    marginTop: '2rem',
                    background: 'white',
                    color: '#1C2D47',
                    padding: '1rem 1.75rem',
                    fontSize: '1.25rem',
                    fontWeight: '600',

                    [theme.breakpoints.down(412)]:{
                        fontSize: '1rem',
                    },
    
                    '&:hover': {
                        background: '#ddd',
                    }
                },

                '& .downLoadForm': {
                    marginTop: '2rem',
                }
            },

            '& .downloadContainer_arb': {
                width: '35rem',
                marginRight: '18.5rem',
    
                '& .downloadTitle': {
                    fontSize: '3rem',
                    fontWeight: '900',
                    color: 'white',
                    letterSpacing: '-0.15rem',
                    lineHeight: '3.5rem',
                    marginBottom: '1.5rem',
                },
        
                '& .downloadBody': {
                    fontSize: '1.25rem',
                    color: 'white',
                    lineHeight: '2rem',
                },
    
                '& .downloadInput': {
                    marginTop: '2rem',
                    color: 'white',
                    borderColor: 'white',
                    fontSize: '3rem',
                    borderWidth: '1rem',
    
                    '&:hover': {
                        borderWidth: '1rem',
                    }
                },
    
                '& .downloadBtn': {
                    marginTop: '2rem',
                    background: 'white',
                    color: '#1C2D47',
                    padding: '1rem 1.75rem',
                    fontSize: '1.25rem',
                    fontWeight: '600',
    
                    '&:hover': {
                        background: '#ddd',
                    }
                },

                '& .downLoadForm': {
                    marginTop: '2rem',
                }
            }
        },

        inputClass: {
            color: 'white',
            fontSize: '1.5rem'
        },

        textFieldInput: {
            borderBottom: 'white',
            fontSize: '2rem',
            borderWeight: '2rem',
            borderColor: 'white',
        },
    }
))