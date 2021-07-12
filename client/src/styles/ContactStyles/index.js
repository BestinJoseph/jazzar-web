import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        contact: {
            marginBottom: '7rem',

            [theme.breakpoints.down(415)]: {
                marginBottom: '3rem',
            }
        }
    }
))