import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    adminproject: {
        padding: '2rem 2rem',
        width: '100%',
        boxSizing: 'border-box',

        '& .adminprojectheaderContainer': {
            // background: 'gold',
            height: '3rem',
            display: 'flex',
            justifyContent: 'space-between',

            '& .headercontainerBox': {

                '& .headercontainerboxHomeLink': {
                    cursor: 'pointer',

                    '&:hover': {
                        color: 'black'
                    }
                },

                '& .headercontainerboxTitle': {
                    display: 'flex',
                    alignItems: 'center',
                }
            },

            '& .backToProManagerBtn': {
                background: 'gold',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem 2rem',
                fontSize: '.75rem',

                '&:hover': {
                    color: 'white',
                }
            }
        },

        '& .adminprojectcontents': {
            marginTop: '3rem',

            '& .adminprojectContainer': {

                '& .adminprojectItem': {
                    // border: '1px solid orange',

                    '& .itemContainer': {
                        // background: 'gold',
                        height: '15rem',
                        padding: '1rem',
                        display: 'flex',
                        flexFlow: 'column',
                        justifyContent: 'space-between',

                        '& .itemFooter': {
                            borderTop: '1px solid gold',
                            margin: '.5rem 0',
                            // background: 'lightgrey',
                        }
                    }
                }
            }
        }
    }
}))