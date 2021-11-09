import { Box } from '@material-ui/core'
import React, { useState } from 'react'
import moment from 'moment'

import useStyles from './MonthSliderStyles'

const MonthSlider = () => {
    const classes = useStyles()
    const months = moment.months()
    const currentMonth = moment().format('MMMM')
    const currentYear = moment().format('YYYY')
    const indexCurrentMonth = months.findIndex( mon => currentMonth === mon )
    const [count, setCount] = useState({counter: 0})

    console.log(months)
    console.log(moment().format('MMMM'))

    console.log(count)

    return (
        <Box>
            {
                months.map( (month, index) => {
                    if( index >= indexCurrentMonth ) {
                        return (
                            <Box>{ month } - { currentYear }</Box>
                        )
                    }
                })
            }
        </Box>
    )
}

export default MonthSlider
