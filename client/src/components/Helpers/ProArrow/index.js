import React from 'react'
import classNames from 'classnames'
import { Box } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import useStyles from './ProArrowStyles'

export const NextProArrow = (props) => {
    const classes = useStyles()
    const { style, onClick } = props;

    return (
        <div
            className={classes.nextIconBtn }
            style={{ ...style }}
            onClick={onClick}
        >
            <Box className={classNames('btnContainer')}>
                <ArrowForwardIosIcon className={classNames('arrowIcon')} />
            </Box>
        </div>
    )
}

export const PrevProArrow = (props) => {
    const classes = useStyles()
    const { style, onClick } = props;

    return (
        <div
            className={classes.backIconBtn }
            style={{ ...style }}
            onClick={onClick}
        >
            <Box className={classNames('btnContainer')}>
                <ArrowBackIosIcon className={classNames('arrowIcon')} />
            </Box>
        </div>
    )
  }
