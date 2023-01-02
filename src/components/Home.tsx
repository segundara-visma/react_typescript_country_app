import React, { useState } from "react";
import Header from "./Header";

function Home() {
  const [searchString, setSearchString] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<Number>(1);

  const showSearchResult = (searchString: string) => {
    setCurrentPage(1)
    setSearchString(searchString.toLowerCase())
  };

  return <div className="App"> <Header showSearchResult={showSearchResult} /> </div>;
}
export default Home;