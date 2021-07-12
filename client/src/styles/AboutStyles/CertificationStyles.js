import { makeStyles } from '@material-ui/core'

export default makeStyles( (theme) => (
    {
        cerification: {
            marginBottom: '7rem',
            // border: '1px solid orange',
            height: '20rem',
            borderRadius: '0 0 0.5rem 0.5rem',
            background: 'linear-gradient(to top, #eef2f8, transparent)',
            textAlign: 'center',
            paddingTop: '2rem',

            [theme.breakpoints.down(415)]: {
                height: 'auto',
                textAlign: 'start',
                width: '95%',
                marginBottom: '3rem',
                paddingBottom: '2rem',
            },
    
            '& .certSubTitle': {
                fontWeight: '800',
                letterSpacing: '-0.05rem',
                textTransform: 'uppercase'
            },
                
            '& .certTitle': {
                fontWeight: '900',

                [theme.breakpoints.down(415)]: {
                    fontSize: '2.25rem',
                },
            },
    
            '& .certInnerTitle': {
                fontWeight: '600',
                marginBottom: '1.5rem',
            },
    
            '& .certBodyText': {
                fontWeight: '800',
                fontSize: '1.5rem',
            }
        }
    }
))