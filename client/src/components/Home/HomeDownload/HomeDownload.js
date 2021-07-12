import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    homedownload: {
        background: '#483a15',
        padding: '7rem 0 7rem 0',

        [theme.breakpoints.down(412)]:{
            padding: '4rem 1rem',
        },

        '& .container': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '70%',
            margin: '0 auto',

            '& .downloadContainer': {
                width: '35rem',
                // marginLeft: '18.5rem',
    
                [theme.breakpoints.down(412)]:{
                    width: '100%',
                    marginLeft: '0em',
                },
    
                '& .downloadTitle': {
                    fontSize: '2.75rem',
                    fontWeight: '800',
                    color: '#32280e',
                    letterSpacing: '-0.15rem',
                    lineHeight: '3rem',
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
                    background: '#b89535',
                    color: '#483a15',
                    padding: '1.5rem',
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    borderRadius: '0rem',
    
                    [theme.breakpoints.down(412)]:{
                        fontSize: '1rem',
                    },
    
                    '&:hover': {
                        background: '#90752a',
                    }
                },
    
                '& .downLoadForm': {
                    marginTop: '2rem',
                }
            },
    
            '& .arDC': {
    
            },
    
            '& .preqBook': {
                // width: '12rem',
                height: '40rem',
            }
        }
    },

    inputClass: {
        color: 'white',
        fontSize: '1.5rem',
        borderBottom: 'white',
    },
}))