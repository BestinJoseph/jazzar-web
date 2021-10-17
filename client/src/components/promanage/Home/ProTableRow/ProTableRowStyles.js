import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    protablerow: {
        // background: 'gold',

        '& .headerSec': {
            textTransform: 'capitalize', 
            height: '2.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #E7E6E1',
        },

        '& .tableRowsCellSL': {
            border: '1px solid #E7E6E1',
            padding: '0',
            position: 'relative',
        },

        '& .tableRowsCellCss': {
            width: '10rem',
            height: '5rem', 
            border: '1px solid #E7E6E1',
            padding: '0',
            position: 'relative',

            '& .buttonEff': {
                position: 'absolute',
                right: '5%',
                bottom: '5%',
                width: '2.25rem',
                height: '2.25rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                borderRadius: '50%',
                background: 'white',

                '&:hover': {
                    boxShadow:'0 0 5px 0px #23689B',
                    color: '#D9DAB0',
                }
            },

            '& .unHideAddButton': {
                color: 'red',
                display: 'block'
            },

            '& .dataStructure': {
                // color: 'white',
                height: '2.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // borderBottom: '1px solid green',
            }
        }
    }
}))