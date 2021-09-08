import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { Box, Button, Typography, TextField, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { updateProjectImages, deleteProjectImage } from '../../../../../actions/projects'

const ProjectImagesForm = ({id}) => {
    const dispatch = useDispatch()
    const { projects } = useSelector( state => state.projects )
    const [images, setImages] = useState([])

    // console.log(projects)

    useEffect(() => {
        let isSubscribed = true

        if(projects.length > 0 && isSubscribed) {
            const project = projects.find( project => project._id === id )
            setImages(project.images)
        }

        return () => (isSubscribed = false)
    }, [projects, id, setImages])

    // console.log(images)

    const handleSubmit = (values, {resetForm, setSubmitting}) => {
        setSubmitting(true)
        const imagesArray = Array.from(values.images)
        let data = new FormData()
        imagesArray.forEach( (img) => {
            data.append('images', img, img.name)
        })
        dispatch(updateProjectImages(id, data))
        setTimeout(() => {
            resetForm()
            setSubmitting(false)
        }, 500)
    }

    const handleDelete = (imgId) => {

        if(imgId) {
            dispatch(deleteProjectImage(id, {imageId: imgId}))
        }
    }

    return (
        <Box style={{ padding: '0rem', }}>
            <Formik enableReinitialize={true} initialValues={images} onSubmit={handleSubmit}>
                { formProps => (
                    <Form encType="multipart/form-data">
                        <Box style={{ marginBottom: '2rem', }}>
                            <Field component={TextField} inputProps={{ multiple: true }} type="file" multiple name="images" accept="image/*" onChange={(event) => formProps.setFieldValue('images', event.target.files )}/>
                        </Box>
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                    </Form>
                )}
            </Formik>
            { 
                images && ( images.length < 1 ) ? 
                <Typography variant="body1" style={{ marginTo: '2rem', }}>No images uploaded</Typography> : 
                <Grid container spacing={0} style={{ marginTop: '3rem', }}>
                    { 
                        images && images.map( (img, index) => (
                            <Grid item xs={4} style={{ padding: '1rem', position: 'relative', }} key={index}>
                                <HighlightOffIcon style={{ position: 'absolute', top: '0', right: '0', fontSize:"2rem", cursor: 'pointer',  }} onClick={ () => handleDelete(img._id) } />
                                <img src={images && img.path} alt={images && img.name} style={{ width: '100%', }}/>
                            </Grid>
                        )
                    )}
                </Grid>
            }
        </Box>
    )
}

export default ProjectImagesForm
