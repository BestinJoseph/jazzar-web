import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    singleproject: {
        // height: '24rem',
        width: '60rem',
        marginTop: '3rem',

        '& .projectTitle': {
            fontSize: '1.5rem',
            fontWeight: '600'
        },

        '& .projectListImageContainer': {
            marginTop: '3rem',

            '& .projectListImages': {
                width: '25rem',
                height: '15rem',
                overflow: 'hidden',
                display: 'inline-block',
                margin: '0 2rem 2rem 0',
                borderRadius: '1rem',
                boxShadow: '0px 0px 8px #88888890',

                '& .projectListImage': {
                    width: '100%',
                    height: 'auto',
                }
            }
        }
    }
}))