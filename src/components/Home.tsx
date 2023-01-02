import React, { useState, useEffect } from "react";
import Header from "./Header";
import Listing from "./Listing";
import Pagination from "./Pagination";
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import _ from 'lodash'
import { useFetch } from './useFetch'

function Home() {
  const [currentRecords, setCurrentRecords] = useState<any[]>(['']);
  const [searchString, setSearchString] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [nPages, setNPages] = useState<number>(1);
  const [totalVisiblePageNumbers] = useState<number>(5);
  const [recordsPerPage] = useState<number>(5);

  const url = "https://restcountries.com/v3.1/all";

  const {countries,loading,error} = useFetch({url})

  const showSearchResult = (searchString: string) => {
    setCurrentPage(1)
    setSearchString(searchString.toLowerCase())
  };

  const setCurrent = (curr: number) => setCurrentPage(curr);

  useEffect(() => {
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const getCountryList = (countries: any[]) => {
      const currentRecords = countries && countries.length && countries.slice(indexOfFirstRecord, indexOfLastRecord);
      const nPages = countries && countries.length && Math.ceil(countries.length / recordsPerPage);
      setCurrentRecords(Array.isArray(currentRecords) ? currentRecords : [])
      setNPages(nPages)
    }

    const filteredData = (data: any[]) => {
      const newArray =  _.filter(data, (item) => item.name.common.toLowerCase().startsWith(searchString.toLowerCase()))
      return newArray
    }

    const data = searchString ? filteredData(countries) : countries

    getCountryList(data)

  }, [searchString, countries, currentPage, recordsPerPage]);

  return (
    <div className="container mt-3">
      <h1>Country List</h1>
      <Header showSearchResult={showSearchResult} />
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
      {currentRecords && currentRecords.length > 0 && !error && !loading && (
        <>
          <Listing countries={currentRecords} />
          <Pagination
            onClick={setCurrent}
            currentPage={currentPage}
            numOfPages={nPages}
            maxVisible={totalVisiblePageNumbers}
          />
        </>
      )}
      {currentRecords && currentRecords.length < 1 && !loading && !error && (
        <div className="text-center mt-5">
          <Alert variant="info" className="text-center">
            Sorry your search yields no result!
          </Alert>
        </div>
      )}
    </div>
  );
}
export default Home;