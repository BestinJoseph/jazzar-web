import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    userheader: {
        height: '4rem',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        padding: '0 2rem',
        justifyContent: 'space-between',
        position: 'fixed',
        top: '0',
        background: 'white',
        zIndex: '10',

        '& .menuLink': {

            '& .itemLink': {
                cursor: 'pointer',
                marginRight: '1rem',

                '&:last-child': {
                    marginRight: '0rem',
                }
            }
        }
    },
    
}))