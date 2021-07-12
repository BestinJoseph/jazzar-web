import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        about: {
            display: 'block',
            paddingTop: '10rem',
            
            [theme.breakpoints.down(415)]: {
                paddingTop: '5.5rem',
            }
        }
    }
))