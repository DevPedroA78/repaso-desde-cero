import {
    Row,
    Form,
    FormGroup,
    Input,
    Button
} from reactstrap

function WriteAPost(){
    return(
        <Row>
            <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}></Col>
            <Form className="mt-3 p-3 bg-dark text-white border-rounded shadow">
                <FormGroup> 
                    <label>Titulo</label>
                    <Input/>
                </FormGroup>
                <FormGroup>
                    <label>Contenido</label>
                    <Input/>
                </FormGroup>
                <FormGroup>
                    <label>Url de la imagen</label>
                    <Input/>
                </FormGroup>
                <Button type="button">Guardar post</Button>
            </Form>
        </Row>
    )
}

export default WriteAPost