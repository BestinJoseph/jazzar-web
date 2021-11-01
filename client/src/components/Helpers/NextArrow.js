import React from 'react'
import { Box, makeStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import classNames from 'classnames'

const NextArrow = (props) => {
    const classes = useStyles()
    const { style, onClick } = props;
    
    return (
        <div
            className={classes.iconBtn }
            style={{ ...style }}
            onClick={onClick}
        >
            <Box className={classNames('btnContainer')}>
                <ArrowForwardIosIcon className={classNames('arrowIcon')} />
            </Box>
        </div>
    )
}

export default NextArrow

const useStyles = makeStyles((theme) => (
    {
        iconBtn : {
            // display: "block",
            background: "#dddddd50", 
            width: '7.5rem', 
            height: '7.5rem',
            top: '11rem', //10
            left: '11rem', //11
            borderRadius: '7.5rem',
            position: 'absolute',
            cursor: 'pointer',

            [theme.breakpoints.down(429)]: {
                width: '5rem',
                height: '5rem',
                top: '5rem',
                left: '4.25rem',
            },
    
            '& .btnContainer': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
    
                '& .arrowIcon': {
                    fontSize: '4rem',
                    color: theme.palette.ourgold.main,
                },

                [theme.breakpoints.down(429)]: {

                },
            },
    
            '&:hover': {
                background: theme.palette.secondary.main,
                
                [theme.breakpoints.down(429)]: {
                    background: "#32280e50",
                },
    
                '& .btnContainer': {
        
                    '& .arrowIcon': {
                        color: theme.palette.ourgold.main, //'#6c6143'
                
                        [theme.breakpoints.down(429)]: {
                            color: '#6c6143',
                        },
                    }
                },
            }
        }
    }
))