import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    userdailyactivities: {
        height: '50rem',
        background: theme.palette.secondary.main,
        margin: '4rem auto 0rem auto',
        padding: '2rem',

        '& .userdailyHeader': {
            // border: '1px solid white',
            display: 'flex',
            alignItems: 'center',

            '& .userDailyTitle': {
                color: 'white',
                marginRight: '1rem',
            },

            '& .userDailyAddBtn': {
                cursor: 'pointer',
                color: 'white',
                fontSize: '2.5rem',

                '&:hover': {
                    color: '#F0A500',
                }
            }
        }
    }
}))