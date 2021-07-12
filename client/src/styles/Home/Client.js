import { makeStyles } from '@material-ui/core'

export default makeStyles({
    clients: {
        padding: '0 10%',
        height: '53rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',

        '& .video': {
            position: 'absolute',
            width: '100%',
            left: '50%',
            top: '50%',
            height: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: '-1'
        },

        '& .clientContentContainer': {
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
            }
        }
    },
})