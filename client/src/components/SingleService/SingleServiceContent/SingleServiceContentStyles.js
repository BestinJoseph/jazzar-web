import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    singleservicecontent: {
        height: '100%',
        width: '65%',
        position: 'relative',
        margin: '0 auto',
        background: '#ffffff',
        top: '-2rem',

        '& .singleservicecontainer': {
            background: '#ffffff',
            padding: '5rem 0rem 8rem 0rem',
            marginBottom: '-2rem',
            display: 'flex',
            justifyContent: 'center',

            '& .innerBox': {
                width: '40rem',

                '& .subTitleText': {
                    fontSize: '1.5rem',
                    fontWeight: '500',
                    lineHeight: '2rem',
                },

                '& .contentText': {
                    marginTop: '2rem',
                    fontSize: '1rem',
                }
            }
        }
    }
}))