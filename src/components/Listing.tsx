import { useState } from "react";
import Table from 'react-bootstrap/Table';
import TableBody from './Row'
import CountryProps from '../types/countryProps.type'

function Listing({countries, sort, icon}: CountryProps) {

    const [order, setOrder] = useState<string>('asc');

    const reSetOrder = () => {
        setOrder(order === 'asc' ? 'desc' : 'asc')
        sort && sort(order)
    }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Flag</th>
          <th onClick={() => reSetOrder()} style={{ cursor: "pointer" }}>Name <i className={`fa fa-${icon}`}></i></th>
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