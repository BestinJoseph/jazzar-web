import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    userprofile: {
        background: theme.palette.primary.main,
        // height: '25rem',
        color: 'white',
        padding: '2rem',
        marginTop: '4rem',

        '& .userprofileContainer': {

            '& .personalProfile': {
                padding: '1rem',

            }
        }
    }
}))