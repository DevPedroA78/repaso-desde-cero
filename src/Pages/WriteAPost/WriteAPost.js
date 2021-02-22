import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from reactstrap

function WriteAPost() {
    const [modal, setModal] = useState( false );
    const [entryObject, setEntryObject] = useState({})

    const toggle = () => setModal(!modal);

    const getEntryData = event => {
        let property = event.target.name
        let value = event.target.value
        setEntryObject({ ...entryObject, [property]: value })
    }

    const savePost = () =>{
        //AQUI SE COLOCA ENTRE LAS COMILLAS LA URL PARA LA CONEXION con LA BASE DE DATO!!!!
        fetch(" ", {
            method:"POST",
            body: JSON.stringify(entryObject)
        }).then ( response => response.json())
        .then( json => {
            console.log( json )
            setModal ( !modal )
        })
    }

    return(
        <>
            <Modal
                isOpen={modal}
                toggle={toggle}
            >
                <ModalBody>
                    Tu post se gusrdó con exito Pete.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>

            <Row>
                <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}></Col>
                <Form className="mt-3 p-3 bg-dark text-white border-rounded shadow">
                    <FormGroup> 
                        <Label>Titulo</Label>
                        <Input onChange= { getEntryData }/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Contenido</Label>
                        <Input onChange= { getEntryData }/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Url de la imagen</Label>
                        <Input name="imgUrl" onChange= { getEntryData }/>
                    </FormGroup>
                    <Button type="button" color="primary" onClick = { savePost }>Guardar post</Button>
                </Form>
            </Row>
        </>
    )
}

export default WriteAPost