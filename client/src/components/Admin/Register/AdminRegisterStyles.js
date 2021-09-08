import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    register: {
        // background: 'gray',
        height: '100vh',

        '& .registerformContainer': {
            padding: '2rem',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',

            '& .registerform': {
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