import React, { Component } from "react";
import "react-bootstrap";
import { Table, Form } from "react-bootstrap";
import FilterResults from "react-filter-search";
import { data } from "./data";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reunderResults: true,
      data: data,
      value: ""
    };
  }
  //componentWillMount() {
  //fetch("https://jsonplaceholder.typicode.com/users")
  //.then(response => response.json())
  //.then(json => this.setState({ data: json }));
  // this.setState(mock)
  //}
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  render() {
    const { data, value } = this.state;
    return (
      <div class="container">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Search Details</Form.Label>
            <Form.Control
              type="email"
              placeholder="Search here"
              value={value}
              onChange={this.handleChange}
            />
            {/* <input type="text" value={value} onChange={this.handleChange} /> */}
          </Form.Group>
        </Form>
        <FilterResults
          value={value}
          data={data}
          renderResults={results => (
            <Table striped bordered hover responsive size="lg">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                {results.map(el => (
                  <tr>
                    <td>{el.id}</td>
                    <td>{el.name}</td>
                    <td />
                    <td>{el.email}</td>
                    <td>{el.phone}</td>
                    <td>
                      {el.company}
                      <br />
                      {el.catchPhrase}
                      <br />
                      {`link: /${el.route}/${el.company}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        />
      </div>
    );
  }
}

export default Search;
