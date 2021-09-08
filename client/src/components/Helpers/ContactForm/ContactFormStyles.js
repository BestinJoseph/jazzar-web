import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => (
    {
        formBody: {
            padding: '2.5rem',
            background: 'white',
            borderRadius: '.25rem',

            [theme.breakpoints.down(415)]: {
                padding: '2.5rem 1rem'
            }
        },

        textFieldInput: {
            fontSize: '2rem',
            padding: '1.25rem 0',

            [theme.breakpoints.down(415)]: {
                padding: '1rem 0',
            }
        },
    
        labelRoot: {
            fontSize: '1.5rem',
            fontWeight: '600'
        },
    
        rootInput: {
            fontSize: '1.25rem'
        },
    
        formBtn: {
            padding: '1.1rem 0',
            fontSize: '1.15rem',
            fontWeight: '600'
        }
    }
))