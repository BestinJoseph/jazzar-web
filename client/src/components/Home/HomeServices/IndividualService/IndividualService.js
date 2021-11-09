import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    individualService: {

        '& .servicesItem': {
            paddingBottom: '6rem',

            [theme.breakpoints.down(429)]: {
                paddingBottom: '10rem',
            },

            [theme.breakpoints.between(429, 1025)]: {
                display: 'flex',
            },

            '& .serviceImageContainer': {
                height: '40rem',
                width: '25rem',
                overflow: 'hidden',
                borderRadius: '2rem',
                marginBottom: '2rem',
                position: 'relative',

                [theme.breakpoints.between(429, 1025)]: {
                    width: '100%',
                    borderRadius: '.5rem',
                },

                '& .serviceImage': {
                    height: '40rem',
                    width: 'auto',
                    transition: 'transform .5s',

                    '&:hover': {
                        transform: 'scale(1.15)'
                    }
                },

                '& .servicesItemIcon': {
                    width: '7rem',
                    height: '7rem',
                    borderBottomRightRadius: '2rem',
                    display: 'none', //flex
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '2rem',
                    fontSize: '2rem',
                    fontWeight: '700',
                    position: 'absolute',
                    background: 'gold',
                    zIndex: '10',
    
                    [theme.breakpoints.down(429)]: {
                        marginBottom: '1rem',
                    },
                },
            },

            '& .serviceContentContainer': {
                width: '100%',
                paddingLeft: '2rem',

                '& .servicesItemTitle': {
                    fontWeight: '900',
                    fontSize: '1.75rem',
                    letterSpacing: '-0.05rem',
    
                    [theme.breakpoints.down(429)]: {
                        fontSize: '1.25rem',
                    },
                },

                '& .servicesDescription': {
                    fontSize: '1rem',
                    color: '#869298',
                    paddingTop: '1.25rem',
    
                    [theme.breakpoints.down(429)]: {
                        paddingTop: '.75rem',
                    },
                },
    
                '& .serviceLink': {
                    marginTop: '2rem',
                    display: 'flex',
                    color: 'gold',
                    textDecoration: 'none',
                    // border: '1px solid blue',
                    alignItems: 'center',
    
                    [theme.breakpoints.down(429)]: {
                        marginTop: '1rem',
                    },
    
                    '& .serviceLinkText': {
                        marginRight: '0.25rem',
                        fontSize: '1.15rem',
                    },
    
                    '& .serviceLinkIcon': {
                        display: 'none',
                        marginRight: '-.45rem',
                    },
    
                    '&:hover': {
                        '& .serviceLinkIcon': {
                            display: 'block',
                        }
                    }
                },
    
                [theme.breakpoints.down(429)]: {
                    paddingBottom: '2rem',
                },
    
                '&:lastChild': {
                    paddingBottom: '0',
                }
            },
        },
    }
}))