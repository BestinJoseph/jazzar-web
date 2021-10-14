import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    homedownload: {
        background: theme.palette.secondary.main,
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
                width: '40rem',
                // marginLeft: '18.5rem',
    
                [theme.breakpoints.down(412)]:{
                    width: '100%',
                    marginLeft: '0em',
                },
    
                '& .downloadTitle': {
                    fontSize: '2.75rem',
                    fontWeight: '800',
                    color: theme.palette.ourgold.main,
                    letterSpacing: '-0.05rem',
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
                    borderColor: theme.palette.ajwhite.main,
                    fontSize: '3rem',
                    borderWidth: '1rem',
    
                    '&:hover': {
                        borderWidth: '1rem',
                    }
                },
    
                '& .downloadBtn': {
                    marginTop: '2rem',
                    background: theme.palette.ourgold.main,
                    color: theme.palette.secondary.main,
                    padding: '1.5rem',
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    borderRadius: '0rem',
    
                    [theme.breakpoints.down(412)]:{
                        fontSize: '1rem',
                    },
    
                    '&:hover': {
                        background: theme.palette.btncolor.main,
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
                // boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,.8))',

                [theme.breakpoints.down(412)]:{
                    display: 'none',
                },
            }
        }
    },

    inputClass: {
        color: 'white',
        fontSize: '1.5rem',
        borderBottom: 'white',
    },
}))