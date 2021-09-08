import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    login: {
        // background: 'gray',
        height: '100vh',

        '& .loginformContainer': {
            padding: '2rem',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',

            '& .loginform': {
                width: '25rem',

                '& .formField': {
                    paddingTop: '1rem',
                },

                '& .formButton': {
                    marginTop: '2rem',
                }
            }
        }
    }
}))