import { makeStyles } from "@material-ui/core"

export default makeStyles((theme)=>({
    promanagehome: {
        // background: theme.palette.ourgold.main,
        // height: '15rem',
        padding: '9rem 3% 10rem 3%',

        '& .tableConatiner': {
            // paddingTop: '8rem',
            background: 'white',

            '& .projectAddBtn': {
                cursor: 'pointer', 
                display: 'flex', 
                alignItems: 'center',
                borderRadius: '50%',
                width: '2.5rem',
                height: '2.5rem',
                background: theme.palette.success.main,
                color: 'white',

                '&:hover': {
                    background: theme.palette.info.main
                },
            },

            '& .tableCellHeaderCss': {
                width: '10rem', 
                // border: '1px solid green'
            }
        }
    }
}))