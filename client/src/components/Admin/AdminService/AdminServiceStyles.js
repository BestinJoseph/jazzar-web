import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    adminservice: {
        padding: '2rem 2rem',
        width: '100%',
        boxSizing: 'border-box',

        '& .adminserviceheaderContainer': {
            // background: 'gold',
            height: '3rem',

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
            }
        },

        '& .adminservicecontents': {
            marginTop: '3rem',

            '& .adminserviceContainer': {

                '& .adminserviceItem': {
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