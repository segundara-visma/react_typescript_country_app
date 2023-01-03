import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import countryType from '../types/country.type'
import CountryProps from '../types/countryProps.type'

function TableBody({countries}: CountryProps) {

  return (
      <>
        {countries && countries.map((country: countryType, key) => (
          <tr key={key}>
            <td>{country.flag}</td>
            <td>{country.name?.common}</td>
            <td>{country.region}</td>
            <td>{country.population}</td>
            <td>{country.languages ? (
              <ul>{(Object.values(country.languages)).map((item: any, key) => (
                <li key={key}>{item}</li>))}
              </ul>
            ) : null}
            </td>
            <td>
              <Link to={`/details/${country.name?.common}`}>
                <Button variant="light" data-cy={`detailsBtn-${country.name?.common}`}>
                  <i className="fa fa-angle-right"></i>
                </Button>
              </Link>
            </td>
          </tr>
        ))}
      </>
  );
}

export default TableBody;