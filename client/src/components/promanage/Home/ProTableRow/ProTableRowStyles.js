import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    protablerow: {
        // background: 'gold',

            '& .tableRowsCellCss': {
                width: '10rem', 
                border: '1px solid green',
                paddingLeft: '0',
                paddingRight: '0',
            }
    }
}))