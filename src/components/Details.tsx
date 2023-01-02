import React from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { useFetch } from './useFetch'

interface nameType {
    common: string;
    nativeName: any;
}

interface countryType {
    name?: nameType;
    capital: string;
    region: string;
    population: number;
    subregion: string;
    latlng: any[];
}

export default function Details() {
  const {name} = useParams();

  const url = "https://restcountries.com/v3.1/name/"+name;

  const {countries,loading,error} = useFetch({url})

  const getNativeName = (item: nameType) => {
    const key = Object.keys(item?.nativeName).find(key => item?.nativeName[key])
    console.log(Object.keys(item?.nativeName).find(key => item?.nativeName))
    return (key && <>{item?.nativeName[key]['official']}</>)
  }

  return (
    <>
        {countries.map((detail: countryType, key) => (
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
                        {detail.name && getNativeName(detail.name)}
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