import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    homeserviceslider: {
        position: 'relative',
        paddingTop: '3rem',
        borderTop: '1px solid',
        borderColor: theme.palette.ajwhite.main,
        display: 'flex',

        '& .homeSerivceLeftPanel': {
            width: '70%',
            position: 'relative',

            '& .homeServiceImageContainer': {
                position: 'absolute',
                right: '3rem',
                bottom: '6rem',
                borderRadius: '2rem',
                width: '40rem',
                height: '20rem',
                overflow: 'hidden',

                '& .homeServiceImage': {
                    width: '100%',
                    // height: '100%',
                }
            }
        },

        '& .homeSerivceRightPanel': {
            width: '30%',
            display: 'flex',
            justifyContent: 'space-between',

            '& .homeRightHeader': {

            },

            '& .rightPanelContent': {
                width: '60%',

                '& .homeRightHeader': {
                    marginBottom: '.5rem',
                },

                '& .homeRightText': {
                    marginBottom: '1rem',
                },

                '& .homeServiceExploreBtn': {
                    textDecoration: 'none',
                    color: theme.palette.ourgold.main,
                },
            },

            '& .homeServiceAddBtn': {
                border: '1px solid',
                borderColor: theme.palette.ajwhite.main,
                width: '4.5rem',
                height: '4.5rem',
                borderRadius: '4rem',
                padding: '.5rem',
                cursor: 'pointer',
                
                '&:hover': {
                    background: theme.palette.ajwhite.main,
                    color: theme.palette.darkColor.main
                }
            }
        },
    }
}))