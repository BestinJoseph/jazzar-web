import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    singleServiceImages: {
        background: 'gold',
        height: '100%',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 25%)',
        gridAutoRows: '10px',
        justifyContent: 'center',

        '& .imageContainer': {
            backgroundColor: 'red',
            gridRowEnd: 'span 60',
            transition: 'background-color 2s ease-out',

            '& .imageText': {
                display: 'none',
                padding: '2rem',
                transition: 'all 5s ease-out',
            },

            '&:hover': {
                backgroundColor: 'green',

                '& .imageText': {
                    display: 'block',
                }
            }
        },
    }
}))