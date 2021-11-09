import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    login: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '& .loginHeader': {
            textAlign: 'center',

            '& .loginTitle': {
                marginBottom: '1rem',
                textAlign: 'center',
            },

            '& .loginSubTitle': {

            },
        },

        '& .loginForm': {
            width: '25rem',
            paddingTop: '2.5rem',

            '& .loginTextField': {
                marginBottom: '1.05rem',
            },

            '& .loginBtn': {
                marginTop: '1.5rem',
            }
        }
    }
}))