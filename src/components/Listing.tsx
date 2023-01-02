import React from "react";
import Table from 'react-bootstrap/Table';
import TableBody from './Row'

interface ListingProps {
    countries: any[];
}

function Listing({countries}: ListingProps) {

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Flag</th>
          <th style={{ cursor: "pointer" }}>Name</th>
          <th>Region</th>
          <th>Population</th>
          <th>Languages</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <TableBody countries={countries}/>
      </tbody>
    </Table>
  );
}

export default Listing;