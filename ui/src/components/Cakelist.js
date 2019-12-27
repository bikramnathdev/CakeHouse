import React, { Component } from 'react'
import axios from 'axios'
import Datatable from 'react-bs-datatable'
import { Modal,Row,Col } from 'react-bootstrap';
import ItemForm from './ItemForm';
import Loader from '../layouts/Loader';
const header = [
    { title: 'Name', prop: 'name',sortable: true,filterable: true },
    { title: 'Category', prop: 'category', sortable: true },
    { title: 'Flavour', prop: 'flavour', sortable: true },
    { title: 'Frosting', prop: 'frosting', sortable: true },
    { title: 'Weight', prop: 'weight', sortable: true },
    { title: 'Price', prop: 'price', sortable: true },
    { title: 'Action', prop: 'action'}
  ];
export default class Cakelist extends Component {
    
    
    constructor(props){
        super(props)

        this.state = {
            cakes: [],
            isCakeLoaded : false,
            modalShow : false,
            errorMessage : ""
        }
    }
    openModal() {
        this.setState({
            modalShow : true
        },
        () => {

        })
    }
    closeModal(){
        this.setState({
            modalShow : false
        },
        ()=>{

        })
    }
    componentDidMount(){
        axios.get('http://localhost:5000/api/post')
        .then(response => {
            this.setState({cakes: response.data}, ()=> {
                this.setState({isCakeLoaded: true})
            } )
        })
        .catch(error => {
           this.setState({errorMessage: "Server Error"})
        })
    }
    render() {
        const { cakes } = this.state
        let tableContent
        if (!this.state.isCakeLoaded && !this.state.errorMessage) {
            tableContent = <Loader/>
                        
        }
        else if(this.state.isCakeLoaded && !this.state.errorMessage){
            tableContent = <Datatable
                        tableHeaders={header}
                        tableBody={cakes}
                        tableClass="striped hover responsive"
                        rowsPerPage={5}
                        rowsPerPageOption={[5, 10, 15, 20]}
                        initialSort={{ prop: 'name', isAscending: true }}
                    />
            
        }
        else{
            tableContent = 
            <h2>
                Server Error
            </h2>
        }
        return (
            <div className="content-wrapper">
                <section className="content">
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 text-dark">Cakelist</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">Item List</h5>
                                        <div className="card-tools">
                                            <button type="button" onClick={() => this.openModal() } className="btn btn-primary">
                                            <span>Add New Item</span> 
                                            <i className="fas fa-plus" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                    <Row>
                                        <Col className="text-center">
                                            {tableContent}
                                        </Col>
                                    </Row>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Modal show={this.state.modalShow} onHide={ () => this.closeModal()} >
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ItemForm/>
                    </Modal.Body>
                </Modal>
            </div>
            
        )
    }
}
