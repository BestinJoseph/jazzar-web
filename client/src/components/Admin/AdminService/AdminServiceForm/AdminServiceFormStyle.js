import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    adminserviceform: {
        padding: '1rem 2rem',
        width: '70%',

        '& .adminserviceformHeader': {
            display: 'flex',
            marginBottom: '1rem',

            '& .formTitle': {
                marginRight: '1rem',
            }
        }
    }
}))