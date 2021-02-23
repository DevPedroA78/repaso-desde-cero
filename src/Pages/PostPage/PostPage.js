import React, { useState, useEffect } from 'react'

import{
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Row,
} from 'reactstrap'

import {
    Link
} from 'react-router-dom'

import './style.css'

function PostPage(){
    const [postCollection, setPostCollection] = useState({})

    useEffect(() => {
        //AQUÍ SE COLOCA LA URL DEL FIREBASE.json A DONDE SE REALIZARA EL POST
        fetch("")
            .then(response => response.json())
            .then(json => {
                setPostCollection(json)
            })
    }, []) //LA ANOTACIÓN [ ] ES PARA QUE NO SE CICLE O REALICE LOOP INFINITO LA EJECUCION
    return(
        <Row className="pt-3 PostPage">
            {
                Object.keys(postCollection).map( key => {
                    let { title, content, imgUrl } = postCollection
                    [key]
                    return (
                        <Col xs="12" md="3">
                            <Link to={`/post-datail/?postId=${key}`}>
                                <Card class="mb-3">
                                <CardImg top width="100%" src={imgUrl} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">{title}</CardTitle>
                                    <CardText>{content}</CardText>
                                </CardBody>
                                </Card>
                            </Link>
                        </Col>
                    )
                })
            }
        </Row>
    )
}