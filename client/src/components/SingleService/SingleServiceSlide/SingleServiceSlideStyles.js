import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    singleserviceslide: {
        height: '20rem',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',

        '& .sliderContainerServices': {
            width: '100%',

            '& .serviceImage': {
                objectPosition: 'center center',
            }
        },

        '& .sliderContentServices': {
            position: 'absolute',
            left: '17.5%',
            bottom: '5rem',
            zIndex: '10rem',
            fontSize: '2rem',
            fontWeight: '700',
            color: '#4f3a3c',
            padding: '0 1rem',
            background: 'gold',
        }
    }
}))