/* eslint-disable no-labels */
import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    partners: {
        padding: '3rem 0',
        margin: '0 auto',
        width: '100%',

        '& .nameLists': {
            display: 'flex',
            justifyContent: 'center',

            '& .nameOne': {
                margin: '1rem 2rem 0 2rem',
                // border: '1px solid gold',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',

                '& .titleStyle': {
                    color: theme.palette.secondary.main,
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    margin: '0',
                    lineHeight: '4rem',
                    textTransform: 'uppercase'
                },

                '& .textStyle': {
                    color: theme.palette.tertiary.main,
                    fontSize: '.75rem',
                }
            }
        },
    }
}))