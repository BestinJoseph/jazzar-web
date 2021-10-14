import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    adminbranchcreate: {
        padding: '2rem',
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,

        '& .adminbranchformHeader': {
            display: 'flex',
            marginBottom: '1rem',

            '& .formTitle': {
                marginRight: '1rem',
            }
        }
    }
}))