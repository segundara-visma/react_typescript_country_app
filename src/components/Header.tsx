import React, { useState, useEffect, FormEvent, useRef, useMemo } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import debounce from 'lodash/debounce';

interface HeaderProps {
    showSearchResult: (item: string) => void;
}

function Header({showSearchResult}: HeaderProps) {

  const [searchString, setSearchString] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const searchStringHandler = (e: FormEvent) => {
    e.preventDefault();
    // if (inputRef.current?.value.length === 0) return;
    setSearchString(`${inputRef.current?.value}`);
    debouncedChangeHandler(`${inputRef.current?.value}`)
  };

  const debouncedChangeHandler = useMemo(() => debounce(value =>
    showSearchResult(value), 1000), [showSearchResult]
  )

  return (
    <Navbar bg="secondary">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: 'white' }}><i className="fa fa-bars"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home" style={{ color: 'white' }}>Country</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
            <Form.Control
                placeholder="Search by country name"
                aria-label="search"
                aria-describedby="basic-addon1"
                onChange={(e) => searchStringHandler(e)}
                value={searchString}
                ref={inputRef}
            />
        </Form>
      </Container>
    </Navbar>
  );
}

export default Header;