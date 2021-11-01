import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    projectsHeaderList: {
        // background: theme.palette.secondary.main,
        marginBottom: '2rem',

        '& .popType': {
            height: '3rem',
            width: '7rem',
            marginRight: '1rem',
            cursor: 'pointer',

            '&:last-child': {
                marginRight: '0rem',
            },

            '&:hover': {
                background: '#e9ecef'
            }
        }
    }
}))