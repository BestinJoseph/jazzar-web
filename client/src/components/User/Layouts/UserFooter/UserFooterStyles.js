import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    userfooter: {
        position: 'fixed', 
        bottom: '0', 
        zIndex: '10', 
        height: '3rem', 
        width: '100vw', 
        background: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        padding: '0 2rem',
        color: 'white',
    }
}))