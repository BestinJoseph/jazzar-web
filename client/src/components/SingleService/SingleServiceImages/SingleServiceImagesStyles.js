import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    singleServiceImages: {
        // background: 'gold',
        height: '100%',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 25%)',
        gridAutoRows: '10px',
        justifyContent: 'center',

        '& .imageContainer': {
            gridRowEnd: 'span 60',
            transition: 'all 2s ease-out',
            overflow: 'hidden',
            position: 'relative',

            '& .serviceDisplayImage': {
                width: 'auto',
                height: '100%',
                position: 'absolute',
                zIndex: '-1',
                top: '0',
                left: '0',
                transition: '2s ease-out',
            },

            '& .imageText': {
                display: 'none',
                padding: '2rem',
                transition: '5s ease-out',
                color: 'white',
                bottom: '0',
                left: '0',
                position: 'absolute',
            },

            '&:hover': {
                backgroundColor: '#00000090',

                '& .serviceDisplayImage': {
                    transform: 'scale(1.10)'
                },

                '& .imageText': {
                    display: 'block',
                }
            }
        },
    }
}))