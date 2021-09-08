import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    singleserviceslide: {
        height: '35rem',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',

        '& .sliderContainerServices': {
            width: '50%',
            textAlign: 'center', 
            verticalAlign: 'center',

            '& .serviceImage': {
                objectPosition: 'center center',
                height: 'auto',
                width: '100%',
            }
        },

        '& .sliderTitle': {
            width: '50%',
            background: '#483a15',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            position: 'relative',

            '& .departmentTitle': {
                position: 'absolute',
                width: '65%',
                right: '0rem',
            }
        }
    }
}))