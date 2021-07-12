import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    individualService: {

        '& .servicesItem': {
            paddingBottom: '6rem',


            '& .servicesItemIcon': {
                width: '7rem',
                height: '7rem',
                borderRadius: '3.5rem',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '2rem',

                [theme.breakpoints.down(412)]: {
                    marginBottom: '1rem',
                },
            },

            '& .servicesItemTitle': {
                fontWeight: '900',
                fontSize: '1.75rem',
                letterSpacing: '-0.05rem',

                [theme.breakpoints.down(412)]: {
                    fontSize: '1.25rem',
                },
            },

            '& .servicesDescription': {
                fontSize: '1rem',
                color: '#869298',
                paddingTop: '1.25rem',

                [theme.breakpoints.down(412)]: {
                    paddingTop: '.75rem',
                },
            },

            '& .serviceLink': {
                marginTop: '2rem',
                display: 'flex',
                color: 'gold',
                textDecoration: 'none',
                // border: '1px solid blue',
                alignItems: 'center',

                [theme.breakpoints.down(412)]: {
                    marginTop: '1rem',
                },

                '& .serviceLinkText': {
                    marginRight: '0.25rem',
                    fontSize: '1.15rem',
                },

                '& .serviceLinkIcon': {
                    display: 'none',
                    marginRight: '-.45rem',
                },

                '&:hover': {
                    '& .serviceLinkIcon': {
                        display: 'block',
                    }
                }
            },

            [theme.breakpoints.down(412)]: {
                paddingBottom: '2rem',
            },

            '&:lastChild': {
                paddingBottom: '0',
            }
        },
    }
}))