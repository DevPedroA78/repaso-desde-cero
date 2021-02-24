import React, { useState, useEffect } from 'react'

import api from '../../lib/api'

import {
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap'

function PostDetail(){
    const [ postData, setPostData ] = useState()

    useEffect( () => {
        const urlParams = new URLSearchParams(window.location.search);
        console.log( urlParams )
        const postId = urlParams.get('postId');
        console.log( postId)
        //Aqui va la misma URL de la BD que se indico en PostPage.js
        /*fetch(`${postId}/.json`).then( response => response.json())
        .then( json => {
            setPostData( json )
        })*/
        console.log("request", api.getPost(postId))
    }, [])
    //let { params } = useParams();
    //console.log( params )
    let { imgUrl, title, content } = postData
    //console.log( api.author )
    api.greetings() //VERIFICAR SE ESTE LLAMADO AL API debe comentarse o no

    return(
        <Row className="PostDetail p-3">
            <Col xs="12" md={{ size: 10, offset: 1 }}>
                <Card className="shadow">
                    <CardImg 
                    top width="100%" 
                    src={imgUrl} 
                    alt="Card image cap" 
                    />
                    <CardBody>
                        <CardTitle tag="h5">{ title }</CardTitle>
                        <CardText>{ content}</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default PostDetail