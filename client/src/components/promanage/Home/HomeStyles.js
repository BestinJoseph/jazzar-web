import { makeStyles } from "@material-ui/core"

export default makeStyles((theme)=>({
    promanagehome: {
        // background: theme.palette.ourgold.main,
        // height: '15rem',
        padding: '9rem 3% 10rem 3%',

        '& .tableConatiner': {
            // paddingTop: '8rem',
            background: 'white',

            '& .tableCellHeaderCss': {
                width: '10rem', 
                // border: '1px solid green'
            }
        }
    }
}))