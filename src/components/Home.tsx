import React, { useState } from "react";
import Header from "./Header";
import Listing from "./Listing";
// import Pagination from "./Pagination";
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
// import _ from 'lodash'
import { useFetch } from './useFetch'

function Home() {
  const [searchString, setSearchString] = useState<string>("");
  // const [currentPage, setCurrentPage] = useState<Number>(1);

  const url = "https://restcountries.com/v3.1/all";

  const {countries,loading,error} = useFetch({url})

  const showSearchResult = (searchString: string) => {
    // setCurrentPage(1)
    setSearchString(searchString.toLowerCase())
  };

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
      {countries && countries.length > 0 && !error && !loading && (
        <>
          <Listing countries={countries} />
        </>
      )}
      {countries && countries.length < 1 && !loading && !error && (
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