import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({

    historyRightPanel: {
        overFlow: 'hidden',
        position: 'absolute',
        left: '-10rem',
        // border: '1px solid red',
        height: '100%',
        display: 'flex',
        alignItems: 'center',

        [theme.breakpoints.down(429)]: {
            position: 'relative',
            left: '0.35rem',
            padding: '1rem 0rem',
            // height: '350px',
        },

        [theme.breakpoints.between(429, 1025)]: {
            position: 'relative',
            left: '0rem',
            padding: '1rem 0rem',
            // height: '350px',
            justifyContent: 'center',
        },

        '& .ImagesSection': {
            // width: '950px',
            // border: '1px solid orange',

            [theme.breakpoints.down(429)]: {
                width: '900px',
            },

            [theme.breakpoints.between(429, 1025)]: {
                width: '1024px',
            },
            
            '& .imageContainer': {
                // border: '1px solid orange',

                '& img': {
                    width: '30rem',
                    height: '30rem',
                    marginRight: '2rem',

                    [theme.breakpoints.down(429)]: {
                        width: '15rem',
                        height: '15rem',
                    },

                    '&:nth-Child(1)': {
                        margin: '0rem',
                        // border: '1px solid blue',
                    }
                },

                '& .slick-prev': {
                    background: 'red',
                }
            }
        }
    },

    arRP: {
        left: 'auto',
        right: '-10rem',
        zIndex: '5',

        '& .ImagesSection': {
            
            '& .imageContainer': {

                '& img': {
                    width: '30rem',
                    height: '30rem',
                    marginRight: '2rem',

                    [theme.breakpoints.down(429)]: {
                        width: '15rem',
                        height: '15rem',
                    },
                },

                '& .slick-prev': {
                    background: 'red',
                }
            }
        }
    }
}))