import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    adminlayout: {
        height: '100vh',
        background: 'gold',
        padding: '1rem 1rem 0 1rem',

        '& .listItem': {
            cursor: 'pointer',

            '&:hover': {
                background: '#D1B000',
            },
        },

        '& .active': {
            color: 'grey',
            borderBottom: '1px solid grey',
        }
    }
}))