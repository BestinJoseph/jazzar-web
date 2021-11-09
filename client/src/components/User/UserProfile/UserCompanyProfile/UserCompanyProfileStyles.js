import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    usercompanyprofile: {
        padding: '1rem',
        marginBottom: '1.5rem',

        '& .companyprofileHeader': {
            borderBottom: '1px solid gray',
            paddingBottom: '.5rem',
            marginBottom: '1rem',
        }
    }
}))