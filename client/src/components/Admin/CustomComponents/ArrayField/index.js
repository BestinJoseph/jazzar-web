import React, { Fragment } from 'react'
import { Box, TextField } from '@material-ui/core'
import { Field, FieldArray } from 'formik'
import { values } from 'lodash'

const ArrayField = (props) => {
    const {label, name} = props
    return (
        <FieldArray name={name} 
            render={
                arrayHelpers => (
                    <Box>
                        
                    </Box>
                )
            }
        />
    )
}

export default ArrayField
