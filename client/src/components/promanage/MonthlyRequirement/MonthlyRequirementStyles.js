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
                border: '2px solid white',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                padding: '.35rem',

                '&:hover': {
                    color: 'white',
                    border: '2px solid black',
                }
            }
        },

        '& .monthlyRequirementContainer': {
            // display: 'flex',
            // justifyContent: 'center',

            '& .mrDataStructure': {
                border: '.25px solid #E7E6E1', 
                padding: '.25rem 1rem',
                fontSize: '1rem',
            }
        }
    }
}))