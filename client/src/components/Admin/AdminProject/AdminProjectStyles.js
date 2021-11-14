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
                display: 'flex',
                alignItems: 'center',

                '& .headercontainerboxHomeLink': {
                    cursor: 'pointer',

                    '&:hover': {
                        color: 'black'
                    }
                },

                '& .headercontainerboxTitle': {
                    display: 'flex',
                    alignItems: 'center',
                },

                '& .projectCreateBtn': {
                    border: '1px solid',
                    borderColor: theme.palette.ourgold.main,
                    height: '3rem',
                    width: '3rem',
                    marginBottom: '-.5rem',
                    borderRadius: '3rem',
                    cursor: 'pointer',

                    '&:hover': {
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                    }
                },  
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
                            marginBottom: '-0.25rem',
                            textAlign: 'right',
                            cursor: 'pointer',
                            // background: 'lightgrey',

                            '& .projectEditBtn': {
                                border: '1px solid',
                                borderColor: theme.palette.btncolor.main,
                                height: '2rem',
                                width: '2rem',
                                borderRadius: ''
                            }
                        }
                    }
                }
            }
        }
    }
}))