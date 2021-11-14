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
                    height: '100%',

                    '& .servicesCreateBtn': {
                        border:'1px solid',
                        borderColor: theme.palette.grey,
                        fontSize: '3rem',
                        borderRadius: '2rem',
                        cursor: 'pointer',

                        '&:hover': {
                            borderColor: theme.palette.ourgold.main,
                            color: theme.palette.ourgold.main
                        }
                    }
                }
            }
        },

        '& .adminservicecontents': {
            marginTop: '3rem',

            '& .adminserviceContainer': {

                '& .adminserviceItem': {
                    // border: '1px solid orange',

                    '& .itemContainer': {
                        height: '15rem',
                        padding: '1rem',
                        display: 'flex',
                        flexFlow: 'column',
                        justifyContent: 'space-between',

                        '& .itemFooter': {
                            height: '2rem',
                            display: 'inline',
                            textAlign: 'right',
                            // border: '1px solid gold',

                            '& .itemFooterEditBtn': {
                                cursor: 'pointer',
                                border: '1px solid',
                                borderColor: theme.palette.btncolor.main,
                                fontSize: '1rem',
                                // padding: '.3rem',
                                borderRadius: '2rem',
                                width: '2rem',
                                height: '2rem',
                                color: theme.palette.btncolor.main,

                                '&:hover': {
                                    borderColor: theme.palette.btncolor.main,
                                    color: theme.palette.btncolor.main,
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}))