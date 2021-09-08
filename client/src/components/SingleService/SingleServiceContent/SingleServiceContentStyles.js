import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    singleservicecontent: {
        height: '100%',
        width: '65%',
        position: 'relative',
        margin: '0 auto',
        background: '#ffffff',
        top: '-3rem',
        zIndex: '1',

        '& .singleservicecontainer': {
            background: '#ffffff',
            padding: '5rem 0 0rem',
            marginBottom: '-5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

            '& .innerBox': {
                width: '40rem',

                '& .subTitleText': {
                    fontSize: '1.25rem',
                    fontWeight: '500',
                    lineHeight: '1.75rem',
                    color: '#32280e',
                    textTransform: 'uppercase'
                },

                '& .contentText': {
                    marginTop: '2rem',
                    fontSize: '1rem',
                }
            },

            '& .textTitleImageContainer': {
                marginTop: '4rem', 
                height: '25rem', 
                width: '100%', 
                overflow: 'hidden',
                border: '1px solid red',
                backgroundPosition: 'center center',
                position: 'relative',

                '& .textTitleImage': {
                    width: 'auto', 
                    height: '100%',
                    position: 'absolute',
                    transform: 'translate(0%, -30%)',
                }
            },

            '& .singleSeriveScopeContainer': {
                marginTop: '4rem', 
                width: '75%',

                '& .singleServiceScopeTitle': {
                    paddingBottom: '2rem', 
                    textAlign: 'center',
                },

                '& .singleServiceScopeListContainer': {

                    '& .singleServiceScopeList': {
                        borderBottom: '1px solid PaleGoldenrod', 
                        padding: '1rem 0',
                        cursor: 'pointer',
    
                        '&:hover': {
                            background: '#FDFDFD'
                        },
    
                        '&:last-child': {
                            // background: 'blue',
                            borderBottom: 'none',
    
                            // '& .singleServiceScopeList': {
                            //     background: 'gold',
                            // }
                        }
                    },
                },
            }
        }
    }
}))