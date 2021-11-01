import { makeStyles } from '@material-ui/core'

export default makeStyles({
    popular: {
        height: '100%',
        width: '100%',
        paddingTop: '10rem',
        // border: '1px solid red',
        display: 'flex',
        // justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '7rem',

        '& .popheader': {
            marginBottom: '2rem',

            '& .popType': {
                padding: '1.5rem 1rem',
                margin: '0 0.75rem ',
                borderRadius: '1.5rem',
                fontSize: '1.25rem',
                fontWeight: '700'
            }
        },

        '& .sliderHeader': {
            fontWeight: '900',
            fontSize: '2.75rem',
            marginBottom: '2rem',
        },

        '& .sliderContainer': {
            width: '100%',
            padding: '0 3rem',
            marginBottom: '2rem',
            // border: '1px solid yellow',

            '& .sliderItem': {
                width: '15rem',
                border: '1px solid orange',
                background: 'yellow',
                display: 'block',
            }
        }
    },
})