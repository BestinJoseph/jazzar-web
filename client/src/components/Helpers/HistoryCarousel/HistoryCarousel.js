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

        [theme.breakpoints.down(412)]: {
            position: 'relative',
            left: '0.35rem',
            padding: '1rem 0rem',
            height: '350px',
        },

        '& .ImagesSection': {
            // width: '950px',
            // border: '1px solid orange',

            [theme.breakpoints.down(412)]: {
                width: '400px',
            },
            
            '& .imageContainer': {
                // border: '1px solid orange',

                '& img': {
                    width: '30rem',
                    height: '30rem',
                    marginRight: '2rem',

                    [theme.breakpoints.down(412)]: {
                        width: '15rem',
                        height: '15rem',
                    },
                },

                '& .slick-prev': {
                    background: 'red',
                }
            }
        }
    },

    arRP: {
        left: 'auto',
        right: '-20rem',
        zIndex: '5',

        '& .ImagesSection': {
            
            '& .imageContainer': {

                '& img': {
                    width: '30rem',
                    height: '30rem',
                    marginRight: '2rem',

                    [theme.breakpoints.down(412)]: {
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