import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => (
    {
        indexsection: {
            // height: '50rem',
            padding: '8rem 0 5rem',
            background: theme.palette.primary.main,
            marginBottom: '6rem',

            [theme.breakpoints.down(415)]: {
                padding: '3rem 1rem',
            },
    
            '& .servicesTitle': {
                fontSize: '3rem',
                fontWeight: '900',
                margin: '3rem 0',
                letterSpacing: '-0.15rem',
                lineHeight: '3.25rem',
                color: theme.palette.ourgold.main,
    
                '& span': {
                    display: 'block',
                }
            },
    
            '& .servicesLeftContainer': {
                paddingRight: '4rem',

                [theme.breakpoints.down(415)]: {
                    paddingRight: '0rem',
                },
    
                '& .servicesTopBody': {
                    fontSize: '1.2rem',
                    fontWeight: '400',
                    color: '#f3f1e9',
                    paddingBottom: '1.5rem',
                }
            },

            '& .servicesLeftContainer_arb': {
                paddingLeft: '4rem',
                fontFamily: theme.language.arb.fontFamily,

                [theme.breakpoints.down(415)]: {
                    paddingLeft: '0rem',
                },
    
                '& .servicesTopBody': {
                    fontSize: '1.2rem',
                    fontWeight: '400',
                    color: '#869298',
                    paddingBottom: '1.5rem',
                }
            },
    
            '& .servicesRightContainer': {
                paddingLeft: '4rem',
                display: 'flex',
                alignItems: 'center',

                [theme.breakpoints.down(415)]: {
                    paddingLeft: '0rem',
                },
    
                '& .rightContainer': {
                    background: '#26B16D',
                    padding: '2rem',
                    borderRadius: '0.5rem',
    
                    '& .serviceRightTopText': {
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        color: 'white',
                    }
                }
            },

            '& .servicesRightContainer_arb': {
                paddingRight: '4rem',
                display: 'flex',
                alignItems: 'center',

                [theme.breakpoints.down(415)]: {
                    paddingRight: '0rem',
                },
    
                '& .rightContainer': {
                    background: '#26B16D',
                    padding: '2rem',
                    borderRadius: '0.5rem',
    
                    '& .serviceRightTopText': {
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        color: 'white',
                    }
                }
            }
        }
    }
))