import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    adminprojectform: {
        padding: '2rem 1rem',

        '& .adminprojectformHeader': {
            display: 'flex',

            '& .formTitle': {
                marginRight: '1rem',
            }
        }
    }
}))