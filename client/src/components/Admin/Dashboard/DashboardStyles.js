import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    dashboard: {

        '& .listItem': {
            cursor: 'pointer',

            '&:hover': {
                background: '#D1B000',
            },
        },

        '& .dashboardMenu': {
            display: 'flex', 
            alignItems: 'center', 
            // height: '3rem', 
            background: 'gold',
            justifyContent: 'space-between',
            padding: '1rem',

            '& .logoutButton': { 
                fontSize: '3rem',
                cursor: 'pointer',
             }
        }
    }
}))