import React, { Component } from 'react'
import { Form,Button,Col, Row, InputGroup } from 'react-bootstrap';
export default class ItemForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            validated: false,
            setValidated: false
        }
        this.handleSubmit = event => {
            
            const form = event.currentTarget;
            
            if (form.checkValidity() === false) {
              event.preventDefault();              
              event.stopPropagation();
            }
            this.setState({
                validated:true
            })
          };
    }
    
    render() {
        return (
            <div>
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
            <Form.Group>
                <Form.Label>Cake Name</Form.Label>
                <InputGroup>
                <Form.Control required type="text" placeholder="Enter Cake Name" name="name" />
                <Form.Control.Feedback type="invalid">
                    Please give the cake a name
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                    Delicious!
                </Form.Control.Feedback>
                </InputGroup>
                </Form.Group>
                <Form.Group>
                <Form.Row>
                <Col>
                <Form.Label>Flavour</Form.Label>
                <InputGroup>
                <Form.Control required type="text" placeholder="Enter Flavour" name="flavour" />
                <Form.Control.Feedback type="invalid">
                    Please add flavour to your cake
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                    Yummm!
                </Form.Control.Feedback>
                </InputGroup>
                </Col>
                <Col>
                <Form.Label>Frosting</Form.Label>
                <InputGroup>
                <Form.Control required type="text" placeholder="Enter Frosting" name="frosting" />
                <Form.Control.Feedback type="invalid">
                    Please add frosting to your cake
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                    Tasty!
                </Form.Control.Feedback>
                </InputGroup>
                </Col>
                </Form.Row>
                </Form.Group>
                <Form.Group>
                <Form.Label>Weight</Form.Label>
                    <InputGroup>
                    <Form.Control required type="text" placeholder="Enter Weight" name="weight" />
                    <Form.Control.Feedback type="invalid">
                        How much do your cake weigh?
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                        Fits good!
                    </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <InputGroup>
                    <Form.Control required type="text" placeholder="Enter Price" name="price" />
                    <Form.Control.Feedback type="invalid">
                        How much is for this cake?
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                        Awesome!
                    </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Primary Image</Form.Label>
                    <InputGroup>
                    <Form.Control required type="file" name="image" />
                    <Form.Control.Feedback type="invalid">
                    How much is for this cake?
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                        Looks Good!
                    </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Row>
                <Col md={{span:4, offset: 8}} xs={{span:4, offset: 8}} className="text-center">
                <Button variant="primary" type="submit">
                    Save
                </Button>
                </Col>
                </Row>
          </Form>
            </div>
        )
    }
}
