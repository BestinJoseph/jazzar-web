import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    monthlyrequirement: {
        // background: 'gold',
        // height: '30rem',
        padding: '9rem 0 10rem',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column',
        width: '100%',

        '& .monthlyRequirementHeader': {
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',

            '& .mrHeaderBtn': {
                marginLeft: '2rem', 
                cursor: 'pointer',
                border: '2px solid #CEE5D0',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                padding: '.35rem',
                color: '#5B6D5B',

                '&:hover': {
                    color: '#CEE5D0',
                    border: '2px solid #5B6D5B',
                }
            },
        },

        '& .innerContainer_MR': {
            display: 'flex',

            '& .totalIncomeSection': {
                marginLeft: '1rem',
                display: 'flex', 
                flexFlow: 'column'
            }
        },

        '& .monthlyRequirementContainer': {
            // display: 'flex',
            // justifyContent: 'center',

            '& .mrDataStructure': {
                border: '.25px solid #E7E6E1', 
                padding: '.25rem 1rem',
                fontSize: '1rem',
                textAlign: 'center',
            }
        }
    }
}))