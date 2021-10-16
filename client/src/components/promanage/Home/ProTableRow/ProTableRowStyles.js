import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    protablerow: {
        // background: 'gold',

            '& .tableRowsCellSL': {
                border: '1px solid green',
                padding: '0',
                position: 'relative',
            },

            '& .tableRowsCellCss': {
                width: '10rem',
                height: '5rem', 
                border: '1px solid green',
                padding: '0',
                position: 'relative',

                '& .buttonEff': {
                    position: 'absolute',
                    right: '5%',
                    bottom: '5%',
                    width: '2rem',
                    height: '2rem',
                    border: '1px solid orange',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
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
                    borderBottom: '1px solid green',
                }
            }
    }
}))