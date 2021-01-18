import React, { useState } from 'react';
import { Navbar, Nav, Form, Button, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';

const Header = ({ onSubmit }) => {

  const [queryType, setQueryType] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }

  const handleSubmit = () => {
    onSubmit(queryType, searchValue)
  }

  return <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Honeywell</Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Form inline>
          <DropdownButton  className="mr-sm-2" id="dropdown-basic-button" title={queryType ? `${queryType.toUpperCase()}` : "Query Type"} variant="info" onSelect={(value) => setQueryType(value)} >
            <Dropdown.Item eventKey="asset">Asset</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="space">Space</Dropdown.Item>
          </DropdownButton>
        <FormControl type="text" value={searchValue} placeholder="Search" className="mr-sm-2" onChange={handleSearchValueChange}/>
        <Button variant="outline-info" onClick={handleSubmit}>Search</Button>
      </Form>
    </Navbar>
  </>
}

export default Header