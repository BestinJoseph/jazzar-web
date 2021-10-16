import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    dailyrequirements: {
        // height: '35rem',
        padding: '9rem 0 10rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexFlow: 'column',

        '& .dailyheader': {
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            flexFlow: 'column',
            marginBottom: '2rem',
        }
    }
}))