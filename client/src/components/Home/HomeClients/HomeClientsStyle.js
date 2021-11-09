import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    clients: {
        // padding: '0 10%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',

        [theme.breakpoints.down(429)]: {
            height: '40rem',
        },

        // '& .video': {
        //     position: 'absolute',
        //     width: '100%',
        //     left: '50%',
        //     top: '50%',
        //     height: '100%',
        //     objectFit: 'cover',
        //     transform: 'translate(-50%, -50%)',
        //     zIndex: '-1',
        // },

        '& .imageContainer': {
            height: '50rem',
            overflow: 'hidden',
            
            [theme.breakpoints.down(429)]: {
                height: 'auto',
            },

            [theme.breakpoints.between(429, 1025)]: {
                height: 'auto',
            },

            '& .imageClass': {
                width: '100vw',
                // height: 'auto',
            },
        },

        '& .clientContentContainer': {
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',

            '& .arrowBtn': { 
                color: 'white', 
                opacity: '0.75',
                border: '0.25rem solid white', 
                width: '7rem', 
                height: '7rem', 
                borderRadius: '3.5rem', 
                padding: '2rem',
                marginRight: '2rem',
                cursor: 'pointer',
                transition: '0.3s ease-in',

                [theme.breakpoints.down(429)]: {
                    width: '6rem', 
                    height: '6rem', 
                    padding: '1rem',
                    marginRight: '1.5rem',
                },

                '&:hover': {
                    background: 'white',
                    color: 'black',
                },
            },

            '& .textInside': {
                fontWeight: '900',
                color: 'white',
                letterSpacing: '-0.25rem',
                opacity: '0.75',

                [theme.breakpoints.down(429)]: {
                    fontSize: '1.75rem',
                    letterSpacing: '-0.075rem',
                },
            }
        },

        '& .clientContentContainer_arb': {
            display: 'flex',
            alignItems: 'center',

            '& .arrowBtn': { 
                color: 'white', 
                opacity: '0.75',
                border: '0.25rem solid white', 
                width: '7rem', 
                height: '7rem', 
                borderRadius: '3.5rem', 
                padding: '2rem',
                marginLeft: '2rem',
                cursor: 'pointer',
                transition: '0.3s ease-in',

                [theme.breakpoints.down(429)]: {
                    width: '6rem', 
                    height: '6rem', 
                    padding: '1rem',
                    marginRight: '1.5rem',
                },

                '&:hover': {
                    background: 'white',
                    color: 'black',
                }
            },

            '& .textInside': {
                fontWeight: '900',
                color: 'white',
                letterSpacing: '-0.25rem',
                opacity: '0.75',

                [theme.breakpoints.down(429)]: {
                    fontSize: '2rem',
                }
            }
        }
    },
}))