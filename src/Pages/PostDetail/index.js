import{
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap'

function PostDetail(){
    return(
        <Row className="PostDetail p-3">
            <Col xs="12" md={{ size: 10, offset: 1 }}>
                <Card className="shadow">
                    <CardImg 
                    top width="100%" 
                    src="https://picsum.photos/id/180/600" 
                    alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">Titulo del post</CardTitle>
                        <CardText>Contenido del post</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default PostDetail