import { makeStyles } from '@material-ui/core'

export default makeStyles({
    nextIconBtn : {
        // display: "block",
        background: "#dddddd50", 
        width: '5rem', 
        height: '100%',
        top: '0', //10
        right: '0', //11
        position: 'absolute',
        cursor: 'pointer',

        '& .btnContainer': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',

            '& .arrowIcon': {
                fontSize: '4rem',
                color: '#829DCE',

                '&:hover': {
                    color: '#0f1524',
                }
            }
        },

        '&:hover': {
            background: 'orange'
        }
    },

    backIconBtn : {
        // display: "block",
        background: "#dddddd90",
        width: '5rem', 
        height: '100%',
        top: '0', //10
        left: '0rem', //11
        position: 'absolute',
        zIndex: '5',
        cursor: 'pointer',

        '& .btnContainer': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '4rem',
            paddingLeft: '2rem',

            '& .arrowIcon': {
                fontSize: '4rem',
                color: '#829DCE',
            }
        },

        '&:hover': {
            background: 'orange',

            '& .btnContainer': {
    
                '& .arrowIcon': {
                    color: '#0f1524',
                }
            },
        }
    }
})