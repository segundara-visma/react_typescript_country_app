import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { useFetch } from '../services/useFetch'
import countryType from '../types/country.type'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

let url: string;

export default function Details() {
  const {name} = useParams();

  url = "https://restcountries.com/v3.1/name/"+name;

  const {countries,loading,error} = useFetch({url})

  const getNativeName = (item: any) => {
    const key = Object.keys(item).find(key => item[key])
    return (key && <>{item[key]['official']}</>)
  }

  return (
    <>
        {loading && (
        <div className="text-center mt-5">
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
        )}
        {error && (
        <div className="text-center mt-5">
            <Alert variant="danger" className="text-center">
            {error.message}
            </Alert>
        </div>
        )}
        {countries && countries.length > 0 && !error && !loading && countries.map((detail: countryType, key) => (
            <Container key={key} className="px-5">
                <Row className="mt-5">
                    <Col xs lg="1" style={{fontSize: "3rem"}}><Badge pill bg="danger">{detail.name?.common.charAt(0)}</Badge></Col>
                    <Col>
                        <Row>
                            <Col style={{fontSize: "2rem"}}>{detail.name?.common}</Col>
                        </Row>
                        <Row>
                            <Col>{detail.capital}</Col>
                        </Row>
                    </Col>
                    <Col xs lg="1" style={{fontSize: "2rem"}}><i className="fa fa-ellipsis-v"></i></Col>
                </Row>
                <Row className="mt-5" xs={1}>
                    <Col style={{fontSize: "6rem"}}>
                        {detail.name && getNativeName(detail.name.nativeName)}
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col style={{fontSize: "2rem"}}>
                        <p>The country belongs to <span style={{color: "blue"}}>{detail.region}</span> region and <span style={{color: "blue"}}>{detail.subregion}</span> sub-region.</p>
                        <p>Located at the <span style={{color: "blue"}}>{detail.latlng && (detail.latlng)[0]}</span> &#8304;N and <span style={{color: "blue"}}>{detail.latlng && (detail.latlng)[1]}</span> &#8304;W, this country has population of <span style={{color: "blue"}}>{detail.population}</span></p>
                        <p>and it has gained the independence, according to the CIA World Factbook.</p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs lg="1" style={{fontSize: "2rem"}}><i className="fa fa-angle-left"></i></Col>
                    <Col style={{fontSize: "2rem"}}><i className="fa fa-map-marker"></i></Col>
                    <Col xs lg="1" style={{fontSize: "2rem"}}><i className="fa fa-angle-down"></i></Col>
                </Row>
            </Container>
        ))}
    </>
  )
}