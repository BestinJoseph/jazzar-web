import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Grid, Box } from '@material-ui/core'
import { Formik, Form, FieldArray } from 'formik'
import classNames from 'classnames'

import useStyles from './ServiceImageFormStyles'
import { updateServiceImages } from '../../../../../../actions/services'

const ServiceImageForm = ({serviceId}) => {
    const classes = useStyles()
    const { projects } = useSelector( state => state.projects )
    const { services } = useSelector( state => state.services )
    const [images, setImages] = useState([])
    const dispatch = useDispatch()

    console.log(services.find(se => se._id === serviceId))

    const initialValues = useMemo(() => {
        if(!!serviceId) {
            return {images: services.find(se => se._id === serviceId).images}
        } else {
            return {images: []}
        }
    }, [services, serviceId])

    useEffect(() => {
        let isSubscribed = true
        let imageCollection = []
        let loopEnd = 0

        if(isSubscribed && projects.length > 0) {
            projects.forEach(project => {
                loopEnd++
                if(project.services.find( ser => ser === serviceId)) {
                    project.images.forEach( proImage => {
                        imageCollection.push(proImage)
                    })
                }

                if(projects.length === loopEnd) {
                    setImages(imageCollection)
                }
            })
        }

        return () => (isSubscribed = false)
    }, [projects, serviceId, setImages, services, initialValues])

    // console.log(initialValues)

    const handleSubmit = (values) => {
        const serviceImages = []
        let count = 0
        if(values.images.length < 1 ) {
            dispatch(updateServiceImages(serviceId, serviceImages))
        } else {
            values.images.forEach( val => {
                serviceImages.push(val._id)
                count++
                if(values.images.length === count ) {
                    dispatch(updateServiceImages(serviceId, serviceImages))
                }
            })
        }
    }

    return (
        <Grid className={classes.serviceimageform}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({values}) => {
                    console.log(values)
                    return (
                        <Form>
                            <FieldArray name="images" render = { (arrayHelpers) => (
                                <Grid container>
                                    {
                                        images && images.map( (imag, index) => {
                                            if ( values.images !== null && values.images.find( img => img._id === imag._id )) {
                                                return(
                                                    <Grid item xs={3} key={index} onClick={() => arrayHelpers.remove(values.images.findIndex(im => im._id === imag._id)) } className={classNames('serviceimageContainerSelected')}>
                                                        <img src={imag.path} alt={imag.name} className={classNames('serviceImageClass')}/>
                                                    </Grid>
                                                )
                                            } else {
                                                return(
                                                    <Grid item xs={3} key={index} onClick={() => ( values.images === null || values.images.length < 5) ? arrayHelpers.push(imag) : null } className={classNames('serviceimageContainer')}>
                                                        <img src={imag.path} alt={imag.name} className={classNames('serviceImageClass')}/>
                                                    </Grid>
                                                )
                                            }
                                        })
                                    }
                                </Grid>
                            )}/>
                            <Box style={{ position: 'fixed', bottom: '0', left: '4rem', height: '4rem', display: 'flex', alignItems: 'center', }}>
                                <Button type="submit" variant="contained" color="primary">Submit</Button>
                            </Box>
                        </Form>
                    )
                }}
            </Formik>
        </Grid>
    )
}

export default ServiceImageForm
