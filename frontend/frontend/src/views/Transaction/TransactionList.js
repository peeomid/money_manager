import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { 
  Button, ButtonGroup,
  Badge, Card, CardBody,
  CardHeader, Col, Pagination, PaginationItem,
  PaginationLink, Row, Table } from 'reactstrap';

// https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const getMappingValue = (mapping, index, key) => {
  var value = index in mapping ? mapping[index][key] : undefined;
  return value;
}

const types = [
  { id: 1, name: 'Income', badge: 'success', backgroundColor: 'white' },
  { id: 0, name: 'Expense', badge: 'danger', backgroundColor: 'rgba(0, 0, 0, 0.05)' }
];

const type_mapping = types.reduce((map, obj) => {
  map[obj.id] = { name: obj.name, badge: obj.badge, backgroundColor: obj.backgroundColor };
  return map;
}, {});

const getTypeName = (id) => getMappingValue(type_mapping, id, 'name');
const getTypeBadge = (id) => getMappingValue(type_mapping, id, 'badge');
const getTypeValue = (id, key) => getMappingValue(type_mapping, id, key);

const categories = [
  { id: 1, name: 'Client payment', type: 1 },
  { id: 2, name: 'Employee Salary', type: 0 }
];

const category_mapping = categories.reduce((map, obj) => {
  map[obj.id] = { name: obj.name, type: obj.type };
  return map;
}, {});
const getCategoryName = (id) => getMappingValue(category_mapping, id, 'name');


const transactions = [
  { id: 1, type: 1, description: 'A Tech project', date: '2020/04/01', amount: 20000, category: 1 },
  { id: 2, type: 0, description: '2020 March Employee Salary', date: '2020/04/01', amount: 2000, category: 2 },
];


const TransactionLine = (props) => (
  <>
    <tr style={{ backgroundColor: getTypeValue(props.transaction.type, 'backgroundColor') }}>
      <td>
        <Badge color={getTypeBadge(props.transaction.type)}>{getTypeName(props.transaction.type)}</Badge>
      </td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.date}</td>
      <td>{formatter.format(props.transaction.amount)}</td>
      <td>{getCategoryName(props.transaction.category)}</td>
      <td><Button className="btn-sm icon" color="warning"><i className="cui-pencil"></i></Button><Button className="btn-sm icon" color="danger"><i className="cui-circle-x"></i></Button></td>
    </tr>
  </>
)


const mapStateToProps = state => {
  return { transactions: state.transactions };
}

class TransactionListComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
    this.navigateToAdd = this.navigateToAdd.bind(this);
  }

  navigateToAdd = () => {
    this.props.history.push("/transactions/add");
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Incomes/Expenses
                <div className="card-header-actions">
                    <Button block color="primary" onClick={this.navigateToAdd}>Add</Button>
                </div>
              </CardHeader>
              <CardBody>
                <div>
                  <ButtonGroup>
                    <Button color="success">Income</Button>
                    <Button color="danger">Expense</Button>
                    <Button color="secondary">Not selected</Button>
                  </ButtonGroup>
                </div>
                <Table hover bordered responsive >
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Category</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.transactions.map((transaction) => (
                      <TransactionLine key={transaction.id} transaction={transaction} />
                    ))}
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink previous tag="button"></PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button"></PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}


const TransactionList = connect(mapStateToProps)(TransactionListComponent);

export default TransactionList;