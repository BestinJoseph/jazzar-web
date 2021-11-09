/* eslint-disable no-labels */
import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    partners: {
        padding: '3rem 0',
        // margin: '0 auto',
        width: '100%',
        overflowX: 'scroll',

        [theme.breakpoints.down(429)]: {
            overflow: 'scroll',
            padding: '1rem 0',
        },

        [theme.breakpoints.between(429, 1025)]: {
            overflow: 'scroll',
            padding: '2rem 0 2.5rem',
        },

        '& .nameLists': {
            display: 'flex',
            justifyContent: 'start',
            width: '100%',

            [theme.breakpoints.down(429)]: {
                justifyContent: 'start',
                paddingRight: '2rem',
            },

            [theme.breakpoints.between(429, 1025)]: {
                justifyContent: 'start',
                paddingRight: '2rem',
            },

            '& .nameOne': {
                margin: '1rem 2rem 0 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',

                [theme.breakpoints.down(429)]: {
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                },

                '& .titleStyle': {
                    color: theme.palette.secondary.main,
                    fontSize: '2rem',
                    fontWeight: '800',
                    margin: '0',
                    lineHeight: '2.5rem',
                    textTransform: 'uppercase',

                    [theme.breakpoints.down(429)]: {
                        fontSize: '2rem',
                    },
                },

                '& .textStyle': {
                    color: theme.palette.tertiary.main,
                    fontSize: '.75rem',

                    [theme.breakpoints.down(429)]: {
                        display: 'none',
                    },
                },

                '&:last-child': {
                    paddingRight: '2rem',
                }
            },
        },
    }
}))