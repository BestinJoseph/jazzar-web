import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        popular: {
            padding: '7.5rem 0',
    
            [theme.breakpoints.down(412)]: {
                padding: '4rem 1rem 2rem',
            },
    
            '& .popularTitle': {
                paddingBottom: '2rem',

                [theme.breakpoints.down(412)]: {
                    paddingBottom: '1rem',
                },
            },
    
            '& .item': {
                width: '70%',
                borderBottom: '1px solid #ddd',
                padding: '2rem 0',

                [theme.breakpoints.down(412)]: {
                    width: '100%',
                    padding: '1.5rem .75rem 1.5rem 0rem',
                },
    
                '& .index': {
                    fontWeight: 'bold',
    
                    '& .innerText': {
                        fontWeight: 'bold',
                        fontSize: '3rem',
                        fontStyle: 'italic',
                        color: '#869298',
                    }
                },
    
                '& .content': {
    
                    '& .title': {
                        fontWeight: 'bold',
                        fontSize: '1.75rem',

                        [theme.breakpoints.down(412)]: {
                            fontSize: '1.1rem',
                            lineHeight: '1.5rem',
                            paddingBottom: '.5rem',
                        },
                    },
    
                    '& .innerSubText': {
                        color: '#869298'
                    }
                }
            },

            '& .linkProject': {
                fontSize: '1.25rem',
                paddingTop: '2rem',
                display: 'block',
                textDecoration: 'none',
            }
        }
    }
))