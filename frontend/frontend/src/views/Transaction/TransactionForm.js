import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  CardFooter,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Form,
  FormFeedback
} from 'reactstrap';

import { addTransaction } from '../../actions/index';

import BootstrapSwitchButton from 'bootstrap-switch-button-react'

const categories = [
  { id: "", name: 'Select a Category', type: 0 },
  { id: "", name: 'Select a Category', type: 1 },
  { id: 1, name: 'Client payment', type: 1 },
  { id: 2, name: 'Employee Salary', type: 0 },
  { id: 3, name: 'Employee Salary1', type: 0 },
  { id: 4, name: 'Client payment1', type: 1 },
];

function mapDispatchToProps(dispatch) {
  return {
    addTransaction: transaction => dispatch(addTransaction(transaction))
  }
}

const mapStateToProps = state => {
  return { transactions: state.transactions };
}


class TransactionFormUI extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      transaction: {
        type: 1,
        category: '',
        description: '',
        date: '',
        amount: 0,
      },
       isValid: {
        category: true,
        description: true,
        date: true,
        amount: true
       },
    }

    this.typeSwitch = this.typeSwitch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInputs = this.clearInputs.bind(this); }

  typeSwitch(checked) {
    this.setState({
      type: checked ? 1 : 0,
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const { transaction } = this.state;

    // console.log(transaction);
    transaction[name] = value
    // console.log(transaction);
    // console.log(this.state.transaction);
    this.setState({
      transaction: transaction
    })
  }

  clearInputs() {
    let initialTransaction = {
      type: 1,
      category: '',
      description: '',
      date: '',
      amount: 0,
    };

    this.setState({ transaction: initialTransaction });
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state);
    if (!this.state.transaction.category) {
      const { isValid } = this.state;
      isValid.category = false;
      this.setState({isValid: isValid})
    } else {
      const { transaction } = this.state;
      this.props.addTransaction(transaction);
      this.clearInputs();
      this.props.history.push("/transactions/")
    }
  }
  
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm={{ size: 8, offset: 2 }}>
            <Card>
              <CardHeader>
                <strong>Transaction</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <Col xs="12">
                    <FormGroup row>
                      <Col md="3"><Label htmlFor="category">Type</Label></Col>
                      <Col xs="12" md="9">
                        <BootstrapSwitchButton name="type" size="lg" onstyle="success" offstyle="danger" onlabel="Income" offlabel="Expense" width="150" onChange={(checked) => this.typeSwitch(checked)} />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col xs="12">
                    <FormGroup row>
                      <Col md="3"><Label htmlFor="category">Category</Label></Col>
                      <Col xs="12" md="9">
                        <Input invalid={!this.state.isValid.category} type="select" name="category" id="category" onChange={this.handleInputChange} value={this.state.transaction.category}>
                          {categories.filter((category) => { if (category.type === this.state.transaction.type) return category}).map((category) => (
                          <option key={category.id} value={category.id}>{category.name}</option>) )}
                      </Input>
                      <FormFeedback invalid="">Error</FormFeedback>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col xs="12">
                    <FormGroup row>
                      <Col md="3"><Label htmlFor="name">Description</Label></Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="name" name="description" onChange={this.handleInputChange} placeholder="Transaction description" value={this.state.transaction.description} required /></Col>
                    </FormGroup>
                  </Col>
                  <Col xs="12">
                    <FormGroup row>
                      <Col md="3"><Label htmlFor="date-input">Date Input</Label></Col>
                      <Col xs="12" md="9">
                        <Input type="date" id="date-input" name="date" onChange={this.handleInputChange} placeholder="date" value={this.state.transaction.date}/></Col>
                    </FormGroup>
                  </Col>

                  <Col xs="12">
                    <FormGroup row>
                      <Col md="3"><Label htmlFor="amount">Amount</Label></Col>
                      <Col xs="12" md="9"><InputGroup className="input-prepend">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>$</InputGroupText>
                        </InputGroupAddon>
                        <Input id="amount" size="16" type="text" name="amount" onChange={this.handleInputChange} value={this.state.transaction.amount} />
                      </InputGroup></Col>
                    </FormGroup>
                  </Col>
                </Form>
              </CardBody>
              <CardFooter>
                <Button onClick={this.handleSubmit} size="lg" color="primary"><i className="fa fa-dot-circle-o"></i> Save</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const TransactionForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionFormUI);

export default TransactionForm;