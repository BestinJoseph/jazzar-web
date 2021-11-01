import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    createproject: {
        // height: '40rem',
        padding: '9rem 0 8rem',
        backgroundColor: 'gold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // color: 'white',
        flexDirection: 'column',

        '& .createdproject_container': {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
        },

        '& .createproject_form': {
            padding: '2rem', 
            width: '35rem'
        }
    }
}))