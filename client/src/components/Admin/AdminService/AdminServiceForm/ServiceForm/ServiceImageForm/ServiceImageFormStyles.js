import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    serviceimageform: {
        width: '100%',
        border: '1px solid gold',
        position: 'relative',

        '& .serviceimageContainer': {
            padding: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // border: '1px solid red',
            height: '15rem',
            overFlow: 'hidden',
            cursor: 'pointer',

            '& .serviceImageClass': {
                width: '100%',
            },

            '&:hover': {
                border: '1px solid blue', 
            }
        },

        '& .serviceimageContainerSelected': {
            border: '1px solid red',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '15rem',
            overFlow: 'hidden',
            cursor: 'pointer',

            '& .serviceImageClass': {
                width: '100%',
            },

            '&:hover': {
                border: '1px solid blue', 
            }
        }
    }
}))